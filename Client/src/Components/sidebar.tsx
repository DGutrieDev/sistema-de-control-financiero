import user_image from '../assets/images/profile-picture.jpeg';
import { useEffect, useRef, useCallback } from 'react';
import { useAuth } from '../Auth/AuthContext';
import '../styles/sidebar.css';

const Sidebar = () => {
    const menuBtnRef = useRef<HTMLDivElement>(null);
    const { isAuth } = useAuth();
 
     // Si el usuario no está autenticado, no renderiza el Sidebar
     if (!isAuth) return null;

    const toggleSidebar = useCallback(() => {
        const sidebar = document.querySelector(".sidebar") as HTMLElement;
        sidebar.classList.toggle("active");
    }, []);

    const toggleTheme = useCallback(() => {
        const body = document.querySelector("body") as HTMLElement;
        body.classList.toggle("dark");

        const themeIcon = document.querySelector(".theme-icon") as HTMLElement;
        if (body.classList.contains("dark")) {
            themeIcon.classList.remove("ph-moon");
            themeIcon.classList.add("ph-sun");
        } else {
            themeIcon.classList.remove("ph-sun");
            themeIcon.classList.add("ph-moon");
        }
    }, []);

    const handleMenuClick = useCallback((event: Event) => {
        const item = event.currentTarget as HTMLElement;
        const submenu = item.querySelector(".submenu") as HTMLElement;

        const isActive = item.classList.contains("active"); // Verificar si está activo
        const menuItems = document.querySelectorAll(".menu > ul > li");

        menuItems.forEach((menuItem) => {
            const submenu = menuItem.querySelector(".submenu") as HTMLElement;
            menuItem.classList.remove("active");
            submenu?.classList.remove("open");
        });
        if (!isActive && submenu) {
            submenu.classList.add("open");
            item.classList.add("active");
        }
    }, []);

    useEffect(() => {
        const menuItems = document.querySelectorAll(".menu > ul > li");
        const menuBtn = menuBtnRef.current;
        const themeMode = document.querySelector(".theme_mode") as HTMLElement;

        menuItems.forEach((item) => item.addEventListener("click", handleMenuClick));
        if (menuBtn) menuBtn.addEventListener("click", toggleSidebar);
        if (themeMode) themeMode.addEventListener("click", toggleTheme);

        return () => {
            menuItems.forEach((item) => item.removeEventListener("click", handleMenuClick));
            if (menuBtn) menuBtn.removeEventListener("click", toggleSidebar);
            if (themeMode) themeMode.removeEventListener("click", toggleTheme);
        };
    }, [handleMenuClick, toggleSidebar, toggleTheme]);

    return (
        <div className="sidebar active">
            <div className="menu-btn" ref={menuBtnRef}>
                <i className="ph ph-caret-left"></i>
            </div>
            <div className="head">
                <div className="user-img">
                    <img src={user_image} alt="User" />
                </div>
                <div className="user-details">
                    <p className="title">Welcome !</p>
                    <p className="name">John Doe</p>
                </div>
            </div>
            <div className="nav">
                <div className="menu">
                    <p className="title">Menu</p>
                    <ul>
                        <li>
                            <a href="/#">
                                <i className="icon ph-bold ph-house-simple"></i>
                                <span className="text">Home</span>
                            </a>
                        </li>
                        <li>
                            <a className="theme_mode">
                                <i className="theme-icon ph ph-moon"></i>
                                <span className="text">Change Mode</span>
                            </a>
                        </li>
                        <br />
                        <p className="title">Data</p>
                        <li>
                            <a href="/#">
                                <i className="ph ph-chart-bar"></i>
                                <span className="text">Balance</span>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i className="ph ph-money"></i>
                                <span className="text">Data Register</span>
                                <i className="arrow ph-bold ph-caret-down"></i>
                            </a>
                            <ul className="submenu">
                                <li><a href="/#">Transactions</a></li>
                                <li><a href="/#">Savings</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <p className="title">Account</p>
                <ul>
                    <li>
                        <a href="/#">
                            <i className="ph ph-user"></i>
                            <span className="text">My Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <i className="ph ph-sign-out"></i>
                            <span className="text">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
