import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    const navigateLogout = () => {
        localStorage.clear()
        navigate("/login");
    }

    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bolder" to="/home">The TF</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/challenges">Challenges</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/profile">Profile</Link>
                            </li>

                        </ul>
                    </div>
                    <button onClick={navigateLogout} type="button" className="btn btn-primary">Log Out</button>
                </div>
            </nav>
        </div>
    );
}

export default Header;
