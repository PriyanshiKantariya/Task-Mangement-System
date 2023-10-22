import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm'; // Import the TaskForm component
import TaskDependencies from './components/TaskDependencies';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<TaskList />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            <Route path="/add-task" element={<TaskForm />} />
            <Route path="/task-dependencies" element={<TaskDependencies />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
