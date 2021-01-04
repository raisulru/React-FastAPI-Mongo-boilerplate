import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
import CreateFacebookContent from './createContent';
import FacebookAudienceTargeting from './targetAudience';
import FacebookBillAndSchedule from './billAndSchedule';
import { publishAd, deleteMessages } from '../../store/facebookResource';
import { useAlert } from 'react-alert';
import _ from 'lodash';
import copyObject from '../../utils/copyObject';


function CampaignModal () {
    const dispatch = useDispatch()
    const alert = useAlert()
    const [required, setRequired] = useState(true)
    const { facebookCampaign, facebook } = useSelector((state) => state);
    const {
        addedCustomAudience, 
        adsImage, 
        budgetAndSchedule, 
        content, 
        excludeCustomAudience, 
        othersTargetingParam, 
        personalAttModal,
        errorMessage,
        successMessage,
        loading,
        cards,
        savedAudience
     } = facebookCampaign;
        
    const validatePayload = () => {
        if (!content.ad_account || !content.ad_creative || !content.objective) {
            setRequired(true)
            return
        }

        if (!content.new_campaign && !content.campaign) {
            setRequired(true)
            return
        }

        if (!budgetAndSchedule.start_date || !budgetAndSchedule.ammount) {
            setRequired(true)
            return
        }

        if (!othersTargetingParam.geo_locations) {
            setRequired(true)
            return
        }
        setRequired(false)
    }

    const publish = (data) => {
        dispatch(publishAd(data, facebook.user.accessToken, content.ad_account.id))
    }

    const publisHandler = () => {
        if (required) {
            alert.error('Please Fill the required field!')
            return
        }

        const startDateTime = `${budgetAndSchedule.start_date}T${budgetAndSchedule.start_time}:30+0000`
        const endDateTime = `${budgetAndSchedule.end_date}T${budgetAndSchedule.end_time}:30+0000`

        let payload = {
            targeting: {},
            ads_payload: {
                campaign: {
                    name: content.new_campaign,
                    objective: content.objective,
                    status: "ACTIVE",
                    special_ad_categories: othersTargetingParam.specialCategory || 'NONE'
                },
                ads_set: {
                    name: content.new_campaign + ' Ad set',
                    optimization_goal: "REACH",
                    billing_event: "IMPRESSIONS",
                    status: "ACTIVE",
                    bid_amount: 2,
                    start_time: startDateTime,
                    end_time: endDateTime
                },
                creative_id: content.ad_creative
            }
        }

        let budgetType = ''
        if (!budgetAndSchedule.budgetType) {
            budgetType = 'daily_budget'
        } else {
            budgetType = budgetAndSchedule.budgetType
        }

        payload.targeting = savedAudience
        
        payload.ads_payload.ads_set[budgetType] = budgetAndSchedule.ammount
        console.log(payload, '##################################')
        swal({
            title: "Are you sure?",
            text: "Want to publish this ad?",
            icon: "warning",
            buttons: {
                cancel: "Cancle",
                publish: "Publish"
            },
            dangerMode: false,
          })
          .then((proceed) => {
            if (proceed === 'publish') {
                publish(payload)
            }
          });
    }

    const closeModal = () => {
        window.$('#run-ads').modal('hide');
        dispatch(deleteMessages())
    }

    const cancleHandler = () => {
        swal({
            title: "Are you sure?",
            text: "Want to exit?",
            icon: "warning",
            buttons: {
                cancel: "Cancle",
                saveExit: "Save and Exit",
                exit: "Exit Without Save"
            },
            dangerMode: true,
          })
          .then((proceed) => {
            if (proceed === 'exit') {
                window.$('#run-ads').modal('hide');
            } else if (proceed === 'saveExit') {
                window.$('#run-ads').modal('hide');
            }
          });
    }

    if (errorMessage) {
        alert.error(errorMessage)
        dispatch(deleteMessages())
    } else if (successMessage) {
        alert.success(successMessage)
        closeModal()
    }

    return (
        <>
        <div className="modal fade run-ads" id="run-ads" tabIndex="-1" role="dialog" aria-labelledby="run-ads" aria-hidden="true">
            <div className="modal-dialog run-ads-dialog" role="document">
                <div className="modal-content"> 
                    <div className="modal-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="run-ads-edit-exit">
                                        <div className="btn-group mr-2" role="group">
                                            <button onClick={cancleHandler} type="button" className="run-ads-save-btn mr-2">Exit</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="facebook-ad-creation">
                                        <h4 className="text-center text-white mt-2">Facebook ad creation </h4>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="run-ads-edit-exit float-right">
                                        {
                                            loading ? 
                                            <button 
                                                className="btn ad-publish-btn" 
                                                type="button"
                                                >

                                                <div className="spinner-border text-success"></div>
                                                </button>
                                            :
                                            <button 
                                                onMouseOver={validatePayload} 
                                                onClick={publisHandler} 
                                                className="btn ad-publish-btn" 
                                                type="button"
                                                >Publish</button>
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="container-fluid">
                        <div className="row"> 
                            <div className="col-md-12">
                                <div className="create-campaign-modal">                          
                                    <nav>
                                        <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#ad" role="tab" aria-controls="ad" aria-selected="true">Create Content</a>
                                            <a className={`nav-item nav-link ${content.ad_account? '': 'disabled'}`} id="nav-profile-tab" data-toggle="tab" href="#targeting" role="tab" aria-controls="targeting" aria-selected="false">Audience Targeting</a>
                                            <a className={`nav-item nav-link ${content.ad_account? '': 'disabled'}`} id="nav-contact-tab" data-toggle="tab" href="#budgetnschedule" role="tab" aria-controls="budgetnschedule" aria-selected="false">Budget and Schedule</a>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="ad" role="tabpanel" aria-labelledby="ad-tab">
                                        <CreateFacebookContent />
                                    </div>
                                    <div className="tab-pane fade" id="targeting" role="tabpanel" aria-labelledby="targeting-tab">
                                        <FacebookAudienceTargeting />
                                    </div>
                                    <div className="tab-pane fade" id="budgetnschedule" role="tabpanel" aria-labelledby="budgetnschedule-tab">
                                        <FacebookBillAndSchedule />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default CampaignModal