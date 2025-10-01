import React, { useState, useEffect } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await API.get('/tasks');
        setTasks(data);
      } catch (error) {
        setMessage('Could not fetch tasks.');
      }
    };
    fetchTasks();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/tasks', { title });
      setTasks([...tasks, data]);
      setTitle('');
      setMessage('Task created successfully!');
    } catch (error) {
      setMessage('Failed to create task.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
      setMessage('Task deleted!');
    } catch (error) {
      setMessage('Failed to delete task.');
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <hr/>
      <h3>Create New Task</h3>
      <form onSubmit={handleCreateTask}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
        <button type="submit">Add Task</button>
      </form>
      {message && <p>{message}</p>}
      <hr/>
      <h3>Your Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => handleDeleteTask(task._id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;