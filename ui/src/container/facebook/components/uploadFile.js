import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import { uploadAdsImage } from '../../../store/facebookResource/action'


function UploadImageOrVideo() {
  const dispatch = useDispatch()
  const { user, adAccounts, campaign } = useSelector((state) => state.facebook);
  const { adsImage } = useSelector((state) => state.facebookCampaign);

  const uploadHandler = (e) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    dispatch(uploadAdsImage(data, user.accessToken, campaign.ad_account.id))
  }

  console.log(adsImage, '######################')

    return (
        <>
            <Modal.Header closeButton>
                <h5 className="modal-title" id="custom-audience-label">Upload Image or Video</h5>
            </Modal.Header>
            <Modal.Body>
                <input type="file" className="form-control-file" onChange={uploadHandler} name="image" id="image-video"/>
                {/* <img src={adsImage.images} class="img-fluid" alt="Responsive image"/> */}
            </Modal.Body>
        </>
    )
}

export default UploadImageOrVideo