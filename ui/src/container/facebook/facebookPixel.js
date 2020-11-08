import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { AdsBar } from '../common/components/adsBar';
import Select from 'react-select';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
class FacebookPixel extends React.Component {

  render() {
    return (
      <>
        <AdsBar name="Track Visitors"/>
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

                                  <Select
                                      defaultValue={[options[2]]}
                                      isMulti
                                      name="colors"
                                      options={options}
                                      className="basic-multi-select"
                                      classNamePrefix="select"
                                    />
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
