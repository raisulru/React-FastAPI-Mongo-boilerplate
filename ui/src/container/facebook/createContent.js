
//CONTAINER
import React from 'react';
import { Link } from "react-router-dom";

/**
 * PROPERTIES & FUNCTION 
 * 
 */

function CreateFacebookContent() {
  return (
    <div>
      <h1>Ceate Facebook Content</h1>
      <button type="button" className="btn">
        <Link to="/ads/facebook/target-audience">Audience Targeting</Link>
      </button>
    </div>
  );
}

export default CreateFacebookContent;
