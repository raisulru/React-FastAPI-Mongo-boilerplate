
//CONTAINER
import React from 'react';
import { Link } from "react-router-dom";

/**
 * PROPERTIES & FUNCTION 
 * 
 */

function FacebookPublish() {
  return (
    <div>
      <h1>publish ads on facebook</h1>
      <button type="button" className="btn btn-success">
        <Link to="/ads/dashboard">Publish</Link>
      </button>
    </div>
  );
}

export default FacebookPublish;
