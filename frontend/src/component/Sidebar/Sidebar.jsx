import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useAuthStore } from '../../store/AuthStore'

const Sidebar = () => {
    const navigate = useNavigate();
    const { logout } = useAuthStore();

    const handleLogout = () => {
        logout()
        navigate('/login');
    };

    return (
        <div className="sidebar">
            <h2>My Dashboard</h2>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
