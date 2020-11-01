import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import _ from "lodash"
import SortIcon from "../../images/sort.png"
import FacebookLogo from '../../images/fb-icon.png'
import GoogleLogo from '../../images/google-ads.png'
import LinkedinLogo from '../../images/linkedin.png'
import { getFacebookCampaigns } from '../../store/facebookResource'
import formatNumber from '../../utils/formatNumber'


function TableHead(name) {
  return (
    <th className="table-title">{name.name} <span><button className="btn-short" type="btn"><img src={SortIcon} alt="sort"/></button></span></th>
  )
}

function DashBoard() {
  let totalImpressions = 0
  let totalAmmountSpent = 0

  const dispatch = useDispatch();

  useEffect(() => {
      let adsAccountIdList = []
      _.forEach(adAccounts, adAccount => {
          adsAccountIdList.push(adAccount.id)
      })
    dispatch(getFacebookCampaigns(user.accessToken, adsAccountIdList))
  }, [dispatch]);

  const { campaignList, adAccounts, user } = useSelector((state) => state.facebook);

  _.forEach(adAccounts, adAccount => {
      if (adAccount.insights) {
        totalImpressions += adAccount.insights.data[0].impressions
        totalAmmountSpent += adAccount.insights.data[0].spend
      }
  })

  return (
    <>
    <div className="ads-area">
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-6">
                    <h3 className="py-4">Ads Dashboard</h3>
                </div>

                <div className="col-md-6">
                    <div className="float-right p-r-15">
                        <div className="btn-group mt-4">
                            <button type="button" className="btn create-audiance mr-2">Create Audience</button>
                            <div className="dropdown show">
                                <Link className="btn btn-secondary create-ad-campaign dropdown-toggle" to="/ads/onboarding" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create Ad campaign
                                </Link>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <Link className="dropdown-item" to="/ads/facebook/create-content">
                                        <img src={FacebookLogo} alt="Facebook" />
                                        Facebook Ads
                                    </Link>
                                    <Link className="dropdown-item" to="/ads/facebook/create-content">
                                        <img src={GoogleLogo} alt="Google" />
                                        Google Ads
                                    </Link>
                                    <Link className="dropdown-item" to="/ads/facebook/create-content">
                                        <img src={LinkedinLogo} alt="Linkedin"/>
                                        Linkedin Ads
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <Link className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" to="#manage" role="tab" aria-controls="nav-home" aria-selected="true">Manage</Link>
                            <Link className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" to="#audiance" role="tab" aria-controls="nav-profile" aria-selected="false">Audiance</Link>
                            <Link className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" to="#events" role="tab" aria-controls="nav-contact" aria-selected="false">Events</Link>
                            <Link className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" to="#analize" role="tab" aria-controls="nav-contact" aria-selected="false">Analize</Link>
                        </div>
                    </nav>
                    <div className="tab-content first-tab" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="manage" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-2 p-l-0">
                                        <div className="nav flex-column nav-pills p-l-15" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <Link className="nav-link active" id="v-pills-home-tab" data-toggle="pill" to="#manage-campaign" role="tab" aria-controls="v-pills-home" aria-selected="true">Mange </Link>
                                            <Link className="nav-link" id="v-pills-profile-tab" data-toggle="pill" to="#draft" role="tab" aria-controls="v-pills-profile" aria-selected="false">Draft</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-10 p-r-0">
                                        <div className="tab-content" id="v-pills-tab">
                                            <div className="tab-pane fade show active" id="manage-campaign" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                <div className="row">
                                                    <div className="col-md-12 p-r-0">
                                                        <div className="top-info-n-data">
                                                            <form className="form-inline p-r-0">
                                                                <div className="row">
                                                                    <div className="form-group  m-r-40">
                                                                        <label htmlFor="exampleFormControlInput1">Accounts: <span className="ml-2 accounts-name">Raisuls ads accounts</span></label>


                                                                    </div>
                                                                    <div className="form-group  m-r-40">
                                                                        <label htmlFor="exampleFormControlSelect1 mr-2">Date Range: </label>
                                                                        <select className="form-control ml-2" id="exampleFormControlSelect1">
                                                                            <option>Last 30 days</option>
                                                                            <option>Last 30 days</option>
                                                                            <option>Last 30 days</option>
                                                                            <option>Last 30 days</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="form-group  m-r-40">
                                                                        <label htmlFor="exampleFormControlSelect2">Attribute Reports: </label>
                                                                        <select className="form-control ml-2" id="exampleFormControlSelect2">
                                                                                <option>First Form Submission</option>
                                                                                <option>Last 30 days</option>
                                                                                <option>Last 30 days</option>
                                                                                <option>Last 30 days</option>
                                                                            </select>
                                                                    </div>
                                                                    <div className="form-group  m-r-30">
                                                                        <label htmlFor="exampleFormControlSelect3">Status: </label>
                                                                        <select className="form-control ml-2" id="exampleFormControlSelect3">
                                                                                <option>2 Status</option>
                                                                                
                                                                            </select>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <button className="btn btn-primary btn-export">Export</button>
                                                                    </div>
                                                                </div>
                                                        </form>
                                                        </div>

                                                    </div>

                                                </div>
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
                                                                                    <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">{formatNumber(Number(totalImpressions))} </div>
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
                                                                                    <div className="h5 mb-0 font-weight-bold text-gray-800 text-center">${Number(totalAmmountSpent)}</div>
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
                                                                        <input type="text" className="form-control search-control" name="exampleFormControlSelect1" placeholder="Search for ad campaign"/>
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
                                                                  <TableHead name="Name" />
                                                                  <th></th>
                                                                  <TableHead name="Account Name" />
                                                                  <TableHead name="Type" />
                                                                  <TableHead name="Impressions" />
                                                                  <TableHead name="Stop Date" />
                                                                  <TableHead name="Spend" />
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {campaignList.map(campaign => 
                                                                    
                                                                    <tr key={campaign.id}>
                                                                        <td>
                                                                            <div className="input-group">
                                                                                <Link to="/" className="btn table-social-btn m-r-30"> 
                                                                                    <img src={FacebookLogo} className="mr-2" alt="Facebook"/>
                                                                                    {campaign.name}
                                                                                </Link>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label className="switch">
                                                                                <input defaultChecked={1} type="checkbox"/>
                                                                                <span className="slider round"></span>
                                                                            </label>
                                                                        </td>
                                                                        <td>
                                                                            {adAccounts.map(adAccount => {
                                                                                if (adAccount.account_id === campaign.account_id) {
                                                                                    return adAccount.name
                                                                                }
                                                                                return
                                                                            })}
                                                                        </td>
                                                                        <td>{campaign.objective.replace('_',' ').toLowerCase()}</td>
                                                                        <td>{campaign.insights ? campaign.insights.data[0].impressions:0}</td>
                                                                        <td>{campaign.insights ? campaign.insights.data[0].date_stop:'-'}</td>
                                                                        <td>${campaign.insights ? campaign.insights.data[0].spend:0}</td>
                                                                    </tr>
                                                                )}
                                                                
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
                                            <div className="tab-pane fade" id="draft" role="tabpanel" aria-labelledby="v-pills-profile-tab">draft</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="audiance" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="col-md-12 p-l-0 text-center">
                                Audiance
                            </div>
                        </div>

                        <div className="tab-pane fade" id="events" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className="col-md-12 p-l-0 text-center">
                                Events1
                            </div>
                        </div>
                        <div className="tab-pane fade" id="analize" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className="col-md-12 p-l-0 text-center">
                                Analize1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default DashBoard;
