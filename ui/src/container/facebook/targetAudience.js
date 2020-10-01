
//CONTAINER
import React from 'react';
import { Link } from "react-router-dom";

/**
 * PROPERTIES & FUNCTION 
 * 
 */

function FacebookAudienceTargeting() {
  return (
    <div>
      <h1>Facebook Audience Targeting</h1>
      <button type="button" className="btn btn-success">
        <Link to="/ads/facebook/billing">Schedule Ad</Link>
      </button>
    </div>
  );
}

export default FacebookAudienceTargeting;
