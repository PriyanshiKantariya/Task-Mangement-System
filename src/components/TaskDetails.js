import React, { Component } from 'react';

class TaskDetails extends Component {
  state = {
    task: {} // You would fetch the task data from the API and store it here.
  };

  componentDidMount() {
    // Fetch task data for the given ID from your backend API.
    // Update the state with the fetched task.
  }

  render() {
    const { task } = this.state;
    return (
      <div>
        <h2>Task Details</h2>
        <div>
          <h3>{task.title}</h3>
          <p>Description: {task.description}</p>
          <p>Deadline: {task.deadline}</p>
          <p>Priority: {task.priority}</p>
        </div>
      </div>
    );
  }
}

export default TaskDetails;
