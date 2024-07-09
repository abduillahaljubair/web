import React from 'react';
import styles from './Sidebar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import {useAuthStore } from '../../../store/AuthStore'
const Sidebar = () => {
    const navigate = useNavigate();
    const { logout } = useAuthStore();

    const handleLogout = () => {
        logout()
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <div className={styles.categoryList}>
                <a href="#">Fruits</a>
                <a href="#">Meats</a>
                <a href="#">Dairy& Bakery</a>
                 <a href="#" ><button  onClick={handleLogout}>Logout</button></a> 
                
                <a href="#" >Dashboard</a>
                <span>Discount %</span>
            </div>
        </div>
    );
};

export default Sidebar;