import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getFacebookAdAccounts, saveFacebookAdsAccount } from '../../store/facebookResource';
import { AdsBar } from '../common/components/adsBar'

class FacebookConnect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adAccounts: props.adAccounts
    }

    this.handleAccountConnection = this.handleAccountConnection.bind(this);
    this.handleAccountAutoTracking = this.handleAccountAutoTracking.bind(this);
  }

  componentDidMount () {
    const { accessToken } = this.props.faceBookUser
    if (!accessToken) {
      this.props.history.push("/ads/onboarding-process")
    }
    this.props.getFacebookAdAccounts(accessToken)
  }

  handleAccountAutoTracking(event) {
    let adAccounts = JSON.parse(JSON.stringify(this.state.adAccounts))
    adAccounts.map(adAccount => {
      if (adAccount.id === event.target.id) {
        adAccount.auto_track = event.target.checked
        return adAccount
      }
      return adAccount
    })
    this.setState({ adAccounts: adAccounts })
  }

  handleAccountConnection(event) {
    let adAccounts = JSON.parse(JSON.stringify(this.state.adAccounts))
    adAccounts.map(adAccount => {
      if (adAccount.id === event.target.id) {
        adAccount.connected = event.target.checked
        adAccount.auto_track = event.target.checked
        return adAccount
      }
      return adAccount
    })
    this.setState({ adAccounts: adAccounts })
  }

  submitConnectedAdAccounts () {
    const adAccounts = this.state.adAccounts
    adAccounts.map(adAccount => {
      adAccount.userID = this.props.faceBookUser.id
      adAccount.act_account_id = adAccount.id
      return adAccount
    })

    this.props.saveFacebookAdsAccount({
      "ads_account_list": adAccounts
    })
  }

  render() {
    const { adAccounts } = this.state
    
    return (
      <>
      <AdsBar name="Ads Account"/>
        <div className="connect-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 py-5">
                        <div className="connect-ad-account">
                            <div className="col-md-12  mt-4">
                                <h6 className="connect-title mb-4 text-left">Select Facebook ads accounts</h6>
                                <p>select the bellow account(s) you want to connect ROBOKET.<small className="learn-more"> <Link to="/ads/onboarding">Learn more </Link></small></p>
                                <p>You can connects up to 2 ads account</p>
                                <table className="table account-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">AD ACCOUNTAD</th>
                                            <th scope="col">ACCOUNT ID</th>
                                            <th scope="col">AUTO TRACKING <i className="fas fa-info-circle"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {adAccounts.map((adAccount) => 
                                      <tr key={adAccount.id}>
                                        <td>
                                          <input id={adAccount.id} checked={adAccount.connected} onChange={(e) => this.handleAccountConnection(e)} type="checkbox" name="add-acount" value="Bike"/> 
                                          <label className="ml-2" htmlFor={adAccount.id}> {adAccount.name}'s Ad Account</label>
                                          <br/>
                                        </td>
                                        <td>
                                        {adAccount.account_id}
                                        </td>
                                        <td>
                                            <label className="switch">
                                                <input id={adAccount.account_id} checked={adAccount.auto_track} onChange={(e) => this.handleAccountAutoTracking(e)} type="checkbox"/>
                                                <span htmlFor={adAccount.account_id} className="slider round"></span>
                                            </label>
                                        </td>
                                    </tr>
                                    )}
                                    </tbody>
                                </table>
                                <div className="cancel-next-button">                            
                                      <Link to="/ads/onboarding" className="btn bg-brand-border float-left"> Cancel </Link>                                   
                                      <Link to="/ads/facebook/lead-sync" onClick={() => this.submitConnectedAdAccounts()} className="btn btn-secondary bg-brand float-right">Next</Link>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-2">
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
    faceBookUser: state.facebook.user,
    facebookConnected: state.facebook.connected,
    adAccounts: state.facebook.adAccounts
  }
)

const mapActionToProps = dispatch => {
  return bindActionCreators(
    {
      getFacebookAdAccounts,
      saveFacebookAdsAccount
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(FacebookConnect)
