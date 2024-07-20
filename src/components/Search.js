import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const searchLinks = [
    { name: 'Home for Sale', path: '/homeforsale' },
    { name: 'Home to Let', path: '/hometolet' },
    { name: 'Apartment for Sale', path: '/apartmentforsale' },
    { name: 'Apartment to Let', path: '/apartmenttolet' },
    { name: 'Office for Sale', path: '/officeforsale' },
    { name: 'Office to Let', path: '/officetolet' }
  ];

  return (
    <div className="footersection">
      <h4>Search</h4>
      <ul>
        {searchLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;