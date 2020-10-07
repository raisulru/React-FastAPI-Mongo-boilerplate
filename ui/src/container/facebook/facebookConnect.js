import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import FacebookAuth from 'react-facebook-auth';
import { FacebookButton } from './components/button';
import { saveFacebookUser, getFacebookAdAccounts, saveFacebookAdsAccount } from '../../store/facebookResource';
import { facebookAppId } from '../../settings';


class FacebookConnect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adAccounts: props.adAccounts
    }

    this.handleAuthorization = this.handleAuthorization.bind(this);
    this.handleAccountConnection = this.handleAccountConnection.bind(this);
    this.handleAccountAutoTracking = this.handleAccountAutoTracking.bind(this);
  }

  handleAuthorization(response) {
    this.props.saveFacebookUser(response)
    if (response.accessToken) {
      this.props.getFacebookAdAccounts(response.accessToken)
    }
  }

  handleAccountAutoTracking(event) {
    let adAccounts = this.state.adAccounts
    console.log(event.target, 'auto tracking')
    adAccounts.map(adAccount => {
      if (adAccount.id === event.target.id) {
        adAccount.auto_track = event.target.checked
        return adAccount
      }
    })
    this.setState({ adAccounts: adAccounts })
  }

  handleAccountConnection(event) {
    let adAccounts = this.state.adAccounts
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
    const adAccounts = this.state.adAccounts

    return (
      <div>
        <h1>{this.props.facebookConnected ? user.name : "User Not Connected"}</h1>
        <FacebookAuth
          appId={facebookAppId}
          callback={this.handleAuthorization}
          component={FacebookButton}
        />
        {adAccounts && (
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">AD ACCOUNT</th>
                  <th scope="col">AD ACCOUNT ID</th>
                  <th scope="col">AUTO TRACK</th>
                </tr>
              </thead>
              <tbody>
                {adAccounts.map((adAccount) =>
                  <tr key={adAccount.id}>
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input id={adAccount.id} type="checkbox" className="custom-control-input" checked={adAccount.connected} onChange={(e) => this.handleAccountConnection(e)} />
                        <label className="custom-control-label" htmlFor={adAccount.id}>{user.name}'s Ad Account</label>
                      </div>
                    </td>
                    <td>{adAccount.account_id}</td>
                    <td>
                      <div className="custom-control custom-switch">
                        <input id={adAccount.account_id} type="checkbox" className="custom-control-input" checked={adAccount.auto_track} onChange={(e) => this.handleAccountAutoTracking(e)} />
                        <label className="custom-control-label" htmlFor={adAccount.account_id}></label>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        <Link to="/ads/onboarding">
          <button className='btn btn-success'>
            Cancel
        </button>
        </Link>

        <Link to="/ads/facebook/lead-sync" onClick={() => this.submitConnectedAdAccounts()}>
          <button className='btn btn-success float-right'>
            Next
            </button>
        </Link>

      </div>
    );
  }
}

const mapStateToProps = state => (
  console.log(state),
  {
    faceBookUser: state.facebook.user,
    facebookConnected: state.facebook.connected,
    adAccounts: state.facebook.adAccounts
  }
)

const mapActionToProps = dispatch => {
  return bindActionCreators(
    {
      saveFacebookUser,
      getFacebookAdAccounts,
      saveFacebookAdsAccount
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(FacebookConnect)
