import React from 'react'
import "./card.css";
import { TbAntennaBars5 } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { Draggable } from 'react-beautiful-dnd';

function Card(props) {

  const bars_color = {
    color:props.cardInfo.barsColor
  };

  return (
    <Draggable key={props.cardInfo.id} draggableId={props.cardInfo.id} index={props.index}>
      {(provided)=>{
        return(
          <div className="card" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <div className="first-row">
            <img src={props.cardInfo.photo} alt="applicant picture" />
            <div className="name-city">
              <div className="name">
                <TbAntennaBars5 style={bars_color}/>
                <h3>{props.cardInfo.name}</h3>
              </div>
              <p className="city">{props.cardInfo.city}</p>
            </div>
            {props.cardInfo.status == "new" && <div className="status"><span>New</span></div>}
          </div>
          <div className="second-row">
            <div className="rating">
              <span>{props.cardInfo.rating}</span>
              <FaStar />
            </div>
            <div className="phone">{props.cardInfo.phone}</div>
            {props.cardInfo.status == "followed" &&<div className="status-2"><span>Followed</span></div>}
          </div>
        </div>
        )
      }}
    </Draggable>
  )
}

export default Card ;