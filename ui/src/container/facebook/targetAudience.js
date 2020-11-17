
//CONTAINER
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { useAlert } from 'react-alert'

import PostPreview from './components/postPreview';
import RemoveIcon from '../../images/delete.svg'
import {
  searchFacebookLocation,
  getEstimatedAudienceSize,
  getFacebookCustomAudience
} from '../../store/facebookResource';
import CustomeAudience from './components/customAudience'
import PersonalAttributes from './components/personalAttribute'
import CustomAudienceExclude from './components/customAudienceExclude'

function CardComponent () {
    return (
        <div  className="audience-filter m-b-10">
            <div className="form-group">
                <span className="location-span">Have any of the following:</span>  <button type="button" className="btn float-right"> <img src={RemoveIcon} className="reomve-filter" alt="Remove"/></button> <br/>
                <label>Contact List audience</label> <br/>
                <span className="tag label label-info">
                    <span>ADN Workshop_PIIT_audience_file_Custom</span>
                    <button type="button" className="btn remove">× </button>
                </span>     
                <span className="tag label label-info">
                    <span>ADN Servers Lead</span>
                    <button type="button" className="btn remove">× </button>
                </span>  

                <div className="add-filter-or dropdown">
                    <a className="dropdown-toggle add-filter-text" type="button" id="filtermenubtn1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        + Add Filter( OR )
                    </a>
                    <div className="dropdown-menu" aria-labelledby="filtermenubtn1">
                        <a className="dropdown-item intro" href="#">Adding filters within a group will target people that match any of these filters. Generally, this will increase your audience.</a>
                        <button type="button" className="dropdown-item add-exlusions-btn" data-toggle="modal" data-target="#custom-audience">
                        <span className="filter-item-title">Retargeting and lookalike audiences</span> <br/> Contact list, website visitors, and lookalike audiences.
                    </button> 
                        <a className="dropdown-item" href="#"> <span className="filter-item-title">Personal attributes</span> <br/> Interests, demographics, and behaviors</a>
                    </div>
                </div>                              
            </div>
        </div> 
    )
}

function FacebookAudienceTargeting() {
  const SpecialCategory = ['HOUSING', 'CREDIT', 'EMPLOYMENT', 'ISSUES_ELECTIONS_POLITICS', 'NONE']
  const dispatch = useDispatch()
  const alert = useAlert()
  const [cards, setCards] = useState([0])

  const [audienceType, setAudienceType] = useState('new')

  const { campaign, user } = useSelector((state) => state.facebook);
  const { estimatedAudienceSize, locations, customAudience } = useSelector((state) => state.facebookSearch);

  useEffect(() => {
      
  }, [dispatch])

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

  const customAudienceHandler = (e) => {
      console.log(e.target.value)
  }

  const customAudienceSearchHandler = (e) => {
    console.log(e.target.value)
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
      let lastItem = cards[cards.length-1]
    
      cards.push(
        lastItem += 1
      )
      setCards(cards)
      console.log(cards, '#####################')
  }
  
  return (
    <>
    <div className="lead-generation-ad">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 bg-white py-5 create-scroll">
                <div className="row">
                  <button onClick={estimatedAudienceSizeHandler} className="d-none">audience</button>
                   <div className="col-md-1">                  
                   </div>
                    <div className="col-md-10">
                    <div className="left-ad-generation-area mr-5 ml-5">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="adaccount">Special ad Category*</label>
                            <select onChange={specialCategoryHandler} className="form-control" id="adaccount">
                             {
                               SpecialCategory.map(category => 
                               <option key={category} value={category}>{category.replace('_', ' ').toLowerCase()}</option>
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
                        <label htmlFor="and"> And </label> <br/> 
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
                        
                        <label htmlFor="and"> And </label> <br/> 
                        {
                            cards.map(card => 
                                <div  className="audience-filter m-b-10" key={card}>
                                    <h1>{card}</h1>
                                    <div className="form-group">
                                        <span className="location-span">Have any of the following:</span>  <button type="button" className="btn float-right"> <img src={RemoveIcon} className="reomve-filter" alt="Remove"/></button> <br/>
                                        <label>Contact List audience</label> <br/>
                                        <span className="tag label label-info">
                                            <span>ADN Workshop_PIIT_audience_file_Custom</span>
                                            <button type="button" className="btn remove">× </button>
                                        </span>     
                                        <span className="tag label label-info">
                                            <span>ADN Servers Lead</span>
                                            <button type="button" className="btn remove">× </button>
                                        </span>  

                                        <div className="add-filter-or dropdown">
                                            <a className="dropdown-toggle add-filter-text" type="button" id="filtermenubtn1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                + Add Filter( OR )
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="filtermenubtn1">
                                                <a className="dropdown-item intro" href="#">Adding filters within a group will target people that match any of these filters. Generally, this will increase your audience.</a>
                                                <button type="button" className="dropdown-item add-exlusions-btn" data-toggle="modal" data-target="#custom-audience">
                                                <span className="filter-item-title">Retargeting and lookalike audiences</span> <br/> Contact list, website visitors, and lookalike audiences.
                                            </button> 
                                                <a className="dropdown-item" href="#"> <span className="filter-item-title">Personal attributes</span> <br/> Interests, demographics, and behaviors</a>
                                            </div>
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
                                <span className="location-span">Have any of the following:</span>  <button type="button" className="btn float-right"> <img src={RemoveIcon} className="reomve-filter" alt="Remove"/></button> <br/>
                                    <label>Contact List audience</label> <br/>
                                    <span className="tag label label-info">
                                        <span>ADN SERVERS LEADS</span>
                                          <button type="button" className="btn remove">× </button>
                                    </span>     
                                    <span className="tag label label-info">
                                          <span>ADN Workshop_PIIT_audience_file_Custom</span>
                                          <button type="button" className="btn remove">× </button>
                                    </span>  
                                    <br/>
    
                                    <button type="button" className="btn add-exlusions-btn" data-toggle="modal" data-target="#custom-audience-exclude">
                                       + Add audience exclusions
                                    </button>                        
                            </div>

                        </div>  
                      </div>
                      : 
                      <Select
                        closeMenuOnSelect={true}
                        // onChange={customAudienceHandler}
                        options={customAudience}
                        getOptionLabel={option =>
                            `${option.name}`
                        }
                        getOptionValue={option => `${option.name}`}
                        // onInputChange={customAudienceSearchHandler}
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

<CustomAudienceExclude />
<CustomeAudience />
<PersonalAttributes />

  </>
  );
}

export default FacebookAudienceTargeting;


