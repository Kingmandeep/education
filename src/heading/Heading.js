import React from "react";
import "./heading.css";
import { Link } from 'react-router-dom';
export default function Heading() {
  return (
    <nav>
      <div className="hleft">
        <div className="logo">
          <h1><span>D</span>eep<span>O</span>cean</h1>
        </div>
        <div className="htp">
          <ul>
            {/* <li><Link activeClassName="active_class"  to='/' className="main_nav"><h3>HOME</h3></Link></li>
            <li><Link activeClassName="active_class"  to='/course' className="main_nav"><h3>COURSES</h3></Link></li>
            <li><NavLink activeClassName="active_class"  to='/' className="main_nav"><h3>PRACTISE</h3></NavLink></li>
            <li><NavLink activeClassName="active_class"  to='/' className="main_nav"><h3>CONTEST</h3></NavLink></li>
           */}
            <li><h3>HOME</h3></li>
            <li><h3>COURSES</h3></li>
            <li><h3>PRACTISE</h3></li>
            <li><h3>CONTEST</h3></li>
            
          </ul>
        </div>
      </div>
      <div className="hright">
      <button className="signup">Sign Up</button>
        <button className="signin">Sign In</button>
        
      </div>
    </nav>
  );
}
