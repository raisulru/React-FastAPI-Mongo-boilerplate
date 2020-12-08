import React from 'react';
import { useSelector } from 'react-redux';

import PostProfile from '../../../images/user.svg'
import FbPostImage from '../../../images/fb-image-post.png'


function PostPreview() {
  const { adsImage, content } = useSelector((state) => state.facebookCampaign);
  const { estimatedAudienceSize  } = useSelector((state) => state.facebookSearch);

    return (
    <>
        <div className="right-ad-generation-area mr-5 ml-5 mb-5">
            <div className="estimated-audience py-3 px-3 text-center">
                <p>Estimated audience size</p>
                <span>{estimatedAudienceSize.users}</span>
            </div>
        </div>
        <div className="right-ad-generation-area mr-5 ml-5">
            <div className="media">
                <div className="media-left mr-2">
                    <img className="media-object photo-profile" src={content.page ? content.page.picture.data.url:PostProfile} width="40" height="40" alt="page"/>
                </div>
                <div className="media-body">
                    <h6 className="media-heading">{content.page ? content.page.name : 'Select Page'}</h6>
                    <span className="sponsored">Sponsored</span>
                </div>
            </div>
            <div className="post-body">
                <p>{content.body_text ? content.body_text : "Write a message that clearly tells people about what you're promoting"}</p>
                <img src={ adsImage ? adsImage.images.url:FbPostImage } alt="facebook-post"></img>
            </div>
            <div className="d-flex py-2 title-readmore">
                <div className="flex-grow-1 post title">
                    <p>
                        {content.heading ? content.heading : 'Write a clear and concise headline to capture viewers attention.'}
                    </p>
                </div>
                <div className="flex-grow-2 text-right">
                    {
                        content.cta && <button className="btn preview-readmore">
                            {content.cta.name}
                        </button>
                    }
                    
                </div>
            </div>
        </div>
    </>
    )
}

export default PostPreview