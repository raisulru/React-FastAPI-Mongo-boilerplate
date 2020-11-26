import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '../../../images/search.svg';
import PersonalAttributeSearch from './personalAttSearch';

import {
    browseUserOS,
    browseUserDevice,
    browseFamilyStatus,
    browseIncome,
    browseIndustries,
    browseLifeEvents,
    browseDemographics,
    searchJobTitle,
    searchWorkEmployer,
    searchInterest,
    browseInterest,
    browseBehaviour,
    getAllTargetCategory,
    controllPersonalAttModal,
    searchEducationSchool,
    searchEducationMajor
} from '../../../store/facebookResource'


function PersonalAttributes(props) {
    const dispatch = useDispatch()

    const { 
        targettingCategories,
        interests,
        behaviours,
        educationMajors,
        schools,
        workEmployers,
        jobTitles,
        industries,
        demographics,
        lifeEvents,
        income,
        familyStatus,
        userDevices,
        operatingSystems
     } = useSelector((state) => state.facebookSearch);

    const { personalAttModal } = useSelector((state) => state.facebookCampaign);

    useEffect(() => {
       
    }, [dispatch])

    const closeModal = () => {
        dispatch(controllPersonalAttModal({
            id: undefined,
            display: 'none'
        }))
    }

    return (
        <div className="custom-modal col-md-12" style={{display: personalAttModal.display}}>
                <div onClick={closeModal} className="modal-header text-white">
                    <h5 className="p-l-20">Add audience</h5>
                    <span className="float-right ">
                        x
                    </span>
                </div>
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
                    <div className="personal-attribute-v-tab mt-2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <p className="tab-category"><strong>Demographics</strong></p>
                                    <a className="nav-link active" id="v-pills-education-tab" data-toggle="pill" href="#v-pills-education" role="tab" aria-controls="v-pills-education" aria-selected="true">
                                        Education School</a>
                                    <a className="nav-link" id="v-pills-education-major-tab" data-toggle="pill" href="#v-pills-education-major" role="tab" aria-controls="v-pills-education-major" aria-selected="false">
                                        Education Major</a>
                                    <a className="nav-link" id="v-pillsworkemployer-tab" data-toggle="pill" href="#v-pillsworkemployer" role="tab" aria-controls="v-pillsworkemployer" aria-selected="false">
                                        Work Employer</a>
                                    <a className="nav-link" id="v-pills-jobtitle-tab" data-toggle="pill" href="#v-pills-jobtitle" role="tab" aria-controls="v-pills-jobtitle" aria-selected="false">
                                        Job Title</a>
                                    <a className="nav-link" id="v-pills-lifeevents-tab" data-toggle="pill" href="#v-pills-lifeevents" role="tab" aria-controls="v-pills-lifeevents" aria-selected="false">
                                        Life Events</a>
                                    <a className="nav-link" id="v-pills-industries-tab" data-toggle="pill" href="#v-pills-industries" role="tab" aria-controls="v-pills-industries" aria-selected="false">
                                        Industries</a>
                                    <a className="nav-link" id="v-pills-income-tab" data-toggle="pill" href="#v-pills-income" role="tab" aria-controls="v-pills-income" aria-selected="false">
                                    Income</a>
                                    <a className="nav-link" id="v-pills-familystatus-tab" data-toggle="pill" href="#v-pills-familystatus" role="tab" aria-controls="v-pills-familystatus" aria-selected="false">
                                    Family Status</a>
                                    <a className="nav-link" id="v-pills-userdevice-tab" data-toggle="pill" href="#v-pills-userdevice" role="tab" aria-controls="v-pills-userdevice" aria-selected="false">
                                    User Device</a>
                                    <a className="nav-link" id="v-pills-useros-tab" data-toggle="pill" href="#v-pills-useros" role="tab" aria-controls="v-pills-useros" aria-selected="false">
                                    User OS</a>

                                    <p className="tab-category"><strong>Interests</strong></p>
                                    <a className="nav-link" id="v-pills-interest-tab" data-toggle="pill" href="#v-pills-interest" role="tab" aria-controls="v-pills-interest" aria-selected="false">
                                        Interests</a>
                                    
                                    
                                    <p className="tab-category"><strong>Behaviors</strong></p>
                                    <a className="nav-link" id="v-pills-behaviours-tab" data-toggle="pill" href="#v-pills-behaviours" role="tab" aria-controls="v-pills-behaviours" aria-selected="false">
                                        Behaviours
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-education" role="tabpanel" aria-labelledby="v-pills-education-tab">
                                        <PersonalAttributeSearch 
                                            title="Education Schools"
                                            type="education_schools"
                                            data={schools} 
                                            search={searchEducationSchool} 
                                            placeholder="Search For Education School"/>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-education-major" role="tabpanel" aria-labelledby="v-pills-education-major-tab">
                                        <PersonalAttributeSearch 
                                            title="Education Major"
                                            type="education_majors"
                                            data={educationMajors} 
                                            search={searchEducationMajor} 
                                            placeholder="Search For Education Major"
                                            />
                                    </div>
                                    <div className="tab-pane fade" id="v-pillsworkemployer" role="tabpanel" aria-labelledby="v-pillsworkemployer-tab">
                                    <PersonalAttributeSearch 
                                            title="Work Employer"
                                            type="work_employers"
                                            data={workEmployers} 
                                            search={searchWorkEmployer} 
                                            placeholder="Search For Work Employer"
                                            />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-jobtitle" role="tabpanel" aria-labelledby="v-pills-jobtitle-tab">
                                    <PersonalAttributeSearch 
                                            title="Job Title"
                                            type="work_positions"
                                            data={jobTitles} 
                                            search={searchJobTitle} 
                                            placeholder="Search For Job Title"
                                            />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-lifeevents" role="tabpanel" aria-labelledby="v-pills-lifeevents-tab">
                                    <PersonalAttributeSearch 
                                            title="Life Events"
                                            data={lifeEvents} 
                                            browse={browseLifeEvents} 
                                            placeholder="Search For Life Events"
                                            />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-industries" role="tabpanel" aria-labelledby="v-pills-industries-tab">
                                    <PersonalAttributeSearch 
                                            title="Industries"
                                            data={industries} 
                                            browse={browseIndustries} 
                                            placeholder="Search For Industries"
                                            />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-income" role="tabpanel" aria-labelledby="v-pills-income-tab">
                                    <PersonalAttributeSearch 
                                            title="Income"
                                            data={income} 
                                            browse={browseIncome} 
                                            placeholder="Search For Income"
                                            />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-familystatus" role="tabpanel" aria-labelledby="v-pills-familystatus-tab">
                                    <PersonalAttributeSearch 
                                            title="Family Status"
                                            data={familyStatus} 
                                            browse={browseFamilyStatus} 
                                            placeholder="Search For Family Status"
                                            />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-userdevice" role="tabpanel" aria-labelledby="v-pills-userdevice-tab">
                                    <PersonalAttributeSearch 
                                            title="User Device"
                                            type="user_device"
                                            data={userDevices} 
                                            browse={browseUserDevice} 
                                            placeholder="Search For User Device"
                                            />
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-useros" role="tabpanel" aria-labelledby="v-pills-useros-tab">
                                    <PersonalAttributeSearch 
                                            title="User OS"
                                            type="user_os"
                                            data={operatingSystems} 
                                            browse={browseUserOS} 
                                            placeholder="Search For User OS"
                                            />
                                    </div>

                                    <div className="tab-pane fade" id="v-pills-interest" role="tabpanel" aria-labelledby="v-pills-interest-tab">
                                    <PersonalAttributeSearch 
                                            title="User Interests"
                                            data={interests}
                                            search={searchInterest}
                                            browse={browseInterest}
                                            placeholder="Search For User Interests"
                                            />
                                    </div>

                                    <div className="tab-pane fade" id="v-pills-behaviours" role="tabpanel" aria-labelledby="v-pills-behaviours-tab">
                                    <PersonalAttributeSearch 
                                            title="User Behaviours"
                                            data={behaviours}
                                            browse={browseBehaviour}
                                            placeholder="Search For User Behaviours"
                                            />
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>

                <button type="button" onClick={closeModal} className="btn btn-primary">Save</button>
                <button type="button" onClick={closeModal} className="btn btn-secondary">Cancel</button>
        </div>
    )
}

export default PersonalAttributes
