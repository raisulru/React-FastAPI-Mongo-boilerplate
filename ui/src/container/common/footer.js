import React, {useEffect, useState} from 'react';
import { allRoutes } from '../../router'
import _ from 'lodash'
import { useLocation } from "react-router-dom";


function Footer () {
  const currentLocation = useLocation()

  const [isRouteMatch, setIsMatch] = useState(false)
  useEffect(() => {
    if (_.includes(allRoutes, currentLocation.pathname)) {
      setIsMatch(true)
    }
  })

    return (
      isRouteMatch ? 
        <footer className="footer footer-bg">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center text-lg-left ">
                    <p className="footer-text">Copyright &copy; 2020 ADN Digital. All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
    :
    ""
    );
}

export default Footer
