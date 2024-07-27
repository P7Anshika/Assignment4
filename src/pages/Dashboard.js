import React from 'react';
import Chart from '../components/Chart';
import Calendar from '../components/Calendar';
import KanbanBoard from '../components/KanbanBoard';
import Table from '../components/Table';
import BasicForm from '../components/Form/BasicForm';

const mockData = [
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'Jane Doe', email: 'jane.doe@example.com' },
];

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <BasicForm />
    <Table data={mockData} />
    <Chart />
    <Calendar />
    <KanbanBoard />
  </div>
);

export default Dashboard;
