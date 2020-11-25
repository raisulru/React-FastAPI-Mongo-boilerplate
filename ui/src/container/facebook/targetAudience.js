
//CONTAINER
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { useAlert } from 'react-alert';

import PostPreview from './components/postPreview';
import RemoveIcon from '../../images/delete.svg';
import {
  searchFacebookLocation,
  getEstimatedAudienceSize,
  getFacebookCustomAudience,
  removeSelectedAudience,
  removeExcludedAudience,
  controllPersonalAttModal,
  addNarrowCard,
  removeNarrowCard
} from '../../store/facebookResource';
import CustomeAudience from './components/customAudience';
import PersonalAttributes from './components/personalAttribute';
import CustomAudienceExcludeComponent from './components/customAudienceExclude';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';


function FacebookAudienceTargeting() {
  const SpecialCategory = ['HOUSING', 'CREDIT', 'EMPLOYMENT', 'ISSUES_ELECTIONS_POLITICS', 'NONE']
  const dispatch = useDispatch()
  const alert = useAlert()
  const [audienceType, setAudienceType] = useState('new')

  const [customAudienceModalShow, setcustomAudienceModalShow] = useState(false);
  const handleCustomAudienceClose = () => setcustomAudienceModalShow(false);
  const handleCustomAudienceShow = () => setcustomAudienceModalShow(true);

  const [customAudienceExcludeModalShow, setCustomAudienceExcludeModalShow] = useState(false);
  const handleCustomAudienceExcludeClose = () => setCustomAudienceExcludeModalShow(false);
  const handleCustomAudienceExcludeShow = () => setCustomAudienceExcludeModalShow(true);

  const { campaign, user } = useSelector((state) => state.facebook);
  const { estimatedAudienceSize, locations, customAudience } = useSelector((state) => state.facebookSearch);
  const { addedCustomAudience, excludeCustomAudience, personalAttModal, cards } = useSelector((state) => state.facebookCampaign);

  const estimatedAudienceSizeHandler = () => {
    const accountID = 'act_552899645070172'
    const specification = '{"geo_locations": {"countries": ["BD"]},"age_min": 18,"age_max": 65}'
    dispatch(getEstimatedAudienceSize(user.accessToken, accountID, specification))
  }

  const getCustomAudience = () => {
      if (!campaign.ad_account) {
          return
      }
    dispatch(getFacebookCustomAudience(user.accessToken, campaign.ad_account.id))
  }

  const geoLocationHandler = (e) => {
    console.log(e)
  }

  const specialCategoryHandler = (e) => {
    console.log(e.target.value)
  }

  const locationSearchHandler = (string) => {
    dispatch(searchFacebookLocation(user.accessToken, string))
  }

  const addCard = () => {
      let cardNo = 1
      if (cards.length) {
          let lastItem = cards[cards.length-1]
          cardNo = lastItem.cardNo + 1
      }
    const payload = {
        cardNo: cardNo,
        data: []
    }
    dispatch(addNarrowCard(payload))
  }

  const deleteCard = (cardNo) => {
      const payload = {
        cardNo: cardNo
      }
      dispatch(removeNarrowCard(payload))
  }

  const personalAttributeModalShow = (id) => {
      let modalAtt = {}
      if (personalAttModal.id == undefined && personalAttModal.display === 'none') {
        modalAtt = {id: id, display: 'block'}
      } else if (personalAttModal.id == id && personalAttModal.display === 'block') {
        modalAtt = {id: undefined, display: 'none'}
      } else {
          return
      }
      dispatch(controllPersonalAttModal(modalAtt))
  }

  useEffect(() => {
      if (!cards.length) {
          dispatch(addNarrowCard({cardNo: 1, data: []}))
      }
}, [dispatch])

  const removeSelectedAudienceHandler = (payload) => {
      dispatch(removeSelectedAudience(payload))
  }

  const removeExcludedAudienceHandler = (payload) => {
    dispatch(removeExcludedAudience(payload))
  }
  
  return (
    <>
    <div className="lead-generation-ad">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 bg-white py-5 create-scroll">
                <div className="row">
                   <div className="col-md-1">
                   </div>
                    <div className="col-md-10">
                    <div className="left-ad-generation-area mr-5 ml-5">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="adaccount">Special ad Category*</label>
                            <select onChange={specialCategoryHandler} className="form-control" id="adaccount">
                             {
                               SpecialCategory.map((category, index) => 
                                    <option key={index} value={category}>{category.replace('_', ' ').toLowerCase()}</option>
                                )
                             }
                            </select>
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="Audience">Audience* </label> <br/>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" id="newAudience" 
                                    checked={audienceType === 'new'} 
                                    value="new" 
                                    onChange={() => setAudienceType('new')}
                                    />
                                <label className="form-check-label" htmlFor="newAudience">New Audience</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type='radio' 
                                    id="existingAudience" 
                                    checked={audienceType === 'existing'} 
                                    value="existing" 
                                    onChange={() => setAudienceType('existing')}
                                    disabled={!campaign.ad_account ? true:false}
                                    onClick={getCustomAudience}
                                    />
                                <label data-toggle="tooltip" 
                                    data-placement="top" 
                                    title={!campaign.ad_account ? "Please ad an account!":''} 
                                    className="form-check-label" 
                                    htmlFor="existingAudience">Select a saved audience</label>
                            </div>
                          
                        </div>
                        {
                          audienceType === 'new' ? <div className="form-group">
                          <label htmlFor="Audience">Target people who matched the following criteria </label> <br/> 
                        <div  className="location">
                            <div className="form-group">
                              <label htmlFor="Location">Location*</label> <br/>
                              <span className="location-span">People living in any of the following</span>
                              <Select
                                closeMenuOnSelect={false}
                                onChange={geoLocationHandler}
                                options={locations}
                                getOptionLabel={option =>
                                  `${option.name}, ${option.country_name}`
                                }
                                getOptionValue={option => `${option.name}`}
                                onInputChange={locationSearchHandler}
                                isClearable={true}
                                isSearchable={true}
                                isMulti
                              />
                            </div>
                        </div>
                        <label htmlFor="and"> <strong> And </strong> </label> <br/> 
                        <div  className="location m-b-10 ">
                            <div className="form-group">
                              <label htmlFor="Location">Age range *</label> <br/>
                             <div className="form-inline">
                             <select defaultValue={18} className="form-control-location w-70" id="Location">
                               
                                {
                                 Array.from({length: 48}, (v, k) => 
                                  <option key={k+1}>{k+18}</option>
                                 )
                                }
                               
                              </select>
                              <label htmlFor="to" className="p-r-15 ml-15">To</label>
                              <select defaultValue={65} className="form-control-location w-70" id="Location">
                                {
                                 Array.from({length: 48}, (v, k) => 
                                  <option key={k+1}>{k+18}</option>
                                 )
                                }
                              </select>
                             </div>
                              
                            </div>
                        </div>

                        <label htmlFor="and"><strong> And </strong></label> <br/> 
                        <div  className="audience-filter m-b-10">
                            <div className="form-group">
                                <span className="location-span">Have any of the following:</span>
                                <br/>
                                    <label>Contact List audience</label> 
                                <br/>
                                {
                                    addedCustomAudience.map((audience, index) => 
                                        <span className="tag label label-info" key={index}>
                                            <span>{audience.name}</span>
                                            <button name={audience.name} onClick={() => removeSelectedAudienceHandler(audience)} type="button" className="btn remove">× </button>
                                        </span>
                                    )
                                }
                                <br/>
                                <button type="button" className="btn add-exlusions-btn" onClick={handleCustomAudienceShow}>
                                    + Add Custom Audience
                                </button>
                            </div>
                        </div>
                        
                        
                        {
                            cards && cards.map((card, index) => 
                                <div key={index}>
                                    <label htmlFor="and"><strong> And </strong></label> <br/> 
                                    <div  className="audience-filter m-b-10">
                                        <div className="form-group">
                                            <span className="location-span">Have any of the following:</span>  
                                            <button type="button" className="btn float-right" onClick={() => deleteCard(card.cardNo)}> 
                                                <img src={RemoveIcon} className="reomve-filter" alt="Remove"/>
                                            </button> 
                                            <br/>
                                            <label>Personal Attributes</label> <br/>
                                            {
                                                _.map(_.groupBy(card.data, i => i.type), (value, key, obj) => 
                                                    <span className="tag label label-info" key={value}>
                                                        <span>{obj.name}</span>
                                                        <button type="button" className="btn remove">× </button>
                                                    </span>
                                                )
                                            }
                                            <br/>
                                            <button type="button" className="btn add-exlusions-btn" onClick={() => personalAttributeModalShow(card.cardNo)}>
                                            + Add Filter( OR )
                                            </button> 
                                        </div>
                                    </div> 
                                </div>
                                )
                        }
                        <div>
                            <a className="add-filter-text m-b-10" onClick={addCard} type="button" id="narrow-audience-further">
                                + Narrow audience further (AND)
                            </a>
                        </div>

                        <div>
                            <label>Exclude </label>
                        </div>

                        <div  className="audience-filter m-b-10">
                            <div className="form-group">
                                <span className="location-span">Have any of the following:</span>

                                <br/>
                                    <label>Excluded audience</label>
                                <br/>
                                {
                                    excludeCustomAudience.map((audience, index) => 
                                        <span className="tag label label-info" key={index}>
                                            <span>{audience.name}</span>
                                            <button name={audience.name} onClick={() => removeExcludedAudienceHandler(audience)} type="button" className="btn remove">× </button>
                                        </span>
                                    )
                                }
                                <br/>
    
                                <button type="button" className="btn add-exlusions-btn" onClick={handleCustomAudienceExcludeShow}>
                                    + Add audience exclusions
                                </button>
                            </div>
                        </div>
                      </div>
                      : 
                      <Select
                        closeMenuOnSelect={true}
                        options={customAudience}
                        getOptionLabel={option =>
                            `${option.name}`
                        }
                        getOptionValue={option => `${option.name}`}
                        isClearable={true}
                        isSearchable={true}
                          />
                        }
                    </form>
                </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 bg-body py-5">
                <div className="row">
                  <div className="col-md-1">
                  </div>
                  <div className="col-md-10">
                  <PostPreview />
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Modal Area */}
<Modal 
    show={customAudienceModalShow} 
    onHide={handleCustomAudienceClose}
    backdrop="static"
    keyboard={false}
    className="drawer modal right-align"
    >
        <CustomeAudience />
    
        <Modal.Footer>
            <button type="button" onClick={handleCustomAudienceClose} className="btn btn-primary">Save</button>
            <button type="button" onClick={handleCustomAudienceClose} className="btn btn-secondary" >Cancel</button>
        </Modal.Footer>
</Modal>


<Modal 
    show={customAudienceExcludeModalShow} 
    onHide={handleCustomAudienceExcludeClose}
    backdrop="static"
    keyboard={false}
    className="drawer modal right-align"
    >
        <CustomAudienceExcludeComponent />
    
        <Modal.Footer>
            <button type="button" onClick={handleCustomAudienceExcludeClose} className="btn btn-primary">Save</button>
            <button type="button" onClick={handleCustomAudienceExcludeClose} className="btn btn-secondary" >Cancel</button>
        </Modal.Footer>
</Modal>

<PersonalAttributes />
  </>
  );
}

export default FacebookAudienceTargeting;


