import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            
            <nav className="navbar bg-dark justify-content-center">
                <li className="nav-link">
                    <a to="/" className="nav-link">
                       Refresh
                    </a>
                </li>
        
                <li className="nav-link">
                    <NavLink to="/menu" className="nav-link" activeClassName="btn btn-primary">
                       sidebar
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/dashboard" className="nav-link" activeClassName="btn btn-primary">
                       dashboard
                    </NavLink>
                </li>
                <li className="nav-link">
                    <Link to="/projects" className="nav-link">
                       my projects
                    </Link>
                </li>
                <li className="nav-link">
                    <NavLink to="/topics" className="nav-link" activeClassName="btn btn-primary">
                       my topics
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/about" className="nav-link" activeStyle={{backgroundColor:"hotpink"}}>
                    about
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/contact" className="nav-link" activeClassName="btn btn-primary">
                       my contact
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/loginform" className="nav-link" activeClassName="btn btn-primary">
                       my login
                    </NavLink>
                </li>
                <li className="nav-link">
                    <Link to="/logout" className="nav-link">
                       my logout
                    </Link>
                </li>
  
          
            </nav>
        </div>
    )
}
