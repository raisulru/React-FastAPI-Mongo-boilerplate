import React from 'react';
import CreateFacebookContent from './createContent'
import FacebookAudienceTargeting from './targetAudience'
import FacebookBillAndSchedule from './billAndSchedule'

function CampaignModal () {
    return (
        <div className="modal fade run-ads" id="run-ads" tabIndex="-1" role="dialog" aria-labelledby="run-ads" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content"> 
                    <div className="modal-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="run-ads-edit-exit">                                          
                                        <div className="btn-group mr-2" role="group">
                                            <button type="button" className="run-ads-save-btn mr-2" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" className="">Exit</span></button>
                                            <button type="button" className="btn btn-secondary  run-ads-save-btn">Save</button>                                                           
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
                                        <button type="button" className="btn ad-publish-btn">Publish</button>                                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="container-fluid">
                        <div className="row">
                        
                            <div className="col-md-12">
                                <div className="text-center">
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
    )
}

export default CampaignModal