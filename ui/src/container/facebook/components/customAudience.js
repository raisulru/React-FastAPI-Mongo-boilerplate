import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import { 
    getFacebookCustomAudience, 
    addCustomAudience,
    removeSelectedAudience
} from '../../../store/facebookResource';
import SearchIcon from '../../../images/search.svg'
import copyObject from '../../../utils/copyObject';


function CustomeAudience(props) {
  const dispatch = useDispatch()

  const { customAudience } = useSelector((state) => state.facebookSearch);
  const { addedCustomAudience, content } = useSelector((state) => state.facebookCampaign);
  const { user, adAccounts } = useSelector((state) => state.facebook);

  const [customAudiences, setCustomAudience] = useState([])
  const [websiteAudiences, setWebsiteAudience] = useState([])
  const [lookalikeAudiences, setLookalikeAudience] = useState([])

  useEffect(() => {
    const campaignId = content.ad_account.id || adAccounts[0].id;
    dispatch(getFacebookCustomAudience(user.accessToken, campaignId));
    
    const groupByAudience = _.groupBy(customAudience, audience => {
      return audience.subtype
    })

    setCustomAudience(groupByAudience.CUSTOM);
    setWebsiteAudience(groupByAudience.WEBSITE);
    setLookalikeAudience(groupByAudience.LOOKALIKE);
  }, [dispatch])

  const customAudienceHandler = (e) => {
      let payload = {
          id: e.target.value,
          name: e.target.name
      }
      let checked = e.target.checked
      if (checked) {
          dispatch(addCustomAudience(payload))
      } else {
          dispatch(removeSelectedAudience(payload))
      }
  }

    return (
            <>
            <Modal.Header closeButton>
                <h5 className="modal-title text-white" id="custom-audience-label">Select Custom Audience</h5>
            </Modal.Header>
            <Modal.Body>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-contact-list" role="tab" aria-controls="nav-contact-list" aria-selected="true">Contact List</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-website" role="tab" aria-controls="nav-website" aria-selected="false">Website</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-lookalike" role="tab" aria-controls="nav-lookalike" aria-selected="false">Lookalike</a>
                    </div>
                </nav>

                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-contact-list" role="tabpanel" aria-labelledby="nav-contact-list-tabe">
                         <div className="contact-list-tab-content">
                            {/* <form className="form mt-2">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-group">                                 
                                            <input type="text" className="form-control search-control-filter" name="exampleFormControlSelect1" placeholder="Search for ad campaign"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-search" type="button">
                                                    <img src={SearchIcon} className="search-icon" alt="Search"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form> */}
                            <ul className="list-group mt-2">
                                {
                                    customAudience.map(audience => 
                                        <>
                                        {
                                            audience.subtype === 'CUSTOM' ?
                                            <li className="list-group-item d-flex justify-content-between align-items-center" key={audience.id}>
                                            <div className="checkbox">
                                                <label className="custom-checkbox">
                                                    {audience.name}
                                                    <input type="checkbox" checked={_.some(addedCustomAudience, {id: audience.id, name: audience.name})} onChange={customAudienceHandler} name={audience.name} value={audience.id}/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <div className="ready-box">
                                                    <span className="ready-icon"></span>
                                                    <span className="ready-text">Ready</span>
                                                </div>
                                            </div>
                                            <span className="badge badge-pill">{}</span>
                                        </li>
                                        :
                                        ''
                                        }
                                        </>
                                    )
                                }
                            </ul>  
                         </div>
                    </div>

                    <div className="tab-pane fade" id="nav-website" role="tabpanel" aria-labelledby="nav-website-tab">
                        <div className="website-tab-content">
                            {/* <form className="form mt-2">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-group">                                 
                                            <input type="text" className="form-control search-control-filter" name="exampleFormControlSelect1" placeholder="Search for ad campaign"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-search" type="button">
                                                    <img src={SearchIcon} className="search-icon" alt="Search"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form> */}
                            <ul className="list-group mt-2">
                                {
                                customAudience.map(audience => 
                                        <>
                                        {
                                            audience.subtype === 'WEBSITE' ?
                                            <li className="list-group-item d-flex justify-content-between align-items-center" key={audience.id}>
                                            <div className="checkbox">
                                                <label className="custom-checkbox">
                                                    {audience.name}
                                                    <input type="checkbox" checked={_.some(addedCustomAudience, {id: audience.id, name: audience.name})} onChange={customAudienceHandler} name={audience.name} value={audience.id}/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <div className="ready-box">
                                                    <span className="ready-icon"></span>
                                                    <span className="ready-text">Ready</span>
                                                </div>
                                            </div>
                                            <span className="badge badge-pill">{}</span>
                                        </li>
                                        :
                                        ''
                                        }
                                        </>
                                    )
                                }
                            </ul>  
                        </div>
                    </div>

                    <div className="tab-pane fade" id="nav-lookalike" role="tabpanel" aria-labelledby="nav-nav-lookalike">
                        <div className="lookalike-tab-content">
                            {/* <form className="form mt-2">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-group">                                 
                                            <input type="text" className="form-control search-control-filter" name="exampleFormControlSelect1" placeholder="Search for ad campaign"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-search" type="button">
                                                    <img src={SearchIcon} className="search-icon" alt="Search"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form> */}
                            <ul className="list-group mt-2">
                                {
                                    customAudience.map(audience => 
                                        <>
                                        {
                                            audience.subtype === 'LOOKALIKE' ?
                                            <li className="list-group-item d-flex justify-content-between align-items-center" key={audience.id}>
                                            <div className="checkbox">
                                                <label className="custom-checkbox">
                                                    {audience.name}
                                                    <input type="checkbox" checked={_.some(addedCustomAudience, {id: audience.id, name: audience.name})} onChange={customAudienceHandler} name={audience.name} value={audience.id}/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <div className="ready-box">
                                                    <span className="ready-icon"></span>
                                                    <span className="ready-text">Ready</span>
                                                </div>
                                            </div>
                                            <span className="badge badge-pill">{}</span>
                                        </li>
                                        :
                                        ''
                                        }
                                        </>
                                        )
                                }
                                
                            </ul>  
                         </div>
                    </div>
                </div>
            </Modal.Body>
            </>
    )
}

export default CustomeAudience