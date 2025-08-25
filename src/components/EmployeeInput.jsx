import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_EMPLOYEE } from '../store/employeesSlice';

export default function EmployeeInput() {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const name = nameRef.current?.value?.trim();
    const role = roleRef.current?.value?.trim();

    if (!name || !role) {
      setStatus('Please enter both name and role.');
      return;
    }

    dispatch(ADD_EMPLOYEE({ name, role }));
    setStatus(`Added ${name} (${role})`);

    // clear inputs (since we're using refs/uncontrolled inputs)
    nameRef.current.value = '';
    roleRef.current.value = '';
    nameRef.current.focus();
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <div style={{ display: 'grid', gap: '0.5rem', maxWidth: 420 }}>
        <input ref={nameRef} type="text" placeholder="Name" />
        <input ref={roleRef} type="text" placeholder="Role" />
        <button onClick={handleAdd}>Add</button>
        {status && <small style={{ color: '#555' }}>{status}</small>}
      </div>
    </div>
  );
}
