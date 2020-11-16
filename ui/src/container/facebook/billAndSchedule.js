
//CONTAINER
import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import { AdsBar } from '../common/components/adsBar';
import PostPreview from './components/postPreview';
import Clock from '../../images/clock.svg'
/**
 * PROPERTIES & FUNCTION 
 * 
 */

function FacebookBillAndSchedule() {
  const { campaign, estimatedAudienceSize } = useSelector((state) => state.facebook);

  return (
    <>
    <div className="lead-generation-ad">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 bg-white py-5">
                <div className="row">
                    
                <div className="col-md-1">
                  
                </div>
                <div className="col-md-10">
                <div className="left-ad-generation-area mr-5 ml-5">
                    <form action="#">
                       <div className="form-group">
                            <label htmlFor="Budget">Budget*  </label> <br/> 
                            <div className="input-group">                                  
                                  <select className="form-control" id="ammount">
                                    <option>Daily (USD $10.00)</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                  <span className="input-group-text opecity-0"> dol</span>  
                                  <input type="text" className="form-control time" value="$10"/>                        
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="Audience">Schedule*  </label> <br/> 
                            <div className="input-group m-b-10 date">                                  
                              <input type='date' className="form-control" />
                                  <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar">     
                                        </span>
                                  </span>
                                <span className="input-group-text"><img src={Clock} alt="clock"/></span>  
                               <input type="text" className="form-control time" value="6.00PM"/>                        
                            </div>

                            <div className="input-group m-b-10 date">                                  
                                  <input type='date' className="form-control" />
                                  <span className="input-group-text"><img src={Clock} alt="clock"/></span>                                         
                                  <input type="text" className="form-control time" value="6.00PM"/> 
                                                         
                            </div>
                          
                            <div className="text-center m-t-30">
                                    <button className="btn publish-btn" type="button" data-toggle="modal" data-target="#publishModal">Publish</button>
                            </div>
                            
                        </div>
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

<div className="modal fade publish" id="publishModal" tabIndex="-1" role="dialog" aria-labelledby="publishModal" aria-hidden="true">
  <div className="modal-dialog" role="document">
      <div className="modal-content">
          <div className="text-center">
              <button className="btn publish-btn-yes m-b-10" type="button">Yes</button>
              <button className="btn publish-btn-no" type="button">No</button>
          </div>  
      </div>
  </div>
</div>

  </>
  );
}

export default FacebookBillAndSchedule;
