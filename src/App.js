import React, { useState,useEffect  } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Raju', position: 'Developer' },
    { id: 2, name: 'Abhi', position: 'Designer' },
    { id: 3, name: 'Chandu', position: 'Manager' },
    { id: 4, name: 'Venkey', position: 'HR' },
    { id: 5, name: 'Raju Mohan', position: 'Analyst' },
    { id: 6, name: 'Askok', position: 'Developer' },
    { id: 7, name: 'Balaji', position: 'Sales' },
  ]);

  const [editId, setEditId] = useState(null);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('')

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleEdit = (employee) => {
    setEditId(employee.id);
    setName(employee.name);
    setPosition(employee.position);
  };

  const handleUpdate = () => {
    setEmployees(employees.map(employee =>
      employee.id === editId ? { ...employee, name, position } : employee
    ));
    setEditId(null);
    setName('');
    setPosition('');
  };

  return (
    <div className="App">
      <h1>Employee Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>
                <button onClick={() => handleEdit(employee)}>Edit</button>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editId && (
        <div>
          <h2>Edit Employee</h2>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </label>
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}

export default App;
