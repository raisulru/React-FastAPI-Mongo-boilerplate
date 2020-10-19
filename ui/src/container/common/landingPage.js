import React from 'react';
import { Link } from "react-router-dom";
import targetIcon from "../../images/target-icon.png"
import { AdsBar } from './components/adsBar';


class LandingPage extends React.Component {


  render() {
    return (
      <div>
        <AdsBar />
        <div className="welcome-section py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="connect">
                  <h4 className="py-4">See which ads are turning <br/>visitors into customers </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                    <p>magna aliqua. Ut enim ad minim veniam magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    <div className="btn-group mt-4">
                        <Link to="/ads/onboarding-process">
                          <button type="button" className="btn btn-secondary mr-3 bg-brand">
                          Connect Accounts
                        </button>
                          </Link>
                      
                      <button type="button" className="btn btn-secondary bg-brand-border">see a quick demo</button>

                    </div>
                    <div className="col-md-8 text-center mt-4">
                      <a href="https://www.facebook.com/business/help/910137316041095?id=420299598837059" target="_blank" className="bg-transparent btn-create">Create ad account</a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="target-image">
                    <img src={targetIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}


export default LandingPage
