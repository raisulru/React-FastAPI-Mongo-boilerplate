import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import userImage from '../../images/user.svg'
import LogoImage from '../../images/pictogram.svg'
import keycloak from '../../utils/keycloak'
import {clearState} from '../../store/auth'
import _ from 'lodash'
import routes from '../../router'

function Header (props) {
  const dispatch = useDispatch()
  const [isRouteMatch, setIsMatch] = useState(false)
  const currentLocation = useLocation()
  const { authInfo } = useSelector((state) => state)

  const logoutAndClear = () => {
    keycloak.logout()
    dispatch(clearState())
  }

  useEffect(() => {
    _.forEach(routes, route => {
      console.log(currentLocation.pathname, route.path, '##################')
      if (currentLocation.pathname === route.path || '/ads' === route.path) {
        setIsMatch(true)
      }
    })
  }, [dispatch])

  const userInfo = authInfo.userInfo

    return (
      
        isRouteMatch ? <div className="menu_area">
        <div className="container-fluid">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light menu-width">
              <Link className="navbar-brand" to="/ads/onboarding">
                <img src={LogoImage} alt="Roboket Logo"/>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/ads/onboarding" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Contacts
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/ads/onboarding">Action</Link>

                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/ads/onboarding" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Marketing
              </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/ads">Ads</Link>

                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/ads/onboarding" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sales
            </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/ads/onboarding">Action</Link>

                    </div>
                  </li>

                </ul>
                <div className="form-inline my-2 my-lg-0 icon-menu">
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">

                      <Link to="/ads/onboarding" className="nav-link"><i className="far fa-bell"></i></Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="/ads/onboarding" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img className="mr-2 img-profile rounded-circle" src={userImage} alt="User"/>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userInfo.name ? userInfo.name : userInfo.preferred_username}</span>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        
                        <Link className="dropdown-item" to="/ads/onboarding">
                          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> <strong>{userInfo.email}</strong>
                        </Link>
                        <Link className="dropdown-item" to="/ads/onboarding">
                          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i> Settings
                        </Link>
                        <Link className="dropdown-item" to="/ads/onboarding">
                          <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> Activity Log
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/ads/onboarding" data-toggle="modal" data-target="#logoutModal" onClick={logoutAndClear}>
                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Logout
                        </Link>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </nav>
        </div>
      </div>
    </div >
    :
    ''
      
    );
}


export default Header
