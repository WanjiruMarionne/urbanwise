import React from 'react';
import { Outlet } from 'react-router-dom';

function Company() {
  return (
    <div className="footersection">
      <Outlet />
    </div>
  );
};

export default Company;