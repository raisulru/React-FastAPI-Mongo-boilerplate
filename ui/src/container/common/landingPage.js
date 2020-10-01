
//CONTAINER
import React from 'react';
import { Link } from "react-router-dom";
/**
 * PROPERTIES & FUNCTION 
 * 
 */

function LandingPage() {
  return (
    <div className="landing_page">
      <h1>Landing Page</h1>
      <button type="button" className="btn btn-success">
      <Link to="/ads/onboarding-process">Connect</Link>
      </button>
    </div>
  );
}

export default LandingPage;
