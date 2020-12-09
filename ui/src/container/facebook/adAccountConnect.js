import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import _ from 'lodash'
import { 
  getFacebookAdAccounts, 
  saveFacebookAdsAccount, 
  updateAdAccountConnection 
} from '../../store/facebookResource';
import { AdsBar } from '../common/components/adsBar'

function AdAccountConnect (props) {

  const dispatch = useDispatch()
  const { connected, user, adAccounts } = useSelector((state) => state.facebook);
  
  useEffect(() => {
    if (!user.accessToken) {
      props.history.push("/ads/onboarding-process")
    }
    dispatch(getFacebookAdAccounts(user.accessToken))
  }, [dispatch])
  
  const handleAccountAutoTracking = (event) => {
    const payload = {
      adAccounts: adAccounts,
      data: {
        auto_track: event.target.checked,
        id: event.target.id
      }
    }
    dispatch(updateAdAccountConnection(payload))
  }

  const handleAccountConnection = (event) => {
    const payload = {
      adAccounts: adAccounts,
      data: {
        connected: event.target.checked,
        auto_track: event.target.checked,
        id: event.target.id
      }
    }
    dispatch(updateAdAccountConnection(payload))
  }

  const submitConnectedAdAccounts = () => {
    const adAccountList = JSON.parse(JSON.stringify(adAccounts))

    adAccountList.map(adAccount => {
      adAccount.user_id = user.userID
      return adAccount
    })

    dispatch(saveFacebookAdsAccount({
      "ads_account_list": adAccountList
    }))
  }
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
                                          <input id={adAccount.id} checked={adAccount.connected} onChange={handleAccountConnection} type="checkbox" name={adAccount.name}/>
                                          <label className="ml-2" htmlFor={adAccount.id}> {adAccount.name}'s Ad Account</label>
                                          <br/>
                                        </td>
                                        <td>
                                          {adAccount.account_id}
                                        </td>
                                        <td>
                                            <label className="switch">
                                                <input id={adAccount.account_id} checked={adAccount.auto_track} onChange={handleAccountAutoTracking} type="checkbox" name={adAccount.name}/>
                                                <span htmlFor={adAccount.account_id} className="slider round"></span>
                                            </label>
                                        </td>
                                    </tr>
                                    )}
                                    </tbody>
                                </table>
                                <div className="cancel-next-button">                            
                                      <Link to="/ads/onboarding" className="btn bg-brand-border float-left"> Cancel </Link>                                   
                                      <Link to="/ads/facebook/lead-sync" onClick={submitConnectedAdAccounts} className="btn btn-secondary bg-brand float-right">Next</Link>
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

export default AdAccountConnect
