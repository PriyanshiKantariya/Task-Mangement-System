import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './style.css';
import TodoList from './To-do';

const Deadlines = () => {
    return (
        <div className="home">
            <div className="header">
                <Header />
            </div>

            <div className="main-content">
                 <Sidebar/>
                    <TodoList />

             
            </div>
        </div>
    );
}

export default Deadlines;
