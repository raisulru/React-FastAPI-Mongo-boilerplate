
//CONTAINER
import React from 'react';
import { Link } from "react-router-dom";

/**
 * PROPERTIES & FUNCTION 
 * 
 */

function FacebookBillAndSchedule() {
  return (
    <div>
      <h1>Billing and Schedule</h1>
      <button type="button" className="btn btn-success">
        <Link to="/ads/facebook/publish">Preview</Link>
      </button>
    </div>
  );
}

export default FacebookBillAndSchedule;
