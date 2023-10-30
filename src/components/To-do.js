import React, { Component } from 'react';

class TaskList extends Component {
  state = {
    tasks: [],
    isLoading: true,
    error: null
  };

  handleComplete = async (taskDetail) => {
    try {
        const response = await fetch('http://localhost:8080/api/complete-task', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskDetail),
        });
        if (response.status !== 200) {
            alert(await response.text());
            return;
        }
        // Re-fetch tasks to refresh the list
        this.fetchTasks(); 
        window.location.reload();
    } catch (error) {
        console.error("Error completing task:", error);
    }
};

async fetchTasks() {
  try {
      const response = await fetch('http://localhost:8080/api/tasks');
      const data = await response.json();
      this.setState({ tasks: data });
  } catch (error) {
      console.error("Error fetching tasks:", error);
  }
}

  componentDidMount() {
    this.fetchTasks();

  }

  render() {
    const { tasks} = this.state;

    return (
      <div className='todo-list'>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={`${task.title}-${task.deadline}-${task.priority}`}>
                        {task.title} - {task.deadline} - Priority: {task.priority}
                        <button onClick={() => this.handleComplete(task)}>Complete</button>
                    </li>
                ))}
            </ul>
      </div>
    );
  }
}

export default TaskList;
