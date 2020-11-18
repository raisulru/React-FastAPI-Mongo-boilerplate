import React from 'react';
import Modal from 'react-bootstrap/Modal';
import SearchIcon from '../../../images/search.svg'


function PersonalAttributes(props) {
    return (
        <>
            <Modal.Header closeButton>
                <h5 className="modal-title text-white p-l-20" id="custom-audience-label">Add audience</h5>
            </Modal.Header>
            <Modal.Body>
            
                    <form className="form mt-2 mb-2">
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
                    <div className="personal-attribute-v-tab mt-2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <p className="tab-category"><strong>Demographics</strong></p>
                                    <a className="nav-link active" id="v-pills-education-tab" data-toggle="pill" href="#v-pills-education" role="tab" aria-controls="v-pills-education" aria-selected="true">Education</a>
                                    <a className="nav-link" id="v-pills-financial-tab" data-toggle="pill" href="#v-pills-financial" role="tab" aria-controls="v-pills-financial" aria-selected="false">Financial</a>
                                    <a className="nav-link" id="v-pills-lifeevents-tab" data-toggle="pill" href="#v-pills-lifeevents" role="tab" aria-controls="v-pills-lifeevents" aria-selected="false">Life Events</a>
                                    <a className="nav-link" id="v-pills-parents-tab" data-toggle="pill" href="#v-pills-parents" role="tab" aria-controls="v-pills-parents" aria-selected="false">Parents</a>
                                    <a className="nav-link" id="v-pills-relationship-tab" data-toggle="pill" href="#v-pills-relationship" role="tab" aria-controls="v-pills-relationship" aria-selected="false">Relationship</a>
                                    <a className="nav-link" id="v-pills-work-tab" data-toggle="pill" href="#v-pills-work" role="tab" aria-controls="v-pills-work" aria-selected="false">Work</a>
                                    <p className="tab-category"><strong>Demographics</strong></p>
                                    <a className="nav-link" id="v-pills-business-n-industry-tab" data-toggle="pill" href="#v-pills-business-n-industry" role="tab" aria-controls="v-pills-business-n-industry" aria-selected="false">Business and industry</a>
                                    <a className="nav-link" id="v-pills-entertainment-tab" data-toggle="pill" href="#v-pills-entertainment" role="tab" aria-controls="v-pills-entertainment" aria-selected="false">Entertainment</a>
                                    <a className="nav-link" id="v-pills-family-n-relationship-tab" data-toggle="pill" href="#v-pills-family-n-relationship" role="tab" aria-controls="v-pills-family-n-relationship" aria-selected="false">Family and relationships</a>
                                    <a className="nav-link" id="v-pills-fitness-n-wellnes-tab" data-toggle="pill" href="#v-pills-fitness-n-wellnes" role="tab" aria-controls="v-pills-fitness-n-wellnes" aria-selected="false">Fitness and wellness</a>
                                    <a className="nav-link" id="v-pills-food-n-drink-tab" data-toggle="pill" href="#v-pills-food-n-drink" role="tab" aria-controls="v-pills-food-n-drink" aria-selected="false">Food and drink</a>
                                    <a className="nav-link" id="v-pills-hobbies-n-activities-tab" data-toggle="pill" href="#v-pills-hobbies-n-activities" role="tab" aria-controls="v-pills-hobbies-n-activities" aria-selected="false">Hobbies and activities</a>
                                    <a className="nav-link" id="v-pills-shopping-n-fashion-tab" data-toggle="pill" href="#v-pills-shopping-n-fashion" role="tab" aria-controls="v-pills-shopping-n-fashion" aria-selected="false">Shopping and fashion</a>
                                    <a className="nav-link" id="v-pills-sports-n-outdoors-tab" data-toggle="pill" href="#v-pills-sports-n-outdoors" role="tab" aria-controls="v-pills-sports-n-outdoors" aria-selected="false">Sports and outdoors</a>
                                    <a className="nav-link" id="v-pills-technogoly-tab" data-toggle="pill" href="#v-pills-technogoly" role="tab" aria-controls="v-pills-technogoly" aria-selected="false">Technology</a>
                                    <p className="tab-category"><strong>Behaviors</strong></p>
                                    <a className="nav-link" id="v-pills-anniversary-tab" data-toggle="pill" href="#v-pills-anniversary" role="tab" aria-controls="v-pills-anniversary" aria-selected="false">Anniversary</a>
                                    <a className="nav-link" id="v-pills-consumer-classification-tab" data-toggle="pill" href="#v-pills-consumer-classification" role="tab" aria-controls="v-pills-consumer-classification" aria-selected="false">Consumer Classification</a>
                                    <a className="nav-link" id="v-pills-digital-activities-tab" data-toggle="pill" href="#v-pills-digital-activities" role="tab" aria-controls="v-pills-digital-activities" aria-selected="false">Digital activities</a>
                                    <a className="nav-link" id="v-pills-expats-tab" data-toggle="pill" href="#v-pills-expats" role="tab" aria-controls="v-pills-expats" aria-selected="false">Expats</a>
                                    <a className="nav-link" id="v-pills-mobile-user-tab" data-toggle="pill" href="#v-pills-mobile-user" role="tab" aria-controls="v-pills-mobile-user" aria-selected="false">Mobile Device User</a>
                                    <a className="nav-link" id="v-pills-device-time-tab" data-toggle="pill" href="#v-pills-device-time" role="tab" aria-controls="v-pills-device-time" aria-selected="false">Mobile Device User/Device Use Time</a>
                                    <a className="nav-link" id="v-pills-more-categories-tab" data-toggle="pill" href="#v-pills-more-categories" role="tab" aria-controls="v-pills-more-categories" aria-selected="false">More Categories</a>
                                    <a className="nav-link" id="v-pills-politics-us-tab" data-toggle="pill" href="#v-pills-politics-us" role="tab" aria-controls="v-pills-politics-us" aria-selected="false">Politics (US)</a>
                                    <a className="nav-link" id="v-pills-purchase-behavior-tab" data-toggle="pill" href="#v-pills-purchase-behavior" role="tab" aria-controls="v-pills-purchase-behavior" aria-selected="false">Purchase behavior</a>
                                    <a className="nav-link" id="v-pills-soccer-tab" data-toggle="pill" href="#v-pills-soccer" role="tab" aria-controls="v-pills-soccer" aria-selected="false">Soccer</a>
                                    <a className="nav-link" id="v-pills-travel-tab" data-toggle="pill" href="#v-pills-travel" role="tab" aria-controls="v-pills-travel" aria-selected="false">Travel</a>
                            
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-education" role="tabpanel" aria-labelledby="v-pills-education-tab">
                                        Education
                                        <form className="form mt-2 mb-2">
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
                                        <div className="card">
                                        <div className="card-body">
                                            <ul className="list-group mt-2">
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                                            <input type="checkbox" value=""/>
                                                            <span className="checkmark"></span>                                   
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                                            <input type="checkbox" value=""/>
                                                            <span className="checkmark"></span>                                   
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <div className="checkbox">
                                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                                            <input type="checkbox" value=""/>
                                                            <span className="checkmark"></span>                                   
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-financial" role="tabpanel" aria-labelledby="v-pills-financial-tab">Financial</div>
                                    <div className="tab-pane fade" id="v-pills-lifeevents" role="tabpanel" aria-labelledby="v-pills-lifeevents-tab">life events</div>
                                    <div className="tab-pane fade" id="v-pills-parents" role="tabpanel" aria-labelledby="v-pills-parents-tab">Parents</div>
                                    <div className="tab-pane fade" id="v-pills-relationship" role="tabpanel" aria-labelledby="v-pills-relationship-tab">relationship</div>
                                    <div className="tab-pane fade" id="v-pills-work" role="tabpanel" aria-labelledby="v-pills-work-tab">work</div>
                                    <div className="tab-pane fade" id="v-pills-business-n-industry" role="tabpanel" aria-labelledby="v-pills-business-n-industry-tab">business and industry</div>
                                    <div className="tab-pane fade" id="v-pills-entertainment" role="tabpanel" aria-labelledby="v-pills-entertainment-tab">Entertainment</div>
                                    <div className="tab-pane fade" id="v-pills-family-n-relationship" role="tabpanel" aria-labelledby="v-pills-family-n-relationship-tab">family and relationship</div>
                                    <div className="tab-pane fade" id="v-pills-fitness-n-wellnes" role="tabpanel" aria-labelledby="v-pills-fitness-n-wellnes-tab">fitness and wellness</div>
                                    <div className="tab-pane fade" id="v-pills-food-n-drink" role="tabpanel" aria-labelledby="v-pills-food-n-drink-tab">food and drink</div>
                                    <div className="tab-pane fade" id="v-pills-hobbies-n-activities" role="tabpanel" aria-labelledby="v-pills-hobbies-n-activities-tab">Hobbies and activities</div>
                                    <div className="tab-pane fade" id="v-pills-shopping-n-fashion" role="tabpanel" aria-labelledby="v-pills-shopping-n-fashion-tab">Shopping and fashion</div>
                                    <div className="tab-pane fade" id="v-pills-sports-n-outdoors" role="tabpanel" aria-labelledby="v-pills-sports-n-outdoors-tab">sports and outdoors</div>
                                    <div className="tab-pane fade" id="v-pills-technogoly" role="tabpanel" aria-labelledby="v-pills-technogoly-tab">technogoly</div>
                                    <div className="tab-pane fade" id="v-pills-anniversary" role="tabpanel" aria-labelledby="v-pills-anniversary-tab">anniversary</div>
                                    <div className="tab-pane fade" id="v-pills-consumer-classification" role="tabpanel" aria-labelledby="v-pills-consumer-classification-tab">consumer and classification</div>
                                    <div className="tab-pane fade" id="v-pills-digital-activities" role="tabpanel" aria-labelledby="v-pills-digital-activities-tab">digital activities</div>
                                    <div className="tab-pane fade" id="v-pills-expats" role="tabpanel" aria-labelledby="v-pills-expats-tab">expats</div>
                                    <div className="tab-pane fade" id="v-pills-mobile-user" role="tabpanel" aria-labelledby="v-pills-mobile-tab">mobile user</div>
                                    <div className="tab-pane fade" id="v-pills-device-time" role="tabpanel" aria-labelledby="v-pills-device-time-tab">device time</div>
                                    <div className="tab-pane fade" id="v-pills-more-categories" role="tabpanel" aria-labelledby="v-pills-more-categories-tab">more categories</div>
                                    <div className="tab-pane fade" id="v-pills-politics-us" role="tabpanel" aria-labelledby="v-pills-politics-us-tab">politics us</div>
                                    <div className="tab-pane fade" id="v-pills-purchase-behavior" role="tabpanel" aria-labelledby="v-pills-purchase-behavior-tab">Purchase behavior</div>
                                    <div className="tab-pane fade" id="v-pills-soccer" role="tabpanel" aria-labelledby="v-pills-soccer-tab">soccer</div>
                                    <div className="tab-pane fade" id="v-pills-travel" role="tabpanel" aria-labelledby="v-pills-travel-tab">travel</div>
                                </div>
                            </div>
                         </div>
                    </div>
            </Modal.Body>
        </>
    )
}

export default PersonalAttributes
