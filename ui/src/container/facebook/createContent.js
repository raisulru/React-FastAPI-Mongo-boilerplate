
//CONTAINER
import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { createCampaign, getCampaigns } from '../../store/facebookResource'
import { AdsBar } from '../common/components/adsBar';
/**
 * PROPERTIES & FUNCTION 
 * 
 */

class CreateFacebookContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCampaigns()
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
        <div className="connect-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                      <label>
                        Title:
                      <input type="text" value={this.state.value} onChange={this.handleChange} />
                      </label>
                      <input type="submit" value="Submit" />
                    </form>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
              </div>
        </div>

        <div className="back-next">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 text-center text-lg-left ">
                      <Link to="/ads/onboarding">
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
      getCampaigns,
      createCampaign
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(CreateFacebookContent)
