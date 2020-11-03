
//CONTAINER
import React from 'react';
import { Link } from "react-router-dom";
import { AdsBar } from '../common/components/adsBar';
import PostPreview from './components/postPreview';
/**
 * PROPERTIES & FUNCTION 
 * 
 */

function FacebookBillAndSchedule() {
  return (
    <>
    <AdsBar name="Create Content"/>
    <div className="lead-generation-ad">
    <div className="">
        <div className="row">
            <div className="col-md-6 bg-white py-5">
                <div className="col-md-1">
                  
                </div>
                <div className="col-md-10">
                <div className="left-ad-generation-area mr-5 ml-5">
                    <form action="#">
                    <div className="form-group">
                            <label htmlFor="Audience">Target people who matched the following criteria  </label> <br/> 
                          <div  className="location">
                              <div className="form-group">
                                <label htmlFor="Location">Location*</label> <br/>
                                <span>People living in any of the following</span>
                                <select className="form-control-location" id="Location">
                                  <option>Bangladesh</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                          </div>
                          <label htmlFor="Audience"> Or </label> <br/> 
                          <div  className="location ">
                              <div className="form-group">
                                <label htmlFor="Location">Age range *</label> <br/>
                               <div className="form-inline">
                               <select className="form-control-location w-70" id="Location">
                                  <option>22</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                                <label htmlFor="to" className="p-r-15 p-l-15">To</label>
                                <select className="form-control-location w-70" id="Location">
                                  <option>30s</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                               </div>
                                
                              </div>
                          </div>
                        </div>

                    </form>
                </div>
                </div>
            </div>
            <div className="col-md-6 bg-body py-5">
                <div className="row">
                  <div className="col-md-1">
                  </div>
                  <div className="col-md-10">
                  <PostPreview/>
                  </div>
            </div>
        </div>
        </div>
    </div>
</div>

    <div className="back-next">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 text-center text-lg-left ">
                  <Link to="/ads/dasboard">
                      Cancel
                  </Link>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                <Link to="/ads/facebook/target-audience">Next</Link>
                </div>
            </div>
        </div>
    </div>
  </>
  );
}

export default FacebookBillAndSchedule;
