import React from 'react';
import Card from "./Card"
import { FaPlus } from "react-icons/fa6";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import "./column.css";

function Column(props) {
  
  const hrColor = {
    backgroundColor: props.color
  }
  
  const data=[
    {
        id: "1",
        name:"Mohamed Fiky",
        photo:"./assets/me.png",
        barsColor:"#FF554B",
        city:"El Manzalah",
        rating:"4.0",
        phone: "0155 8065 883",
        status:"new",
        column:"Applied"
    },
    {
        id: "2",
        name:"vardy",
        photo:"./assets/vardy.png",
        barsColor:"#6FD269",
        city:"El Manzalah",
        rating:"4.0",
        phone: "0155 8065 883",
        status:"",
        column:"Shortlisted"
    },
    {
        id: "3",
        name:"son",
        photo:"./assets/son.png",
        barsColor:"#FECA0B",
        city:"El Manzalah",
        rating:"4.0",
        phone: "0155 8065 883",
        status:"followed",
        column:"Interview"
    }
  ]
    
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
        {
            data.map((item)=>{
                if(item.column == props.name){
                    return(
                        <Card key={item.id} cardInfo={item}/>
                    )
                }
            })
        }
    </div>
  )
}

export default Column;