import React, { useState } from 'react';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    todo: ['Task 1', 'Task 2'],
    inProgress: ['Task 3'],
    done: []
  });

  const handleDrop = (e, status) => {
    e.preventDefault();
    const task = e.dataTransfer.getData('text');
    setTasks(prevTasks => {
      const updatedTasks = { ...prevTasks };
      Object.keys(updatedTasks).forEach(key => {
        updatedTasks[key] = updatedTasks[key].filter(item => item !== task);
      });
      updatedTasks[status].push(task);
      return updatedTasks;
    });
  };

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData('text', task);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {Object.keys(tasks).map(status => (
        <div
          key={status}
          onDrop={(e) => handleDrop(e, status)}
          onDragOver={(e) => e.preventDefault()}
          style={{ width: '30%', border: '1px solid #ccc', padding: '10px' }}
        >
          <h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
          {tasks[status].map((task, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, task)}
              style={{ padding: '5px', border: '1px solid #ddd', margin: '5px 0' }}
            >
              {task}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
