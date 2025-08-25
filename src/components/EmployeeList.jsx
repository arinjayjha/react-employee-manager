import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_EMPLOYEE } from '../store/employeesSlice';

export default function EmployeeList() {
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();

  const promoteToManager = (emp) => {
    if (emp.role === 'Manager') return; // no-op if already Manager
    dispatch(UPDATE_EMPLOYEE({ id: emp.id, role: 'Manager' }));
  };

  return (
    <div>
      <h2>Employees</h2>
      {employees.length === 0 ? (
        <p>No employees yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {employees.map(emp => (
            <li key={emp.id}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <div>
                <strong>{emp.name}</strong> — <em>{emp.role}</em>
              </div>
              <button onClick={() => promoteToManager(emp)}>
                Update Role
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
