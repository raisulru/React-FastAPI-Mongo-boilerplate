
import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import FacebookAuth from 'react-facebook-auth';
import { saveFacebookUser } from '../../store/facebookResource';
import { facebookAppId } from '../../settings';
import { FacebookButton } from './components/button';


class OnBoardingProcess extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuthorization = this.handleAuthorization.bind(this)
  }

  handleAuthorization(response) {
    this.props.saveFacebookUser(response)
    if (this.props.facebookConnected) {
      this.props.history.push("/ads/facebook/connect")
    }
  }

  render() {
    return (
      <div>        
          <FacebookAuth
            appId={facebookAppId}
            callback={this.handleAuthorization}
            component={FacebookButton}
          />
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
