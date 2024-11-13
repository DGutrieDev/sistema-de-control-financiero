import user_image from '../assets/images/profile-picture.jpeg';
import { useEffect, useRef } from 'react';

const Sidebar = () => {
    const menuBtnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const menuItems = document.querySelectorAll(".menu > ul > li");

        const handleClick = (event: Event) => {
            const item = event.currentTarget as HTMLElement;
            const submenu = item.querySelector(".submenu") as HTMLElement;

            if (submenu && submenu.classList.contains("open")) {
                submenu.classList.remove("open");
                item.classList.remove("active");
            } else {
                menuItems.forEach((menuItem) => {
                    const submenu = menuItem.querySelector(".submenu") as HTMLElement;
                    menuItem.classList.remove("active");
                    submenu?.classList.remove("open");
                });
                if (submenu) {
                    submenu.classList.add("open");
                    item.classList.add("active");
                }
            }
        };

        menuItems.forEach(item => {
            item.addEventListener("click", handleClick);
        });

        const toggleSidebar = () => {
            const sidebar = document.querySelector(".sidebar") as HTMLElement;
            sidebar.classList.toggle("active");
        };

        const menuBtn = menuBtnRef.current;
        if (menuBtn) {
            menuBtn.addEventListener("click", toggleSidebar);
        }

        // Limpia los eventos al desmontar el componente
        return () => {
            menuItems.forEach(item => {
                item.removeEventListener("click", handleClick);
            });
            if (menuBtn) {
                menuBtn.removeEventListener("click", toggleSidebar);
            }
        };
    }, []);

    return (
        <div className="sidebar">
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
