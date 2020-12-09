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
  removeAdsImage,
  updateImageFromCreative
} from '../../store/facebookResource';
import copyObject from '../../utils/copyObject';
import UploadImageOrVideo from './components/uploadFile';
import { objectives } from '../../utils/staticData'


function CreateFacebookContent () {
 
  const dispatch = useDispatch()
  const [campaignType, setCampaignType] = useState('new')
  const [creatives, setCreatives] = useState([])
  const { facebookPages, user, adAccounts, CTA, campaignList } = useSelector((state) => state.facebook);
  const { estimatedAudienceSize } = useSelector((state) => state.facebookSearch);
  const { adsImage, content } = useSelector((state) => state.facebookCampaign);

  const [uploadModal, setUploadModal] = useState(false);
  const closeUploadModal = () => setUploadModal(false);
  const showUploadModal = () => setUploadModal(true);

  useEffect(() => {
    dispatch(getFacebookPages(user.userID, user.accessToken))
    dispatch(getFacebookAdAccounts(user.accessToken))
    dispatch(getFacebookCallToActionEnums())
    
  }, [dispatch])

  const callCreatives = (ad_account) => {
    fetch(`https://graph.facebook.com/v9.0/${ad_account}/adcreatives?access_token=${user.accessToken}&fields=name,body,image_hash,image_url,title,account_id,call_to_action_type,object_story_spec`)
      .then(res => res.json())
      .then(
        (result) => {
          setCreatives(result.data)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  const creativeHandler = (e) => {
    if (e.target.value ==='none' ) {
      return
    }
    const creative = _.find(creatives, ['id', e.target.value])

    let payload = copyObject(content)
    payload['body_text'] = creative.body
    payload['heading'] = creative.title
    payload['cta'] = _.find(CTA, ['value', creative.call_to_action_type])
    payload['page'] = _.find(facebookPages, ['id', creative.object_story_spec.page_id])
    payload['ad_creative'] = e.target.value
    dispatch(saveFacebookCampaign(payload))
    const imagePayload = {
      images: {
        hash: creative.image_hash,
        url: creative.image_url
      }
    }
    dispatch(updateImageFromCreative(imagePayload))
  }

  const updateContent = (name, value) => {
    if (name==='ad_account') {
      if (value!=='none') {
        callCreatives(value)
      }
      value = _.find(adAccounts, ['id', value])
    } else if (name==='page') {
      value = _.find(facebookPages, ['id', value])
    } else if (name==='cta') {
      value = _.find(CTA, ['value', value])
    }
    let payload = copyObject(content)
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
                                <select defaultValue='none' onChange={inputHandler} className="form-control" name="ad_account" id="adaccount">
                                <option value="none">Select Ad Account</option>
                                  {
                                   adAccounts && adAccounts.map(adAccount => 
                                      <option key={adAccount.id} value={adAccount.id}>{adAccount.name}</option>
                                    )
                                  }
                                </select>
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="pages">Facebook page* <i className="fas fa-info-circle"></i> </label>
                                <select defaultValue={content.page && content.page.id} className="form-control" onChange={inputHandler} name="page" id="pages">
                                  <option selected_value={undefined}>Select Page</option>
                                  {
                                    facebookPages.map(page => 
                                      <option key={page.id} value={page.id}>{page.name}</option>
                                    )
                                  }
                                </select>
                            </div> */}
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
                                    <input onChange={inputHandler} type='text' value={content.new_campaign} name="new_campaign" className="form-control" /> 
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
                            {
                              campaignType === 'new' && <div className="form-group">
                                  <label htmlFor="pages">Objective* <i className="fas fa-info-circle"></i> </label>
                                  <select defaultValue={content.objective && content.objective} className="form-control" onChange={inputHandler} name="objective" id="objective">
                                    <option selected_value={undefined}>Select Objective</option>
                                    {
                                      objectives.map(objective => 
                                        <option key={objective.name} value={objective.value}>{objective.name}</option>
                                      )
                                    }
                                  </select>
                              </div>
                            }
                            
                            {/* <div className="form-group upload-file">
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
                                value={content.body_text}
                                className="form-control" 
                                rows="5" 
                                id="text-body-copy" 
                                placeholder="write a message that clearly tells people about what you are promoting">

                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="adaccount">Headline* <i className="fas fa-info-circle"></i> </label>
                                <input value={content.heading} onChange={inputHandler} name="heading" type='text' className="form-control" />
                            </div>
                            {
                              content.objective === 'LEAD_GENERATION' && <div className="form-group">
                                <label htmlFor="adaccount">Call to action* </label>
                                <select defaultValue={content.cta && content.cta.value} onChange={inputHandler} name="cta" className="form-control" id="adaccount">
                                  {
                                    CTA ? CTA.map(ct => 
                                    <option key={ct.name} value={ct.value}>{ct.name}</option>
                                    ) : ""
                                  } 
                                </select>
                            </div>
                            } */}

                            {
                              content.ad_account && <div className="form-group">
                                <label htmlFor="adaccount">Ad Creative*</label>
                                <select onChange={creativeHandler} className="form-control" name="ad_creative" id="adcreatives">
                                <option value='none'>Select Ad Creative</option>
                                  {
                                  creatives.map(creative => 
                                      <option key={creative.id} value={creative.id}>{creative.name}</option>
                                    )
                                  }
                                </select>
                              </div>
                            }
                            
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
