import React from "react";
// import Home from "./Home";
import { Link, Outlet,  } from "react-router-dom";



const App = () => {
    return (
        <div>
          <nav>
            <Link to= "/">Go to Home Page</Link>
            <Link to= "/procedures">See Our Procedures</Link>
            <Link to= "/contact">Contact Us!</Link>

          </nav>
          <Outlet />
          
          <div>
            
          </div>
        </div>
    );
}

export default App;