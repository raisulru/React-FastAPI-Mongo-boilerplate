import React from 'react';
import notFoundImage from '../images/404Image.png'


function InvalidPage () {
  return (
      <img src={notFoundImage} alt='not found'/>
  )
}

export default InvalidPage
