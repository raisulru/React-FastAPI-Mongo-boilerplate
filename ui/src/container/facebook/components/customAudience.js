import React from 'react';
import SearchIcon from '../../../images/search.svg'


function CustomeAudience() {
    return (

        <div className="modal fade drawer right-align" id="custom-audience" tabIndex="-1" role="dialog" aria-labelledby="custom-audience" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-white" id="custom-audience-label">Add audience</h5>
                <button type="button" className="close" data-target="custom-audience" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-contact-list" role="tab" aria-controls="nav-contact-list" aria-selected="true">Contact List</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-website" role="tab" aria-controls="nav-website" aria-selected="false">Website</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-lookalike" role="tab" aria-controls="nav-lookalike" aria-selected="false">Lookalike</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-contact-list" role="tabpanel" aria-labelledby="nav-contact-list-tabe">
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
                            <ul className="list-group mt-2">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> ADN SERVERS LEADS
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                            </ul>  
                         </div>
                    </div>
                    <div className="tab-pane fade" id="nav-website" role="tabpanel" aria-labelledby="nav-website-tab">
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
                            <ul className="list-group mt-2">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Below 1,000</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Below 1,000</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Below 1,000</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Below 1,000</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Below 1,000</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Below 1,000</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Below 1,000</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Below 1,000</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Below 1,000</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> 20.11.18 ADN SERVERS ADD TO CART
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Below 1,000</span>
                                </li>
                            </ul>  
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-lookalike" role="tabpanel" aria-labelledby="nav-nav-lookalike">
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
                            <ul className="list-group mt-2">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox"> Lookalike (BD, 1% to 2%) - ADN Workshop_Facebook Remarketing Audience
                                            <input type="checkbox" value=""/>
                                            <span className="checkmark"></span>                                   
                                        </label>
                                        <div className="ready-box">
                                                <span className="ready-icon"></span>
                                                <span className="ready-text">Ready</span>
                                        </div> 
                                    </div>
                                    <span className="badge badge-pill">Size not available</span>
                                </li>
                            </ul>  
                         </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
            
                <button type="button" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" data-target="custom-audience" data-dismiss="modal" aria-label="Close">Cancel</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default CustomeAudience