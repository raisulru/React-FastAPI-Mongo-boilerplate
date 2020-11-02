import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { AdsBar } from '../common/components/adsBar';
import FacebookLogo from '../../images/fb-icon.png'
import { getFacebookPages } from '../../store/facebookResource'


function FacebookLeadSync () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFacebookPages(user.id, user.accessToken))
  }, [dispatch]);

  const { facebookPages, user } = useSelector((state) => state.facebook);
  console.log(facebookPages, '##############################')
    return (
      <>
        <AdsBar name="Lead Sync"/>
        <div className="connect-section-linked py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-8 py-5">
                <div className="connect-ad-account">
                  <div className="col-md-12  mt-4">
                    <h6 className="connect-title mb-4 text-center">Lead Syncing</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                  a type specimen book. It has survived not only five centuries,</p>

                    <table className="table account-table">
                      <thead>
                        <tr>
                          <th scope="col">PAGE NAME</th>
                          <th scope="col">PAGE ID</th>
                          <th scope="col">LEAD SYNC <i className="fas fa-info-circle"></i></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><button type="button" className="btn table-social-btn"><img src={FacebookLogo} alt="Facebook"/>Facebook pages name</button></td>
                          <td><label htmlFor="add-acount">23346578356433</label><br /></td>
                          <td>
                            <label className="switch">
                              <input type="checkbox" />
                              <span className="slider round"></span>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                      <Link to="/ads/dashboard" className="mr-2">
                          Back
                      </Link>
                      <Link to="/ads/onboarding">
                          Cancel
                      </Link>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                      <Link to="/ads/dashboard" className="mr-2">
                        Skip
                      </Link>
                      <Link to="/ads/facebook/pixel">Next</Link>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }

export default FacebookLeadSync
