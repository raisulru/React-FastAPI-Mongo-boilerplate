import React from 'react';
import facebookLogo from '../../../images/fb-icon.png'

export const FacebookButton = ({ onClick }) => (
    <button type="button" className="btn btn-connect mr-2" onClick={onClick}><img src={facebookLogo}/>Facebook</button>
);
