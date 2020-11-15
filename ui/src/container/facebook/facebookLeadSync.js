import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert'
import _ from 'lodash'
import { AdsBar } from '../common/components/adsBar';
import FacebookLogo from '../../images/fb-icon.png'
import { getFacebookPages, saveFacebookPagesSettings } from '../../store/facebookResource'


function FacebookLeadSync () {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFacebookPages(user.id, user.accessToken))
  }, [dispatch])

  const { facebookPages, user } = useSelector((state) => state.facebook);
  const [allChecked, setAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [formData, setFormData] = useState(facebookPages);

  const handleCheck = e => {
    const { id } = e.target;
    if (isChecked.includes(id)) {
      setIsChecked(isChecked.filter(checked_name => checked_name !== id));
      return setAllChecked(false);
    }
    isChecked.push(id);
    setIsChecked([...isChecked]);
    setAllChecked(isChecked.length === formData.length)
  };

  const handleSubmit = () => {
    let leadSyncSettings = JSON.parse(JSON.stringify(facebookPages))
    leadSyncSettings.map(page => {
      if (_.includes(isChecked, page.id)) {
        page.lead_sync = true
      }
      page.page_id = page.id
      page.user_id = user.id
      return
    })
    dispatch(saveFacebookPagesSettings({"page_list": leadSyncSettings}))
  }
  
  
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
                        {
                          formData ? formData.map(page => 
                            <tr key={page.id}>
                              <td>
                                  <img src={FacebookLogo} alt="Facebook"/>
                                  {page.name}
                              </td>
                              <td>
                                  {page.id}
                              </td>
                              <td>
                                <label className="switch">
                                <input type="checkbox"
                                      id={page.id}
                                      checked={isChecked.includes(page.id)}
                                      onChange={handleCheck} />
                                  <span className="slider round"></span>
                                </label>
                              </td>
                            </tr>
                            ): ""
                        }
                        
                      </tbody>
                    </table>
                    <div className="cancel-next-button">                            
                          <Link to="/ads/onboarding" className="btn bg-brand-border float-left"> Cancel </Link>                                   
                          <Link onClick={handleSubmit} to="/ads/facebook/pixel" className="btn btn-secondary bg-brand float-right">Next</Link>
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

export default FacebookLeadSync
