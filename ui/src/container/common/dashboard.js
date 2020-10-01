
//CONTAINER
import React from 'react';
import { Link } from "react-router-dom";

/**
 * PROPERTIES & FUNCTION 
 * 
 */

function DashBoard() {

  return (
    <div className="landing_page">
      <h1>DashBoard</h1>
      <button type="button" className="btn">
        <Link to="/ads/facebook/create-content">Create Facebook Leads</Link>
      </button>
    </div>
  );
}

export default DashBoard;
