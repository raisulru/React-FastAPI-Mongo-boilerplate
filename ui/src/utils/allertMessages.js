import React from 'react';

export const SuccessMessage = ({ message, close }) => (
    <div className="alert alert-success alert-dismissible">
        {message}
        <button onClick={close} type="button" className="close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);


export const ErrorMessage = ({ message, close }) => (
    <div className="alert alert-danger alert-dismissible">
        {message}
        <button onClick={close} type="button" className="close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);


export const InfoMessage = ({ message, close }) => (
    <div className="alert alert-info alert-dismissible">
        {message}
        <button onClick={close} type="button" className="close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);


export const AlertTemplate = ({ style, options, message, close }) => (
    <div style={style}>
      {options.type === 'info' && <InfoMessage message={message} close={close}/>}
      {options.type === 'success' && <SuccessMessage message={message} close={close}/>}
      {options.type === 'error' && <ErrorMessage message={message} close={close}/>}
    </div>
  )