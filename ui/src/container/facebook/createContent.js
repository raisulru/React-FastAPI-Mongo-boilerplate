
//CONTAINER
import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { createCampaign, getCampaigns } from '../../store/facebookResource'
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
      <div>
        <h1>Ceate Facebook Content</h1>
        <button type="button" className="btn btn-success">
          <Link to="/ads/facebook/target-audience">Audience Targeting</Link>
        </button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
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
