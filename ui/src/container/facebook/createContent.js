import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import Modal from 'react-bootstrap/Modal';

import PostPreview from './components/postPreview';
import { 
  getFacebookAdAccounts, 
  getFacebookPages, 
  getFacebookCallToActionEnums,
  saveFacebookCampaign,
  removeAdsImage
} from '../../store/facebookResource';
import copyObject from '../../utils/copyObject';
import UploadImageOrVideo from './components/uploadFile';


function CreateFacebookContent () {
  const dispatch = useDispatch()
  const [campaignType, setCampaignType] = useState('new')
  const { facebookPages, user, adAccounts, CTA, campaign, campaignList } = useSelector((state) => state.facebook);
  const { estimatedAudienceSize } = useSelector((state) => state.facebookSearch);
  const { adsImage } = useSelector((state) => state.facebookCampaign);

  const [uploadModal, setUploadModal] = useState(false);
  const closeUploadModal = () => setUploadModal(false);
  const showUploadModal = () => setUploadModal(true);

  useEffect(() => {
    dispatch(getFacebookPages(user.id, user.accessToken))
    dispatch(getFacebookAdAccounts(user.accessToken))
    dispatch(getFacebookCallToActionEnums())
    // if (!campaign.ad_account) {
    //   updateContent('ad_account', adAccounts[0].id)
    // }
    
  }, [dispatch])

  const updateContent = (name, value) => {
    if (name==='ad_account') {
      value = _.find(adAccounts, ['id', value])
    } else if (name==='page') {
      value = _.find(facebookPages, ['id', value])
    } else if (name==='cta') {
      value = _.find(CTA, ['value', value])
    }
    let payload = copyObject(campaign)
    payload[name] = value
    dispatch(saveFacebookCampaign(payload))
  }
  
  const inputHandler = (e) => {
    let value = e.target.value
    const name = e.target.name
    updateContent(name, value)
  }

  const removeImage = () => {
    dispatch(removeAdsImage())
  }

  return (
      <>
        <div className="lead-generation-ad">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 bg-white py-5 create-scroll ">
                    <div className="row">
                    <div className="col-md-1">
                      
                    </div>
                    <div className="col-md-10">
                    <div className="left-ad-generation-area mr-5 ml-5">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="adaccount">Ad account*</label>
                                <select onChange={inputHandler} className="form-control" name="ad_account" id="adaccount">
                                  {
                                   adAccounts && adAccounts.map(adAccount => 
                                      <option key={adAccount.id} value={adAccount.id}>{adAccount.name}</option>
                                    )
                                  }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pages">Facebook page* <i className="fas fa-info-circle"></i> </label>
                                <select defaultValue={campaign.page && campaign.page.id} className="form-control" onChange={inputHandler} name="page" id="pages">
                                  <option selected_value={undefined}>Select Page</option>
                                  {
                                    facebookPages.map(page => 
                                      <option key={page.id} value={page.id}>{page.name}</option>
                                    )
                                  }
                                </select>
                            </div>
                            <div className="campaign">
                                <label htmlFor="Campaign">Campaign* </label> <br/>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="new" checked={campaignType === 'new'} value="new" onChange={() => setCampaignType('new')}/>
                                    <label className="form-check-label" htmlFor="new">Create new campaign</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type='radio' id="existing" checked={campaignType === 'existing'} value="existing" onChange={() => setCampaignType('existing')}/>
                                    <label className="form-check-label" htmlFor="existing">Select from existing </label>
                                </div>
                                <div className="form-group">
                                  {
                                    campaignType === 'new' ? 
                                    <input onChange={inputHandler} type='text' value={campaign.new_campaign} name="new_campaign" className="form-control" /> 
                                    : 
                                    <select onChange={inputHandler} className="form-control" name="campaign" id="leadgeneration-ad">
                                      {
                                      campaignList.map(item => 
                                          <option key={item.id} value={item.id}>{item.name}</option>
                                        )
                                      }
                                    </select>
                                  }
                                  
                                </div>
                            </div>
                            <div className="form-group upload-file">
                                <label htmlFor="image-video">
                                  image/video*
                                <i className="fas fa-info-circle"></i>
                                </label>
                                <div className="select-image">
                                   <div className="col-md-12">
                                     {
                                       adsImage && <button type="button" onClick={removeImage} className="close float-right">
                                       <span style={{"color": 'red'}}>&times;</span>
                                     </button>
                                     }
                                   </div>
                                  {
                                    adsImage ? 
                                    <img style={{"height": 200}} src={adsImage.images.url} className="img-fluid" alt="Responsive image"/>
                                    :
                                    <button type="button" className="btn select-image-btn" onClick={showUploadModal}>Select Image/Video</button>
                                  }
                                  
                                </div>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="text-body-copy"> Text body copy  <i className="fas fa-info-circle"></i></label>
                                <textarea 
                                onChange={inputHandler} 
                                name="body_text" 
                                value={campaign.body_text}
                                className="form-control" 
                                rows="5" 
                                id="text-body-copy" 
                                placeholder="write a message that clearly tells people about what you are promoting">

                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="adaccount">Headline* <i className="fas fa-info-circle"></i> </label>
                                <input value={campaign.heading} onChange={inputHandler} name="heading" type='text' className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="adaccount">Call to action* </label>
                                <select defaultValue={campaign.cta && campaign.cta.value} onChange={inputHandler} name="cta" className="form-control" id="adaccount">
                                   {
                                    CTA ? CTA.map(ct => 
                                    <option key={ct.name} value={ct.value}>{ct.name}</option>
                                    ) : ""
                                  } 
                                </select>
                            </div>

                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 bg-body py-5">
                    <div className="row">
                      <div className="col-md-1">
                      </div>
                      <div className="col-md-10">
                        <PostPreview />
                      </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    <Modal 
        show={uploadModal}
        onHide={closeUploadModal}
        backdrop="static"
        keyboard={false}
        className="drawer modal right-align"
        >
            <UploadImageOrVideo closeModal={closeUploadModal}/>
    </Modal>
      </>
    );
}

export default CreateFacebookContent
