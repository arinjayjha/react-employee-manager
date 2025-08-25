import React from 'react';
import EmployeeInput from './components/EmployeeInput';
import EmployeeList from './components/EmployeeList';

export default function App() {
  return (
    <div style={{ maxWidth: 720, margin: '2rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Employee Manager</h1>
      <EmployeeInput />
      <hr style={{ margin: '1.5rem 0' }} />
      <EmployeeList />
    </div>
  );
}
