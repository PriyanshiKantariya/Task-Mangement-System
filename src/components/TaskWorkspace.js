import React from 'react';
import AddTaskButton from './AddTaskButton'; // Import the button component
import TaskForm from './TaskForm';
const TaskWorkspace = () => {
  const handleAddTaskClick = () => {
    // Handle the click event, e.g., show the task form
    // You can implement the logic to display the form here.
  };

  return (
    <div className="task-workspace">
      <AddTaskButton onClick={handleAddTaskClick} /> 
      {/* Add the task form here */}
      <div>
      {/* Your existing content for the TaskWorkspace */}
      <TaskForm /> {/* Add the TaskForm component here */}
    </div>
    </div>
    
  );
}

export default TaskWorkspace;
