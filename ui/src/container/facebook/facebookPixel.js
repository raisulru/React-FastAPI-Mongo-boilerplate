import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';


class FacebookPixel extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.facebookConnected ? this.props.faceBookUser.name : "User Not Connected"}</h1>
        <h1>Facebook Pixel Setup</h1>
        <button>
          <Link to="/ads/dashboard">Skip</Link>
        </button>
        <button>
          <Link to="/ads/dashboard">Next</Link>
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

export default connect(mapStateToProps, mapActionToProps)(FacebookPixel)
