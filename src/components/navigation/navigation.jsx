// import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
// import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
//import "./logo.png";

const Nav = (props) => {
    return (
        // <linkto= 'main' className= 'logo'> 
        
        <div className="nav-strip"><Link to={"/home"} className="nav-link">
        <div className="nav-link-style">
            <label className="nav-label">Home</label>
        </div>
        </Link>
            <Link to={"/menu"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">View Menu</label>
                </div>
                </Link>
                <Link to={"/Order"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Order</label>
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
            <Link to={"/SignOut"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Sign Out</label>
                </div>
            </Link>
        </div>
    
        // const Button = styled.Button
        //     // background-color: black;
        //     // color: white;
        //     // font-size: 20px;
        //     // padding: 10px 60px;
        //     // border-radius: 5px;
        //     // margin: 10px 0px;
        //     // cursor: PointerEvent;
        //     // ;

        //     <Button onClick=(SignIn)>
        //         Disabled Button
        //         </Button>


    );
    }
export default Nav; 
