
//CONTAINER
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Select from 'react-select';
import PostPreview from './components/postPreview';
import {
  searchFacebookLocation,
  getEstimatedAudienceSize
} from '../../store/facebookResource';


function FacebookAudienceTargeting() {
  const dispatch = useDispatch()
  const [audienceType, setAudienceType] = useState('new')

  const SpecialCategory = ['HOUSING', 'CREDIT', 'EMPLOYMENT', 'ISSUES_ELECTIONS_POLITICS', 'NONE']

  useEffect(() => {

  }, [dispatch])

  const estimatedAudienceSizeHandler = () => {
    const accountID = 'act_552899645070172'
    const specification = '{"geo_locations": {"countries": ["BD"]},"age_min": 18,"age_max": 65}'
    dispatch(getEstimatedAudienceSize(user.accessToken, accountID, specification))
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
  
  const { campaign, user, locations, estimatedAudienceSize } = useSelector((state) => state.facebook);
  return (
    <>
    <div className="lead-generation-ad">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 bg-white py-5">
                <div className="row">
                  <button onClick={estimatedAudienceSizeHandler}>audience</button>
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
                                <input className="form-check-input" type="radio" id="newAudience" checked={audienceType === 'new'} value="new" onChange={() => setAudienceType('new')}/>
                                <label className="form-check-label" htmlFor="newAudience">New Audience</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type='radio' id="existingAudience" checked={audienceType === 'existing'} value="existing" onChange={() => setAudienceType('existing')}/>
                                <label className="form-check-label" htmlFor="existingAudience">Select a saved audience</label>
                            </div>
                          
                        </div>
                        {
                          audienceType === 'new' ? <div className="form-group">
                          <label htmlFor="Audience">Target people who matched the following criteria </label> <br/> 
                        <div  className="location">
                            <div className="form-group">
                              <label htmlFor="Location">Location*</label> <br/>
                              <span>People living in any of the following</span>
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
                        <label htmlFor="Audience"> And </label> <br/> 
                        <div  className="location ">
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
                      </div>
                      : 
                      <Select
                            closeMenuOnSelect={false}
                            onChange={geoLocationHandler}
                            options={locations}
                            isClearable={true}
                            isSearchable={true}
                            isMulti
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
                  <PostPreview 
                    page={campaign.page} 
                    adAccount={campaign.ad_account} 
                    cta={campaign.cta}
                    heading={campaign.heading}
                    text={campaign.body_text}
                    audienceSize={estimatedAudienceSize}
                        />
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
  </>
  );
}

export default FacebookAudienceTargeting;
