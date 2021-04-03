import React from 'react'

export default function Header() {
    return (
        <div>
            
            <nav className="navbar bg-dark justify-content-center">
                <li className="nav-link">
                    <a href="/" className="nav-link">
                       Refresh
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/menu" className="nav-link">
                       sidebar
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/dashboard" className="nav-link">
                       Dashboard
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/projects" className="nav-link">
                       my projects
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/topics" className="nav-link">
                       my topics
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/about" className="nav-link">
                    about
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/contact" className="nav-link">
                       my contact
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/login" className="nav-link">
                       my login
                    </a>
                </li>
                <li className="nav-link">
                    <a href="/logout" className="nav-link">
                       my logout
                    </a>
                </li>

          
            </nav>
        </div>
    )
}
