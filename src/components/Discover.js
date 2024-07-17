import React from 'react';
import { Link } from 'react-router-dom';

function Discover() {
    const locations = [
      { name: 'Westlands', path: '/westlands' },
      { name: 'Parklands', path: '/parklands' },
      { name: 'Riverside', path: '/riverside' },
      { name: 'Lavington', path: '/lavington' },
      { name: 'Karen', path: '/karen' },
      { name: 'Kilimani', path: '/kilimani' },
      { name: 'Upperhill', path: '/upperhill' },
      { name: 'Nairobi', path: '/nairobi' },
      { name: 'Nyeri', path: '/nyeri' },
      { name: 'Nakuru', path: '/nakuru' },
    ];
  
    return (
      <div className="footersection">
        <h4>Discover</h4>
        <ul>
          {locations.map((location) => (
            <li key={location.name}>
              <Link to={location.path}>{location.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Discover;