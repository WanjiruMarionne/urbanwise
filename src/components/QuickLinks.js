import React from 'react';
import { Outlet } from 'react-router-dom';

function QuickLinks() {
  return (
    <div className="footersection">
      <Outlet />
    </div>
  );
};

export default QuickLinks;