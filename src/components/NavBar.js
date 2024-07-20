import React from 'react';
import { Link } from "react-router-dom"; 
import '../App.css'

function NavBar() {
  return (
    <div>
      <nav className="navbar">
            <div className="navbarlogo">
                <Link to="/">
                <span className="navbartitle">
                    Urban<span className='wise'>Wise</span>
                    <span>Realtors</span>
                </span>
                </Link>
            </div>
            <div className="navbarlinks">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/buy">BUY</Link></li>
                <li><Link to="/rent">RENT</Link></li>
                <li><Link to="/listproperty">LIST PROPERTY</Link></li>
                <li><Link to="/propertymanagement">PROPERTY MANAGEMENT</Link></li>
                <li><Link to="/infohub">INFO HUB</Link></li>
            </ul>
            </div>
        </nav>
    </div>
  );
}

export default NavBar;