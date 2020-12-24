import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostPreview from './components/postPreview';
import {addBudgetAndSchedule} from '../../store/facebookResource'
import copyObject from '../../utils/copyObject';


function FacebookBillAndSchedule() {
  const dispatch = useDispatch()
  const [dayDiff, setDayDiff] = useState(0)
  const [totalAmmount, setTotalAmmount] = useState(0)
  const { budgetAndSchedule } = useSelector((state) => state.facebookCampaign);

  const inputHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      const payload = copyObject(budgetAndSchedule)
    payload[name] = value
    dispatch(addBudgetAndSchedule(payload))
    // numberOfDays()
  }

  const numberOfDays = () => {
      const {start_date, end_date} = budgetAndSchedule;
      let startDate, endDate;

      if (start_date) {
          startDate = new Date(start_date);
      }

      if (end_date) {
          endDate = new Date(end_date);
      }

      if (!start_date || !end_date) {
          return
      }
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDayDiff(diffDays)
    if (diffDays) {
        totalAmmountCalculation(diffDays)
    }
  }

  const totalAmmountCalculation = (diffDays) => {
      if (budgetAndSchedule.ammount) {
          const total = diffDays*budgetAndSchedule.ammount
          setTotalAmmount(total)
      }

  }

  return (
    <>
    <div className="lead-generation-ad">
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-6 bg-white py-5 create-scroll">
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <div className="left-ad-generation-area mr-5 ml-5">
                            <div className="form-group">
                                <label htmlFor="Budget">Budget<span style={{'color': 'red'}}>*</span></label> <br/> 
                                <div className="input-group">                                  
                                    <select value={budgetAndSchedule.budgetType ? budgetAndSchedule.budgetType:"daily_budget"} onChange={inputHandler} name="budgetType" className="form-control" id="ammount">
                                        <option value="daily_budget">Daily (USD $)</option>
                                        <option value="lifetime_budget">Life Time (USD $)</option>
                                    </select>
                                    <input type="number" onChange={inputHandler} name="ammount" className="form-control" value={budgetAndSchedule.ammount}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Audience">Schedule<span style={{'color': 'red'}}>*</span></label> <br/>
                                <div className="input-group m-b-10 date">
                                    <input type='date' value={budgetAndSchedule.start_date} onChange={inputHandler} className="form-control" id="dateFrom" name="start_date" />
                                    <input type="time" value={budgetAndSchedule.start_time} onChange={inputHandler} className="form-control" id="timeFrom" name="start_time"/>
                                </div>
                                <div className="input-group m-b-10 date">
                                    <input type="date" value={budgetAndSchedule.end_date} onChange={inputHandler} className="form-control" id="dateTo" name="end_date" />
                                    <input type="time" value={budgetAndSchedule.end_time} onChange={inputHandler} className="form-control"  id="timeTo" name="end_time"/>
                                </div> 
                                {/* <p>Your add will run for <strong>{dayDiff} days</strong> and will cost no more than <strong> ${totalAmmount}</strong> </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 bg-body py-5 create-scroll">
                <div className="row">
                  <div className="col-md-1">
                  </div>
                  <div className="col-md-10">
                  <PostPreview />
                  </div>
            </div>
        </div>
        </div>
    </div>
</div>
  </>
  );
}

export default FacebookBillAndSchedule;
