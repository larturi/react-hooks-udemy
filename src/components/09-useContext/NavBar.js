import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">UseContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="./login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="./about">About</NavLink>
                        </li>
                    </ul>

                </div>

                </div>
            
        </nav>
    )
}
