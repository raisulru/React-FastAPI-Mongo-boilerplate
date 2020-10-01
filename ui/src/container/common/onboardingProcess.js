
//CONTAINER
import React from 'react';
import { Link } from "react-router-dom";

/**
 * PROPERTIES & FUNCTION 
 * 
 */

function OnBoardingProcess() {
  return (
    <div>
      <h1>On Board Process</h1>
      <button>
      <Link to="/ads/dashboard">Dashboard</Link>
      </button>
    </div>
  );
}

export default OnBoardingProcess;
