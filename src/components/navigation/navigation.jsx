import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Nav = (props) => {
    return (
        <div className="nav-strip">
            <Link to={"/menu"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">View Menu</label>
                </div>
            </Link>
            <Link to={"/SignIn"} className="nav-link" id="middle-link">
                <div className="nav-link-style">
                    <label className="nav-label">Sign In</label>
                </div>
            </Link>
            <Link to={"/signUp"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Sign Up</label>
                </div>
            </Link>
            <Link to={"/logOut"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Log Out</label>
                </div>
            </Link>
        </div>
    );
    }
export default Nav; 
