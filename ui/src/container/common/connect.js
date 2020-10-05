
import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';


class OnBoardingProcess extends React.Component {

  render() {
    return (
      <div>        
        <button>
          <Link to="/ads/facebook/connect">Facebook</Link>
        </button>
        <button>
          <Link to="/ads/dashboard">Google Ads</Link>
        </button>
        <button>
          <Link to="/ads/dashboard">Linkedin</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    
  }
)

const mapActionToProps = dispatch => {
  return bindActionCreators(
    {
      
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(OnBoardingProcess)
