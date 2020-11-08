import React from 'react';
import { Link } from "react-router-dom";
import targetIcon from "../../images/target-icon.png"
import FacebookLogo from '../../images/fb-icon.png'
import GoogleLogo from '../../images/google-ads.png'
import LinkedinLogo from '../../images/linkedin.png'
import ExternalLink from '../../images/external-link.svg'
import { AdsBar } from './components/adsBar';
class LandingPage extends React.Component {
  render() {
    return (
      <>
        <AdsBar name="Ads"/>
        <div className="welcome-section py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="connect">
                  <h4 className="py-5">See which ads are turning <br/>visitors into customers </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                    <p>magna aliqua.a Ut enim ad minim veniam magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    <div className="btn-group mt-4">
                        <Link to="/ads/onboarding-process">
                          <button type="button" className="btn btn-secondary mr-3 bg-brand">
                          Connect Accounts
                        </button>
                          </Link>
                      
                      <button type="button" className="btn btn-secondary bg-brand-border" disabled>see a quick demo</button>
                     
                    </div>
                    <div className="col-md-8 text-center mt-4">

                      {/* <a href="https://www.facebook.com/business/help/910137316041095?id=420299598837059" target="_blank" className="bg-transparent btn-create">Create ad account</a> */}
                      <button className="btn create-ac-btn" type="button" data-toggle="modal" data-target="#createacmodal">Create ad account</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="target-image">
                    <img src={targetIcon} alt="Target"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="modal fade create-ad-modal" id="createacmodal" tabindex="-1" role="dialog" aria-labelledby="publishModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                          <h2 className="create-ac-head">Create ad accoount</h2>
                      </div>
                      <p className="m-b-20">Select the network you'd will like to create an account for </p>
                      <a href="#" target="_blank" className="create-ad-ac"><img src={FacebookLogo} className="create-social-icon" alt="Facebook"/>Facebook <img src={ExternalLink} className="float-right external-link" alt="ExternalLink"/></a>
                      <a href="#" target="_blank" className="create-ad-ac"><img src={GoogleLogo} className="create-social-icon" alt="Google"/>Google ads <img src={ExternalLink} className="float-right external-link" alt="ExternalLink"/></a>
                      <a href="#" target="_blank" className="create-ad-ac"><img src={LinkedinLogo} className="create-social-icon" alt="Likedin"/>Linkedin <img src={ExternalLink} className="float-right external-link" alt="ExternalLink"/></a>
                     </div>
                </div>
            </div>

          </>
    );
  }
}


export default LandingPage
