import React from "react";
import './Navbar.css';
import {Nav} from 'react-bootstrap';

export default function Navbar() {

    return(

        <div className="hamburger-container">
            <body>
                <div className="menu">
                <div className="button-list">
                    <Nav.Link className="Navbar-button" href="Account">
                        <text>
                            Account
                        </text>
                    </Nav.Link>
                    <Nav.Link className="Navbar-button" href="Notifications">
                        <text>
                            Notifications
                        </text>
                    </Nav.Link>
                    <Nav.Link className="Navbar-button" href="HelpAndSupport">
                        <text>
                            Help and Support 
                        </text>
                    </Nav.Link>
                    <Nav.Link className="Navbar-button" href="About">
                        <text>
                            About
                        </text>
                    </Nav.Link>
                    <Nav.Link className="Navbar-button" href="Login_Screen">
                        <text>
                            Logout
                        </text>
                    </Nav.Link>
                </div>
                </div>
            </body>
        </div>

    );

}