import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { AdsBar } from '../common/components/adsBar';


class FacebookPixel extends React.Component {

  render() {
    return (
      <>
        <AdsBar/>
        <div className="connect-section-linked py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-8 py-5">
                <div className="connect-ad-account">
                  <div className="col-md-12  mt-4">
                    <h6 className="connect-title mb-4 text-center">Add Pixel</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only five centuries,</p>

                    {/* <table className="table account-table">
                      <thead>
                        <tr>
                          <th scope="col">PAGE NAME</th>
                          <th scope="col">PAGE ID</th>
                          <th scope="col">AUTO TRACKING <i className="fas fa-info-circle"></i></th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><button type="button" className="btn table-social-btn">Facebook pages name</button></td>
                          <td><label for="add-acount">23346578356433</label><br /></td>
                          <td>
                            <label className="switch">
                              <input type="checkbox" />
                              <span className="slider round"></span>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
                  </div>
                </div>
              </div>
              <div className="col-md-2">
              </div>
            </div>
          </div>
        </div>
        <div className="back-next">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 text-center text-lg-left ">
                      <Link to="ads/facebook/lead-sync" className="mr-2">
                          Back
                      </Link>
                      <Link to="/ads/onboarding">
                          Cancel
                      </Link>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                      <Link to="/ads/dashboard" className="mr-2">
                        Go to Dashboard
                      </Link>
                      <Link to="/ads/dashboard">Next</Link>
                    </div>
                </div>
            </div>
        </div>
      </>
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
