import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import "./components/style.css"
import CompletedTasks from './components/CompletedTasks';
import Deadlines from './components/deadline';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/completed-tasks" element={<CompletedTasks/>} />
            <Route path="/deadlines" element={<Deadlines/>} />
     </Routes>
      </div>
    </Router>
  );
}

export default App;
