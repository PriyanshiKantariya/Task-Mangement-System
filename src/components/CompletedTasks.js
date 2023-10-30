import React, { Component } from 'react';
import Header from './Header';
import './style.css';
import Sidebar from './Sidebar';

class CompletedTask extends Component {
  state = {
    completedTasks: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.fetchCompletedTasks();
  }

  async fetchCompletedTasks() {
    try {
        const response = await fetch('http://localhost:8080/api/completed-tasks');
        const data = await response.json();
        this.setState({ completedTasks: data, isLoading: false });
    } catch (error) {
        console.error("Error fetching completed tasks:", error);
        this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { completedTasks, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div className="home">
<div className="header">
    <Header />
</div>

<div className="main-content">
     <Sidebar/>
     <div className='todo-list'>
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>
              {task.title} - {task.deadline} - Priority: {task.priority}
            </li>
          ))}
        </ul>
      </div>
 
</div>
</div>

    );
  }
}

export default CompletedTask;








