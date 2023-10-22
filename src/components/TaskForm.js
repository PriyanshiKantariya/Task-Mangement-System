import React, { Component } from 'react';

class TaskForm extends Component {
  state = {
    title: '',
    description: '',
    deadline: '',
    priority: 'Low',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Create a task object from the form data
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      deadline: this.state.deadline,
      priority: this.state.priority,
    };

    // Send the task data to your backend API or handle it as needed
    console.log('New Task:', newTask);

    // Reset the form fields
    this.setState({
      title: '',
      description: '',
      deadline: '',
      priority: 'Low',
    });
  };

  render() {
    const { title, description, deadline, priority } = this.state;
    return (
      <div>
        <h2>Task Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={title} onChange={this.handleChange} />
          <br />

          <label>Description:</label>
          <textarea name="description" value={description} onChange={this.handleChange} />
          <br />

          <label>Deadline:</label>
          <input type="date" name="deadline" value={deadline} onChange={this.handleChange} />
          <br />

          <label>Priority:</label>
          <select name="priority" value={priority} onChange={this.handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <br />

          <button type="submit">Save Task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
