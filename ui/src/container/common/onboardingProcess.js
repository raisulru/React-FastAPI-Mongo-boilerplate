
import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import FacebookAuth from 'react-facebook-auth';
import { FacebookButton } from './components/button'
import { saveFacebookUser } from '../../store/facebookResource'


class OnBoardingProcess extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuthenticate = this.handleAuthenticate.bind(this);
  }

  handleAuthenticate(response) {
    this.props.saveFacebookUser(response)
  }

  render() {
    return (
      <div>
        <h1>{this.props.facebookConnected ? this.props.faceBookUser.name : "User Not Connected"}</h1>
        <FacebookAuth
          appId="373086590539630"
          callback={this.handleAuthenticate}
          component={FacebookButton}
        />
        <button>
          <Link to="/ads/dashboard">Dashboard</Link>
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
      saveFacebookUser
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(OnBoardingProcess)
