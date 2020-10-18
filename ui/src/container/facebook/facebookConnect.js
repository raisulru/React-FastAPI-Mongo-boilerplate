import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getFacebookAdAccounts, saveFacebookAdsAccount } from '../../store/facebookResource';


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
    this.props.getFacebookAdAccounts(`access_token=${accessToken}`)
  }

  handleAccountAutoTracking(event) {
    let adAccounts = JSON.parse(JSON.stringify(this.state.adAccounts))
    adAccounts.map(adAccount => {
      if (adAccount.id === event.target.id) {
        adAccount.auto_track = event.target.checked
        return adAccount
      }
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
    })
    this.setState({ adAccounts: adAccounts })
  }

  submitConnectedAdAccounts () {
    const adAccounts = this.state.adAccounts
    this.props.saveFacebookAdsAccount()
  }

  render() {
    const user = this.props.faceBookUser
    const {adAccounts} = this.state
    
    return (
      <>
        <div className="ads-area">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <h3 className="py-4">ADS</h3>
                  </div>
              </div>
          </div>
        </div>
        <div className="connect-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 py-5">
                        <div className="connect-ad-account">
                            <div className="col-md-12  mt-4">
                                <h6 className="connect-title mb-4 text-left">Select Facebook ads accounts</h6>
                                <p>select the bellow account(s) you want to connect ROBOKET.<small className="learn-more"> <a href="#">Learn more </a></small></p>
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
                                          <label htmlFor={adAccount.id}> {user.name}'s Ad Account</label>
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
                                <div className="btn-group">
                                    <button type="button" className="btn btn-connect-border mr-3">Connect</button>
                                    <button type="button" className="btn btn-connect-border red-border mr-3">Cancel</button>
                                    <a className="connect-link" href="#">Create ad account <i className="fas fa-external-link-alt"></i> </a>
                                </div>
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
                      <Link to="/ads/onboarding">
                          Cancel
                      </Link>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                    <Link to="/ads/facebook/lead-sync" onClick={() => this.submitConnectedAdAccounts()}>Next</Link>
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
