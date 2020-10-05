import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';


class FacebookLeadSync extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.facebookConnected ? this.props.faceBookUser.name : "User Not Connected"}</h1>
        <h1>Facebook Lead Sync</h1>
        <button>
          <Link to="/ads/dashboard">Back</Link>
        </button>
        <button>
          <Link to="/ads/dashboard">Cancel</Link>
        </button>
        <button>
          <Link to="/ads/dashboard">Skip Step</Link>
        </button>
        <button>
          <Link to="/ads/facebook/pixel">Next</Link>
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

export default connect(mapStateToProps, mapActionToProps)(FacebookLeadSync)
