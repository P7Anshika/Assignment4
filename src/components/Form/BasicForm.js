import React, { useState } from 'react';

const BasicForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  const validate = () => {
    const newErrors = { name: '', email: '' };
    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email || !/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Valid email is required';
    setErrors(newErrors);
    return Object.values(newErrors).every(x => x === '');
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formState);
      // handle form submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formState.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formState.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
