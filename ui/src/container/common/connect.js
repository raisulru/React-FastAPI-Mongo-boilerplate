import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import FacebookAuth from 'react-facebook-auth';
import { saveFacebookUser } from '../../store/facebookResource';
import { facebookAppId } from '../../settings';
import { FacebookButton } from './components/button';
import GoogleLogo from '../../images/google-ads.png';
import LinkedinLogo from '../../images/linkedin.png';
import { AdsBar } from './components/adsBar';


function OnBoardingProcess (props) {
  const dispatch = useDispatch()
  let history = useHistory();

  const { userInfo } = useSelector((state) => state.authInfo);

  const handleAuthorization = (response) => {
    response.roboket_username = userInfo.preferred_username
    response.roboket_email = userInfo.email
    dispatch(saveFacebookUser(response))
    if (response.accessToken) {
      history.push("/ads/facebook/connect")
    }
  }

    return (
      <div>
        <AdsBar name="Ads Platform"/>
        <div className="connect-create-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center py-5">
                        <div className="connect-ad-account">
                            <div className="col-md-12  text-center mt-4">
                                <h6 className="connect-title mb-4">Connect Accounts</h6>
                            </div>
                            <div className="btn-group text-center">
                                <FacebookAuth
                                  appId={facebookAppId}
                                  callback={handleAuthorization}
                                  component={FacebookButton}
                                />
                                <button type="button" className="btn btn-connect mr-2">
                                  <img src={GoogleLogo} alt="Google"/>
                                  Google ads
                                  </button>
                                <button type="button" className="btn btn-connect">
                                  <img src={LinkedinLogo} alt="Likedin"/>
                                  Linkedin
                                  </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

export default OnBoardingProcess
