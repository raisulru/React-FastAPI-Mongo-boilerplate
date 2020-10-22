import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import FacebookAuth from 'react-facebook-auth';
import { saveFacebookUser } from '../../store/facebookResource';
import { facebookAppId } from '../../settings';
import { FacebookButton } from './components/button';
import GoogleLogo from '../../images/google-ads.png'
import LinkedinLogo from '../../images/linkedin.png'
import { AdsBar } from './components/adsBar';


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
        <AdsBar name="Ads Platform"/>
        <div className="connect-create-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center py-5">
                        <div className="connect-ad-account">
                            <div className="col-md-12  text-center mt-4">
                                <h6 className="connect-title mb-4">Create ad account</h6>
                            </div>
                            <div className="btn-group text-center">
                                <FacebookAuth
                                  appId={facebookAppId}
                                  callback={this.handleAuthorization}
                                  component={FacebookButton}
                                />
                                <button type="button" className="btn btn-connect mr-2"><img src={GoogleLogo}/>Google ads</button>
                                <button type="button" className="btn btn-connect"><img src={LinkedinLogo}/>Linkedin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="back-next">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 text-center text-lg-left ">
                        <Link to='/ads/onboarding'>Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
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
