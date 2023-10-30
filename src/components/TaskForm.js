import React, { Component } from 'react';
import './style.css';

class TaskForm extends Component {
  state = {
    title: '',
    deadline: '',
    priority: '',
    isVisible: false,
    errorMessage: '',
  };

  toggleVisibility = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
      errorMessage: '',
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleTaskSubmission = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const { title, deadline, priority } = this.state;
    const taskData = {
      title,
      deadline,
      priority: parseInt(priority, 10), // Convert priority to an integer
    };

    try {
      const response = await fetch('http://localhost:8080/api/submit-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful submission if needed
      console.log('Task saved successfully');
      // Reset the form fields
      this.setState({
        title: '',
        deadline: '',
        priority: '',
        errorMessage: '',
      });
      this.toggleVisibility();  // Hide the form
      window.location.reload(); 
    }
    catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      this.setState({ errorMessage: 'Error saving task. Please try again.' });
    }
  };

  render() {
    const { title, deadline, priority, isVisible, errorMessage } = this.state;

    return (
      <div className='task-form'>
        {errorMessage && <p>{errorMessage}</p>}
        {isVisible ? (
          <form onSubmit={this.handleTaskSubmission}>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={this.handleChange} />
            <br />

            <label>Deadline</label>
            <input type="date" name="deadline" value={deadline} onChange={this.handleChange} />
            <br />

            <label>Priority</label>
            <input type="number" name="priority" value={priority} onChange={this.handleChange} />
            <br />
            <button type="submit">Save Task</button>
          </form>
        ) : (
          <button type="submit" onClick={this.toggleVisibility}>Add Task</button>
        )}
      </div>
    );
  }
}

export default TaskForm;
