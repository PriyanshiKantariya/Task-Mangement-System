import React, { Component } from 'react';

class TaskList extends Component {
  state = {
    tasks: [] // You would fetch tasks from the API and store them here.
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <a href={`/tasks/${task.id}`}>{task.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
