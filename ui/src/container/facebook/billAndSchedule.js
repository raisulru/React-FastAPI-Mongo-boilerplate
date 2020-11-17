
//CONTAINER
import React from 'react';
import { useSelector } from 'react-redux';

import PostPreview from './components/postPreview';
/**
 * PROPERTIES & FUNCTION 
 * 
 */

function FacebookBillAndSchedule() {
  const { campaign } = useSelector((state) => state.facebook);
  const { estimatedAudienceSize } = useSelector((state) => state.facebookSearch);

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
                                  <input type="text" className="form-control" value="$10"/>                        
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
                               <input type="time" className="form-control"  id="appt" name="appt"/>                        
                            </div>                        
                            <div className="input-group m-b-10 date">                                  
                                <input type='date' className="form-control" />                                   
                                <input type="time" className="form-control" id="appt2" name="appt2"/>                                                         
                            </div> 
                            <p>Your add will run for todays and will cost no more than $10 </p>                        
                                          
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
                  <PostPreview />
                  </div>
            </div>
        </div>
        </div>
    </div>
</div>


  </>
  );
}

export default FacebookBillAndSchedule;
