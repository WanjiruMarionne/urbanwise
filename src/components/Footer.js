import React from 'react';
import { Link} from 'react-router-dom';
import Discover from './Discover';
import Search from './Search';
import Investment from './Investment';
import QuickLinks from './QuickLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footersection">
        <h4>Company</h4>
        <ul>
          <li><Link to="/company/aboutus">About Us</Link></li>
          <li><Link to="/company/team">Our Team</Link></li>
          <li><Link to="/company/contactus">Contact Us</Link></li>
        </ul>
      </div>
      <div className="footersection">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/quicklinks/buy">Buy</Link></li>
          <li><Link to="/quicklinks/rent">Rent</Link></li>
          <li><Link to="/quicklinks/listproperty">List Property</Link></li>
          <li><Link to="/quicklinks/propertymanagement">Property Management</Link></li>
          <li><Link to="/quicklinks/infohub">Info Hub</Link></li>
        </ul>
      </div>
      <Discover />
      <Search />
      <QuickLinks />
      <Investment />
    </footer>
  );
};

export default Footer;