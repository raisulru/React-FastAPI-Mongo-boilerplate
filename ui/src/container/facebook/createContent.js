import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { createCampaign } from '../../store/facebookResource'
import { AdsBar } from '../common/components/adsBar';
import PostPreview from './components/postPreview';


class CreateFacebookContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A title was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <AdsBar name="Create Content"/>
        <div className="lead-generation-ad">
        <div className="">
            <div className="row">
                <div className="col-md-6 bg-white py-5">
                    <div className="col-md-1">
                      
                    </div>
                    <div className="col-md-10">
                    <div className="left-ad-generation-area mr-5 ml-5">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="adaccount">Ad account*</label>
                                <select className="form-control" id="adaccount">
                                  <option>Select ad account</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="adaccount">Facebook page* <i className="fas fa-info-circle"></i> </label>
                                <select className="form-control" id="adaccount">
                                  <option>Select ad account</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                            </div>
                            <div className="campaign">
                                <label htmlFor="Campaign">Campaign* </label> <br/>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="createnewcampgaing" value="option1"/>
                                    <label className="form-check-label" htmlFor="createnewcampgaing">Create new campaign</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="existingone"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Select from existing </label>
                                </div>
                                <select className="form-control" id="leadgeneration-ad">
                                    <option>Lead generation ad- 22/ 10/202 5:00pm</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image-video">image/video*  <i className="fas fa-info-circle"></i></label>
                                <input type="file" className="form-control-file" id="image-video"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="text-body-copy"> Text body copy  <i className="fas fa-info-circle"></i></label>
                                <textarea className="form-control" rows="5" id="text-body-copy" placeholder="write a message that clearly tells people about what you are promoting"></textarea>

                            </div>
                            <div className="form-group">
                                <label htmlFor="adaccount">Headline* <i className="fas fa-info-circle"></i> </label>
                                <select className="form-control" id="adaccount">
                                  <option>Write a clear and consise headline to capital views attention</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="adaccount">Call to action* </label>
                                <select className="form-control" id="adaccount">
                                  <option>Learn more</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                            </div>

                        </form>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 bg-body py-5">
                    <div className="row">
                      <div className="col-md-1">
                      </div>
                      <div className="col-md-10">
                      <PostPreview/>
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
                      <Link to="/ads/dasboard">
                          Cancel
                      </Link>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                    <Link to="/ads/facebook/target-audience">Next</Link>
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
    campaign: state.facebook.campaign,
    campaignList: state.facebook.campaignList
  }
)

const mapActionToProps = dispatch => {
  return bindActionCreators(
    {
      createCampaign
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(CreateFacebookContent)
