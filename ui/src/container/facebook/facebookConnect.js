import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import FacebookAuth from 'react-facebook-auth';
import { FacebookButton } from './components/button';
import { saveFacebookUser } from '../../store/facebookResource';
import { facebookAppId } from '../../settings';


class FacebookConnect extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuthorization = this.handleAuthorization.bind(this);
  }

  handleAuthorization(response) {
    this.props.saveFacebookUser(response)
  }

  render() {
    return (
      <div>
        <h1>{this.props.facebookConnected ? this.props.faceBookUser.name : "User Not Connected"}</h1>
        <FacebookAuth
          appId={facebookAppId}
          callback={this.handleAuthorization}
          component={FacebookButton}
        />
        <button>
          <Link to="/ads/onboarding">Cancel</Link>
        </button>
        <button>
          <Link to="/ads/facebook/lead-sync">Next</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    faceBookUser: state.facebook.user,
    facebookConnected: state.facebook.connected
  }
)

const mapActionToProps = dispatch => {
  return bindActionCreators(
    {
      saveFacebookUser,
      getFacebookPages
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(FacebookConnect)
