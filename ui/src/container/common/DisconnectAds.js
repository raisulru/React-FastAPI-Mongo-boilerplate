import React from 'react';
import SortIcon from "../../images/sort.png"
import { Link } from "react-router-dom";
import FacebookLogo from '../../images/fb-icon.png'
import GoogleLogo from '../../images/google-ads.png'
import LinkedinLogo from '../../images/linkedin.png'

function TableHead(name) {
    return (
      <td scope="col">{name.name} 
          <span>
              <button className="btn-short" type="btn">
                  <img src={SortIcon} alt="sort"/>
              </button>
          </span>
      </td>
    )
}
function BodyName(name) {
    return (
        <th scope="col">
            <div className="input-group">
                <Link to={name.url} className="btn table-social-btn m-r-30"> 
                    <img src={name.logo} className="mr-2" alt={name.name}/>
                    {name.name}
                </Link>
            </div>
        </th>
    )
}
function BodyButton(name) {
    return (
        <th scope="col">
            <div className="input-group">
                <button type="button" className="btn btn-outline-secondary btn-sm btn-block">
                    {name.name}
                </button>
            </div>
        </th>
    )
}

function DisconnectAds () {
    return (
        <div>
            <div className="row media-table">
                <div className="col-md-3 m-t-30">
                </div>
                <div className="col-md-6 m-t-30">
                    <div className="data">
                        <table className="table account-table">
                            <thead>
                                <tr>
                                    <TableHead name="Name" data="p"/>
                                    <TableHead name="Disconnect" />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <BodyName name="Facebook Ads" url="/" logo={FacebookLogo}/>
                                    <BodyButton name="Disconnect" url="/"/>
                                </tr>
                                <tr>
                                    <BodyName name="Google Ads" url="/" logo={GoogleLogo}/>
                                    <BodyButton name="Connect" url="/"/>
                                </tr>
                                <tr>
                                    <BodyName name="LinkedIn Ads" url="/" logo={LinkedinLogo}/>
                                    <BodyButton name="Connect" url="/"/>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-3 m-t-30">
                </div>
            </div>
        </div>
    )
}
export default DisconnectAds