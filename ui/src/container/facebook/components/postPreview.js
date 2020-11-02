import React from 'react';
import PostProfile from '../../../images/user.svg'
import FbPostImage from '../../../images/fb-image-post.png'


function PostPreview() {
    return (
        <div className="right-ad-generation-area mr-5 ml-5">
            <div className="media">
                <div className="media-left mr-2">
                    <a href="https://dev.roboket.com/">
                        <img className="media-object photo-profile" src={PostProfile} width="40" height="40" alt="page"/>
                    </a>
                </div>
                <div className="media-body">
                    <a href="https://dev.roboket.com/" className="anchor-username">
                        <h6 className="media-heading">Select Page</h6>
                    </a>
                    <span className="sponsored">Sponsored</span>
                </div>
            </div>
            <div className="post-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                <img src={FbPostImage} alt="facebook-post"></img>
            </div>
            <div className="d-flex">
                <div className="post title">
                    <h6>
                        Grow your business by the help of analytics
                    </h6>
                </div>
                <div className="readmore text-right">
                    <button>
                        readmore
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostPreview