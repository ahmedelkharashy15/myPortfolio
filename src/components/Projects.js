import React from "react";
import { Link , NavLink , Outlet} from "react-router-dom";

const Projects = () => {
    const style1 = ({isActive}) => {
        return {
            background: isActive ? "linear-gradient(to right,#2e2511,#e7bd59)" : "transparent",
        }
    }
    
    return(
        <div className="projects" id="projects">
            <div  className="sec-title">
                <h2>My Projects</h2>
                <p>You Can Take A Look On My Projects Here</p>
            </div>

            <nav className="projects-nav">
                <NavLink style={style1} to='sec1' className="sec1-link px-3 px-md-5">1st Section</NavLink>
                <NavLink style={style1} to='sec2' className="sec2-link px-3 px-md-5">2nd Section</NavLink>
                <NavLink style={style1} to='sec3' className="sec3-link px-3 px-md-5">3rd Section</NavLink>
            </nav>

            <Outlet/>
        </div>
    )
}

export default Projects;