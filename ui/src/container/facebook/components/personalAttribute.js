import React from 'react';
import SearchIcon from '../../../images/search.svg'


function PersonalAttributes(props) {
    return (
        <div className="modal fade drawer right-align" id={props.id} tabIndex="-1" role="dialog" aria-labelledby={props.id} aria-hidden="true">
            <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-secondary" data-target={`#${props.id}`} data-dismiss="modal">Cancel</button>
            </div>
        </div>
    )
}

export default PersonalAttributes