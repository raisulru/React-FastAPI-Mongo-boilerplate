import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '../../../images/search.svg'
import {addPersonalAtt, removePersonalAtt} from '../../../store/facebookResource'
import _ from 'lodash'

function PersonalAttributeSearch(props) {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.facebook);
    const { personalAttModal, cards } = useSelector((state) => state.facebookCampaign);
    
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
            dispatch(props.browse(user.accessToken, e.target.value))
        }
    }

    useEffect(() => {
        if (props.browse) {
            dispatch(props.browse(user.accessToken))
        }
      }, [dispatch])

    const selectHandler = (e) => {
        const checked = e.target.checked;
        const target = e.target;
        const type = target.value || props.type;
        const payload = { 
            cardNo: personalAttModal.id,
            data: {
                id: target.id,
                name: target.name,
                type: type
            }
        }

        if (checked) {
            dispatch(addPersonalAtt(payload))
        } else {
            dispatch(removePersonalAtt(payload))
        }

        props.audienceSize(payload.data, checked)
    }

    const checkedOrNot = (cards, id) => {
        let boolValue = false;
        const card = _.find(cards, {cardNo: personalAttModal.id})
        if (card) {
            boolValue = _.some(card.data, {id: id})
        }
        return boolValue
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
                                        {
                                            data.type === 'user_os' ? 
                                        
                                            <label className="custom-checkbox">
                                                {data.platform}
                                                <input type="checkbox" checked={checkedOrNot(cards, data.id)} value={data.type} name={data.platform} onChange={selectHandler} id={data.id}/>
                                                <span className="checkmark"></span>
                                            </label>
                                            :
                                            <label className="custom-checkbox">
                                                {data.name}
                                                <input type="checkbox" checked={checkedOrNot(cards, data.id)} value={data.type} name={data.name} onChange={selectHandler} id={data.id}/>
                                                <span className="checkmark"></span>
                                            </label>
                                        }
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
