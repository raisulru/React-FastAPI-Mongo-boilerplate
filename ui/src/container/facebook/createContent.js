import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { AdsBar } from '../common/components/adsBar';
import PostPreview from './components/postPreview';
import { getFacebookAdAccounts, getFacebookPages, getFacebookCallToActionEnums } from '../../store/facebookResource';



function CreateFacebookContent () {
  const dispatch = useDispatch()
  const [campaignType, setCampaignType] = useState('new')
  const [adAccount, setAdAccount] = useState('')
  const [page, setPage] = useState('')
  const [campaign, setCampaign] = useState('')
  const [textBody, setTextBody] = useState('')
  const [heading, setHeading] = useState('')
  const [ctaValue, setCtaValue] = useState('')
  
  useEffect(() => {
    dispatch(getFacebookPages(user.id, user.accessToken))
    dispatch(getFacebookAdAccounts(user.accessToken))
    dispatch(getFacebookCallToActionEnums())
  }, [dispatch])
  
  const { facebookPages, user, adAccounts, CTA } = useSelector((state) => state.facebook);

  const pageHandler = (e) => {
    setPage(e.target.value)
  }

  const adAccountHandler = (e) => {
    setAdAccount(e.target.value)
  }

  const campaignHandler = (e) => {
    setCampaign(e.target.value)
  }

  const bodyHandler = (e) => {
    setTextBody(e.target.value)
  }

  const headingHandler = (e) => {
    setHeading(e.target.value)
  }

  const ctaHandler = (e) => {
    setCtaValue(e.target.value)
  }

  const handleNext = () => {
    const payload = {
      ad_account: adAccount,
      page: page,
      campaign: campaign,
      body_text: textBody,
      heading: heading,
      cta: ctaValue
    }
    console.log(payload)
  }

  
    return (
      <>
        <AdsBar name="Create Content"/>
        <div className="lead-generation-ad">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 bg-white py-5">
                    <div className="row">
                    <div className="col-md-1">
                      
                    </div>
                    <div className="col-md-10">
                    <div className="left-ad-generation-area mr-5 ml-5">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="adaccount">Ad account*</label>
                                <select onChange={adAccountHandler} className="form-control" id="adaccount">
                                  <option>Select Ad Account</option>
                                  {
                                    adAccounts.map(adAccount => 
                                      <option key={adAccount.id} value={adAccount.id}>{adAccount.name}</option>
                                    )
                                  }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pages">Facebook page* <i className="fas fa-info-circle"></i> </label>
                                <select className="form-control" onChange={pageHandler} id="pages">
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
                                    <input onChange={campaignHandler} type='text' className="form-control" /> 
                                    : 
                                    <select onChange={campaignHandler} className="form-control" id="leadgeneration-ad">
                                      <option>Lead generation ad- 22/ 10/2020 5:00pm</option>
                                      <option>Lead generation ad- 23/ 10/2020 5:00pm</option>
                                      <option>Lead generation ad- 24/ 10/2020 5:00pm</option>
                                    </select>
                                  }
                                  
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image-video">
                                  image/video*
                                <i className="fas fa-info-circle"></i>
                                </label>
                                <input type="file" className="form-control-file" id="image-video"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="text-body-copy"> Text body copy  <i className="fas fa-info-circle"></i></label>
                                <textarea onChange={bodyHandler} className="form-control" rows="5" id="text-body-copy" placeholder="write a message that clearly tells people about what you are promoting"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="adaccount">Headline* <i className="fas fa-info-circle"></i> </label>
                                <input onChange={headingHandler} type='text' className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="adaccount">Call to action* </label>
                                <select onChange={ctaHandler} className="form-control" id="adaccount">
                                   {
                                    CTA.map(ct => 
                                    <option key={ct.name} value={ct.value}>{ct.name}</option>
                                    )
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
                      <PostPreview/>
                      </div>
                </div>
            </div>
            </div>
        </div>
    </div>

        <div className="back-next">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 text-center text-lg-left ">
                      <Link to="/ads/dasboard">
                          Cancel
                      </Link>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                    <Link onClick={handleNext} >Next</Link>
                    {/* to="/ads/facebook/target-audience" */}
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default CreateFacebookContent
