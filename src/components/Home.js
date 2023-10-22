import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import TaskWorkspace from './TaskWorkspace'; // Import the workspace component
import './style.css';

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <Header />
            </div>

            <div className="main-content">
                <div className="sidebar">
                   
                </div>
                <div className="workspace">
                    <TaskWorkspace />
                </div>
            </div>
        </div>
    );
}

export default Home;
