import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '../../../images/search.svg'

function PersonalAttributeSearch(props) {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.facebook);
    
    const searchPersonalAttHandler = (e) => {
        if (props.search && props.browse) {
            if (e.target.value) {
                dispatch(props.search(user.accessToken, e.target.value))
            } else {
                dispatch(props.browse(user.accessToken))
            }
        } else if (props.search && !props.browse) {
            dispatch(props.search(user.accessToken, e.target.value))
        } else {
            dispatch(props.browse(user.accessToken))
        }
    }

    useEffect(() => {
        if (props.browse) {
            dispatch(props.browse(user.accessToken))
        }
      }, [dispatch])

    const selectHandler = (e) => {
        
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h6>{props.title}</h6>
                    <div className="input-group">                                 
                        <input 
                            type="text"
                            onChange={searchPersonalAttHandler} 
                            className="form-control search-control-filter" 
                            placeholder={props.placeholder}
                            />
                        <div className="input-group-append">
                            <img src={SearchIcon} className="search-icon" alt="Search"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <ul className="list-group mt-2">
                        {
                            props.data && props.data.map((data, index) => 
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="checkbox">
                                        <label className="custom-checkbox">
                                            {data.name}, {data.platform && data.platform}
                                            <input type="checkbox" onChange={selectHandler} value={data.id}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PersonalAttributeSearch
