import React from 'react';
import Card from "./Card"
import { FaPlus } from "react-icons/fa6";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import "./column.css";
import {Droppable} from 'react-beautiful-dnd';

function Column(props) {


    const hrColor = {
            backgroundColor: props.color
          };
  
  return (
        <Droppable droppableId={props.name}>
            {(provided)=> {
                return (
                    <div className="column" {...provided.droppableProps} ref={provided.innerRef}>
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
                        props.cards.map((item, index)=>{
                                return(
                                    <Card key={item.id} cardInfo={item} index={index} />
                                )
                        })
                    }
                    {provided.placeholder}
                    </div>
                )
            }}
        </Droppable>
  )
}

export default Column ;