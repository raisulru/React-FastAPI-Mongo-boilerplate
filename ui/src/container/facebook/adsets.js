import React, { useEffect } from 'react';
import SortIcon from "../../images/sort.png"
import FacebookLogo from '../../images/fb-icon.png'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import _ from "lodash"
import { getAdSet } from "../../store/facebookResource"


function FacebookAdSet (props) {
    const { campaignID } = props.match.params
    const dispatch = useDispatch()
    const { user, adSet } = useSelector((state) => state.facebook);
    
    useEffect(() => {
        dispatch(getAdSet(user.accessToken, campaignID))
    }, [dispatch]);    

    return (
        <>
   <div className="ads-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="py-4">Ad Sets</h3>
                </div>
            </div>
        </div>
    </div>
    <div className="dashboard-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <nav>
                        <div className="nav nav-tabs p-l-15 border-0 tab-nabs-robokate" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#manage" role="tab" aria-controls="nav-home" aria-selected="true">Manage</a>
                        </div>
                    </nav>
                    <div className="tab-content first-tab" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="manage" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="col-md-12 m-t-50">
                                <div className="impressoins-n-others">
                                    <div className="row">
                                        <div className="col-sm-8 p-r-15">
                                            <div className="card-deck">
                                                <div className="card border-left-primary  h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs text-cart-title text-uppercase mb-1 text-center">Imporessions</div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">12</div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card border-left-primary  h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs text-cart-title text-uppercase mb-1 text-center">Clicks</div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">0</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card border-left-primary  h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs text-cart-title text-uppercase mb-1 text-center">Contacts</div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">0</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 p-l-15">
                                            <div className="card-deck">
                                                <div className="card border-left-primary  h-100">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs text-cart-title text-uppercase mb-1 text-center">Amounts Spent</div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">$10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card border-left-primary  h-100">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs text-cart-title text-uppercase mb-1 text-center">Roi</div>
                                                                <div className="text-center">
                                                                    <label className="calculate">Calculate <i className="fas fa-lock"></i> </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-t-30 m-b-30">
                                <div className="row">
                                    <div className="col-7">
                                    </div>
                                    <div className="col-5">
                                        <form className="form-inline float-right p-r-15">
                                            <div className="row">
                                                <div className="input-group">
                                                    <label htmlFor="exampleFormControlSelect1" className="manage-collumns"><i className="far fa-edit mr-2"></i> Manage collums</label>
                                                    <input type="text" className="form-control search-control" name="exampleFormControlSelect1" placeholder="Search for ad campaign" disabled/>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-search" type="button">
                                                            <i className="fa fa-search "></i>
                                                            </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-t-30">
                                <div className="data">
                                <table className="table table-striped table-bordered dashboard-table">
                                        <thead>
                                            <tr>
                                                <th className="table-title">Name <span><button className="btn-short" type="btn">  <img src={SortIcon} className="mr-2" alt="sort"/></button></span></th>
                                                <th className="table-title"></th>
                                                <th className="table-title">Life Time Budget <i className="fas fa-info-circle"></i> <span><button className="btn-short" type="btn"><img src={SortIcon} className="mr-2" alt="sort"/></button></span></th>
                                                <th className="table-title">Start Time <i className="fas fa-info-circle"></i> <span><button className="btn-short" type="btn"><img src={SortIcon} className="mr-2" alt="sort"/></button></span></th>
                                                <th className="table-title">End Time <i className="fas fa-info-circle"></i> <span><button className="btn-short" type="btn"><img src={SortIcon} className="mr-2" alt="sort"/></button></span></th>
                                                <th className="table-title">Cost Per Contact <i className="fas fa-info-circle"></i> <span><button className="btn-short" type="btn"><img src={SortIcon} className="mr-2" alt="sort"/></button></span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                adSet.map(ad => 
                                                    <tr key={ad.id}>
                                                        <td>
                                                        <div className="input-group">
                                                            <Link to="/" className="btn table-social-btn m-r-30"> 
                                                                <img src={FacebookLogo} className="mr-2" alt="Facebook"/>
                                                                {ad.name} 
                                                            </Link>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <label className="switch">
                                                                <input id={ad.id} type="checkbox"/>
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            {ad.lifetime_budget}
                                                        </td>
                                                        <td>
                                                            {ad.start_time}
                                                        </td>
                                                        <td>
                                                            {
                                                                ad.end_time
                                                            }
                                                        </td>
                                                        <td>$320,800</td>
                                                    </tr>
                                                )
                                            }
                                            
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Total</th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </tfoot>

                                    </table>
                                    <div className="col-md-12">
                                        <div className="pagination-area text-center">
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination justify-content-center">
                                                    <li className="page-item"><Link className="page-link" to="/ads/onboarding"><i className="fas fa-chevron-left mr-2"></i> Previous</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="/ads/onboarding">1</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="/ads/onboarding">2</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="/ads/onboarding">3</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="/ads/onboarding">Next <i className="fas fa-chevron-right ml-2"></i></Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
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

export default FacebookAdSet