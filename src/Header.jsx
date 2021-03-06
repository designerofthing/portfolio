import React from "react";
import { NavLink, Link } from "react-router-dom";


const Header = () => {
    return(
        <nav className="ui borderless menu">
            <div className="ui container">
                <Link id="header" className="header item" to="/" activeStyle={{color: "#dfddc7" }}>
                    My Portfolio
                </Link>
                
                <div className="right menu">
                        <NavLink
                        id="about-tab"
                        className="ui item"
                        activeStyle={{ fontWeight: "bold", color: "#dfddc7"}}
                        to="/about"
                        >                      
                        About Me
                        </NavLink>
                                <NavLink
                                id="cv-tab"
                                className="ui item"
                                activeStyle={{ fontWeight: "bold", color: "#dfddc7"}}
                                to="/cv"
                                >
                                CV    
                                </NavLink> 
                        <NavLink
                        id="projects-tab"
                        className="ui item"
                        activeStyle={{ fontWeight: "bold", color: "#dfddc7"}}
                        to="/projects"
                        >
                        Projects    
                        </NavLink> 
                </div>
            </div>
        </nav>
    );
};

export default Header;
