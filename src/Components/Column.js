import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import "./column.css";

function Column(props) {
  
  const hrColor = {
    backgroundColor: props.color
  }  
    
  return (
    <div className="column">
        <div className="heading">
            <div className="column-name">
                <input type="checkbox" />
                <h2>{props.name}</h2>
            </div>
            {props.addApplicants && <button className="add"><FaPlus /> Add Applicants</button>}
            
            <div className="bars">
                <HiMiniBarsArrowDown />
            </div>
        </div>
        <div className="numbers-row">
            <div className="rejected">
                <span>{props.rej}</span>
                REJECTED
            </div>
            <div className="total">
                <span>{props.tot}</span>
                TOTAL
            </div>
        </div>
        <hr style={hrColor}/>
    </div>
  )
}

export default Column;