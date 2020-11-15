import React from 'react';
import PostProfile from '../../../images/user.svg'
import FbPostImage from '../../../images/fb-image-post.png'


function PostPreview(props) {

    return (
    <>
    <div className="right-ad-generation-area mr-5 ml-5 mb-5">
        <div className="estimated-audience py-3 px-3">
            <p>Estimated audience size</p>
            <span>{props.audienceSize.users}</span>
        </div>
    </div>
    <div className="right-ad-generation-area mr-5 ml-5">
            <div className="media">
                <div className="media-left mr-2">
                    <img className="media-object photo-profile" src={PostProfile} width="40" height="40" alt="page"/>
                </div>
                <div className="media-body">
                    <h6 className="media-heading">{props.page.name ? props.page.name : 'Select Page'}</h6>
                    <span className="sponsored">Sponsored</span>
                </div>
            </div>
            <div className="post-body">
                <p>{props.text ? props.text : "Write a message that clearly tells people about what you're promoting"}</p>
                <img src={FbPostImage} alt="facebook-post"></img>
            </div>
            <div className="d-flex py-2 title-readmore">
                <div className="flex-grow-1 post title">
                    <p>
                        {props.heading ? props.heading : 'Write a clear and concise headline to capture viewers attention.'}
                    </p>
                </div>
                <div className="flex-grow-2 text-right">
                    <button className="btn preview-readmore">
                        {props.cta.name ? props.cta.name : 'Select CTA'}
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default PostPreview