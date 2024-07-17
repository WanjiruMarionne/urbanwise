import React from 'react';
import { Link } from 'react-router-dom';

function Investment() {
  const investmentLinks = [
    { name: 'Investment Calculators', path: '/investmentcalculators' },
    { name: 'Financing Options', path: '/financingoptions' },
    { name: 'Buying Tips', path: '/buyingtips' },
    { name: 'Selling Strategies', path: '/sellingstrategies' },
    { name: 'Real Estate Terminology', path: '/realestateterminology' }
  ];

  return (
    <div className="footersection">
      <h4>Investment</h4>
      <ul>
        {investmentLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Investment;