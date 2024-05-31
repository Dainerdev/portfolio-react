import React from "react";
import './NavComponent.css';

export const NavComponent = () => {
  return (
    <div>
      <nav className="sidebar close">
        <header>
            <div className="logo-text">
                <span className="image">
                    <a href="#Inicio"><img src="/logo2.png" alt="logo"/></a>
                </span>
                <div className="text header-text">
                    <span className="name">DainerDev</span>
                    <span className="profession">Desarrollador Web</span>
                </div>
            </div>
            <i className='bx bx-chevron-right altern'></i>
        </header>

        <div className="menu-bar">
            
            <div className="menu">
                <ul className="menu-links">
                    <li className="nav-link">
                        <a href="#Inicio">
                            <i className='bx bx-home icon'></i>
                            <span className="text nav-text">Inicio</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="#Acerca-de-mi">
                            <i className='bx bx-user icon'></i>
                            <span className="text nav-text">Acerca de mí</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="#Formacion-Academica">
                            <i className='bx bx-book-bookmark icon'></i>
                            <span className="text nav-text">Formación</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="#Experiencia-Laboral">
                            <i className='bx bx-timer icon'></i>
                            <span className="text nav-text">Exp Laboral</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="#Momentos-Casuales">
                            <i className='bx bxs-carousel icon'></i>
                            <span className="text nav-text">Momentos</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="#Hobbies">
                            <i className='bx bx-list-ul icon'></i>
                            <span className="text nav-text">Hobbies</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="bottom-content">
                <li className="mode">
                    <div className="sun-moon">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                    </div>
                    <span className="mode-text text">Dark Mode</span>

                    <div className="toggle-switch">
                        <span className="switch"></span>
                    </div>
                </li>
            </div>
        </div>
    </nav>
    </div>
  );
};
