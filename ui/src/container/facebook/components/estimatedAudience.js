import React from 'react';

function estimatedAudienceSizeComp(props) {

  const restrictAudienceSize = (users) => {
      if (users < 0 || !users) {
          return "The estimated audience size isn't available."
      }
      return users
  }

    return (
        <div className="right-ad-generation-area mr-5 ml-5 mb-5">
            <div className="estimated-audience py-3 px-3 text-center">
                <p>Estimated audience size</p>
                <span>{restrictAudienceSize(props.users)}</span>
            </div>
        </div>
    )
}

export default estimatedAudienceSizeComp