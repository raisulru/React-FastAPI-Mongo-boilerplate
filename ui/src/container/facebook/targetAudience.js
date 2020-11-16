
//CONTAINER
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Select from 'react-select';
import PostPreview from './components/postPreview';
import RemoveIcon from '../../images/delete.svg'
import SearchIcon from '../../images/search.svg'
import {
  searchFacebookLocation,
  getEstimatedAudienceSize
} from '../../store/facebookResource';
import AdExclution from './adExclution'

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
  
  const { campaign, user } = useSelector((state) => state.facebook);
  const { estimatedAudienceSize, locations } = useSelector((state) => state.facebookSearch);

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
                                        <button type="button" className="dropdown-item add-exlusions-btn" data-toggle="modal" data-target="#add-audience-target">
                                        <span className="filter-item-title">Retargeting and lookalike audiences</span> <br/> Contact list, website visitors, and lookalike audiences.
                                    </button> 
                                        <a className="dropdown-item" href="#"> <span className="filter-item-title">Personal attributes</span> <br/> Interests, demographics, and behaviors</a>
                                    </div>
                                </div>                              
                            </div>

                        </div> 
                        <label htmlFor="and"> And </label> <br/> 
                        <div  className="audience-filter m-b-10">
                            <div className="form-group">
                            <span className="location-span">Have any of the following:</span>  <button type="button" className="btn float-right"> <img src={RemoveIcon} className="reomve-filter" alt="Remove"/></button> <br/>
                                <label>Life Events</label> <br/>
                                <span className="tag label label-info">
                                    <span>Away from family</span>
                                      <button type="button" className="btn remove">× </button>
                                </span>     
                                <span className="tag label label-info">
                                      <span>Away from hometown</span>
                                      <button type="button" className="btn remove">× </button>
                                </span>  
                                <span className="tag label label-info">
                                      <span>Newly-engaged (6 months)</span>
                                      <button type="button" className="btn remove">× </button>
                                </span>  
                            
                                
                                <div className="add-filter-or dropdown">
                                    <a className="dropdown-toggle add-filter-text" type="button" id="filtermenubtn2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        + Add Filter( OR )
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="filtermenubtn2">
                                    <a className="dropdown-item intro" href="#">Adding filters within a group will target people that match any of these filters. Generally, this will increase your audience.</a>
                                        <a className="dropdown-item" href="#"> <span className="filter-item-title">Retargeting and lookalike audiences</span> <br/> Contact list, website visitors, and lookalike audiences.</a>
                                        <a className="dropdown-item" href="#"> <span className="filter-item-title">Personal attributes</span> <br/> Interests, demographics, and behaviors</a>
                                    </div>
                                </div>                              
                            </div>

                        </div>  
                         <a className="add-filter-text m-b-10" type="button" id="narrow-audience-further">
                              + Narrow audience further (AND)
                         </a>
                         <label>Exclude <br/> 
                        <span className="location-span"> Do not target people who match the following criteria</span></label> 
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
    
                                    <button type="button" className="btn add-exlusions-btn" data-toggle="modal" data-target="#add-audience-exclusion-target">
                                       + Add audience exclusions
                                    </button>                        
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


<div className="modal fade drawer right-align" id="add-audience-target" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-white" id="exampleModalLabel">Add audience</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-contact-list" role="tab" aria-controls="nav-contact-list" aria-selected="true">Contact List</a>
                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-website" role="tab" aria-controls="nav-website" aria-selected="false">Website</a>
                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-lookalike" role="tab" aria-controls="nav-lookalike" aria-selected="false">Lookalike</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-contact-list" role="tabpanel" aria-labelledby="nav-contact-list-tabe">
                         <div className="contact-list-tab-content">
                            <form className="form mt-2">
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
                            </form>
                            <ul class="list-group mt-2">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                            </ul>  
                         </div>
                    </div>
                    <div class="tab-pane fade" id="nav-website" role="tabpanel" aria-labelledby="nav-website-tab">
                        <div className="website-tab-content">
                            <form className="form mt-2">
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
                            </form>
                            <ul class="list-group mt-2">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Below 1,000</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Below 1,000</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Below 1,000</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Below 1,000</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Below 1,000</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Below 1,000</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Below 1,000</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Below 1,000</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Below 1,000</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Below 1,000</span>
                                </li>
                            </ul>  
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-lookalike" role="tabpanel" aria-labelledby="nav-nav-lookalike">
                        <div className="lookalike-tab-content">
                            <form className="form mt-2">
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
                            </form>
                            <ul class="list-group mt-2">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span class="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span class="badge badge-pill">Size not available</span>
                                </li>
                            </ul>  
                         </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
            
                <button type="button" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
            </div>
        </div>
        </div>


<AdExclution />





  </>
  );
}

export default FacebookAudienceTargeting;


