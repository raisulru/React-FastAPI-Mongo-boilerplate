import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import FacebookLogo from '../../images/fb-icon.png'
import GoogleLogo from '../../images/google-ads.png'
import LinkedinLogo from '../../images/linkedin.png'
import { DisconnectAccount } from '../../store/facebookResource'

function DisconnectAds () {
    const dispatch = useDispatch()
    const { connected } = useSelector((state) => state.facebook);
    const { userInfo } = useSelector((state) => state.authInfo);

    const disconnectHandler = () => {
        dispatch(DisconnectAccount(userInfo.preferred_username))
    }

    return (
        <div>
            <div className="row media-table">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <h3 className="text-center">Disconnect Ad Account</h3>
                    <div className="data">
                        <table className="table account-table">
                            <thead>
                                <th>Name</th>
                                <th>Disconnect</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img className="mr-2" src={FacebookLogo} alt="facebook"/>
                                        Facebook
                                    </td>
                                    <td>
                                        <div className="input-group">
                                            {
                                                connected ? 
                                                <button onClick={disconnectHandler} type="button" className="btn btn-outline-secondary disconnect-btn btn-sm btn-block">
                                                    Disconnect
                                                </button>
                                                :
                                                <Link to="/ads/onboarding">
                                                <button type="button" className="btn btn-outline-secondary disconnect-btn btn-sm btn-block">
                                                    Connect
                                                </button>
                                                </Link>
                                            }
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img className="mr-2" src={GoogleLogo} alt="google"/>
                                        Google
                                    </td>
                                    <td>
                                        <div className="input-group">
                                            <button disabled type="button" className="btn btn-outline-secondary disconnect-btn btn-sm btn-block">
                                                Disconnect
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img className="mr-2" src={LinkedinLogo} alt="Linkedin"/>
                                        Linkedin
                                    </td>
                                    <td>
                                        <div className="input-group">
                                            <button disabled type="button" className="btn btn-outline-secondary disconnect-btn btn-sm btn-block">
                                                Disconnect
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-3 m-t-30">
                </div>
            </div>
        </div>
    )
}

export default DisconnectAds