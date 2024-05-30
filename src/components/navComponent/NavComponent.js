import React from "react";
import './NavComponent.css';

export const NavComponent = () => {
  return (
    <div>
      <nav class="sidebar close">
        <header>
            <div class="logo-text">
                <span class="image">
                    <a href="#Inicio"><img src="/logo2.png" alt="logo"/></a>
                </span>
                <div class="text header-text">
                    <span class="name">DainerDev</span>
                    <span class="profession">Desarrollador Web</span>
                </div>
            </div>
            <i class='bx bx-chevron-right altern'></i>
        </header>

        <div class="menu-bar">
            
            <div class="menu">
                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="#Inicio">
                            <i class='bx bx-home icon'></i>
                            <span class="text nav-text">Inicio</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#Acerca-de-mi">
                            <i class='bx bx-user icon'></i>
                            <span class="text nav-text">Acerca de mí</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#Formacion-Academica">
                            <i class='bx bx-book-bookmark icon'></i>
                            <span class="text nav-text">Formación</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#Experiencia-Laboral">
                            <i class='bx bx-timer icon'></i>
                            <span class="text nav-text">Exp Laboral</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#Momentos-Casuales">
                            <i class='bx bxs-carousel icon'></i>
                            <span class="text nav-text">Momentos</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#Hobbies">
                            <i class='bx bx-list-ul icon'></i>
                            <span class="text nav-text">Hobbies</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="bottom-content">
                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark Mode</span>

                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
            </div>
        </div>
    </nav>
    </div>
  );
};
