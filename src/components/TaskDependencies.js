import React, { Component } from 'react';

class TaskDependencies extends Component {
  state = {
    tasks: [], // Fetch a list of tasks from your API
    selectedDependencies: []
  };

  handleDependencyChange = (taskId) => {
    const { selectedDependencies } = this.state;
    if (selectedDependencies.includes(taskId)) {
      this.setState({
        selectedDependencies: selectedDependencies.filter((id) => id !== taskId),
      });
    } else {
      this.setState({
        selectedDependencies: [...selectedDependencies, taskId],
      });
    }
  };

  render() {
    const { tasks, selectedDependencies } = this.state;
    return (
      <div>
        <h2>Task Dependencies</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  value={task.id}
                  checked={selectedDependencies.includes(task.id)}
                  onChange={() => this.handleDependencyChange(task.id)}
                />
                {task.title}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskDependencies;
