import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import { uploadAdsImage } from '../../../store/facebookResource';
import { useAlert } from 'react-alert';


function UploadImageOrVideo(props) {
  const dispatch = useDispatch()
  const [fileObject, setFileObject] = useState()
  const [file, setFile] = useState()
  const { user, adAccounts, campaign } = useSelector((state) => state.facebook);
  const { adsImage } = useSelector((state) => state.facebookCampaign);
  const alert = useAlert()

  const supportedExtentions = [
    'wmv', 'jpg', '3g2',
    'mpg', 'gif', 'mpeg',
    'bmp', 'jpeg', 'png',
    'm4v', 'flv', 'tif',
    'mp4', 'asf', 'avi',
    'mov', 'tiff', '3gp'
]

  const uploadHandler = (e) => {
    if (!_.includes(supportedExtentions, e.target.files[0].name.split('.').pop().toLowerCase())) {
        alert.error('This file format not supported!');
        return
    }

    const data = new FormData()
    data.append('file', e.target.files[0])
    setFileObject(URL.createObjectURL(e.target.files[0]))
    setFile(data)
  }

  const insertFile = () => {
    dispatch(uploadAdsImage(file, user.accessToken, campaign.ad_account.id))
    props.closeModal()
  }

    return (
        <>
            <Modal.Header closeButton>
                <div>
                    <h5 className="modal-title" id="custom-audience-label">Upload Image or Video</h5>
                </div>
            </Modal.Header>
            <Modal.Body>
                <p>
                Select a file to insert.Only wmv, jpg, mpg, gif, mpeg, bmp, jpeg, png, m4v, flv, tif, mp4, asf, avi, mov, tiff, 3gp, and 3g2 files are supported.
                </p>
                <input type="file" className="form-control-file" onChange={uploadHandler} name="image" id="image-video"/>
                {
                    fileObject && 
                    <img src={fileObject} className="img-fluid" alt="Responsive image"/>
                }
            </Modal.Body>
            <Modal.Footer>
                <button type="button" onClick={insertFile} className="btn btn-primary">Insert</button>
                <button type="button" onClick={props.closeModal} className="btn btn-secondary" >Cancel</button>
            </Modal.Footer>
        </>
    )
}

export default UploadImageOrVideo