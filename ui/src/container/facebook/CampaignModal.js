import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
import CreateFacebookContent from './createContent'
import FacebookAudienceTargeting from './targetAudience'
import FacebookBillAndSchedule from './billAndSchedule'


function CampaignModal () {

    const { facebookCampaign } = useSelector((state) => state);

    const publish = (data) => {
        console.log(data)
    }

    const publisHandler = () => {
        console.log(facebookCampaign, '####################')
        
        const {
            addedCustomAudience, 
            adsImage, 
            budgetAndSchedule, 
            content, 
            excludeCustomAudience, 
            othersTargetingParam, 
            personalAttModal } = facebookCampaign;
        
        let payload = {
            targeting: {},
            ads_payload: {
                campaign: {
                    name: content.name,
                    objective: "REACH",
                    status: "ACTIVE",
                    special_ad_categories: ""
                },
                ads_set: {
                    name: "",
                    campaign_id: "",
                    optimization_goal: "",
                    "billing_event": "string",
                    "daily_budget": 0,
                    "lifetime_budget": 0,
                    "targeting": "string",
                    "status": "string",
                    "bid_amount": 0,
                    "start_time": "string",
                    "end_time": "string"
                },
                "ads_creative": {
                    "image_hash": "string",
                    "page_id": "string",
                    "body_text": "string",
                    "image_url": "string"
                },
                "creative_id": "string"
            }
        }

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
                window.$('#run-ads').modal('hide');
            }
          });
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
                                        <button onClick={publisHandler} className="btn ad-publish-btn" type="button">Publish</button>                                                
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
                                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#targeting" role="tab" aria-controls="targeting" aria-selected="false">Audience Targeting</a>
                                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#budgetnschedule" role="tab" aria-controls="budgetnschedule" aria-selected="false">Budget and Schedule</a>
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