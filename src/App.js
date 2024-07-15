import React, {useState} from 'react';
import Column from './Components/Column';
import './App.css';
import data from "./data";
import { DragDropContext } from 'react-beautiful-dnd';

function App() {

  let applied_cards = data.filter((card)=>{
    return (
      card.column == "Applied"
    )
  });

  let shortlisted_cards = data.filter((card)=>{
    return (
      card.column == "Shortlisted"
    )
  });

  let interview_cards = data.filter((card)=>{
    return (
      card.column == "Interview"
    )
  });

  const [applied, setApplied] = useState(applied_cards);
  const [shortlisted, setShortlisted] = useState(shortlisted_cards);
  const [interview, setInterview] = useState(interview_cards);

  function handleDragEnd (result){
    
    if(!result.destination){
      return
    };

    let all_arrs = {applied, shortlisted, interview};
    let source_arr_name = result.source.droppableId.toLowerCase() ;
    let destination_arr_name = result.destination.droppableId.toLowerCase() ;

    const [draggable_card] = all_arrs[source_arr_name].splice(result.source.index, 1);
    all_arrs[destination_arr_name].splice(result.destination.index, 0, draggable_card);

    setApplied(applied);
    setShortlisted(shortlisted);
    setInterview(interview);

  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Column name="Applied" addApplicants={true} rej="8" tot="24" color="#4CBBF7" cards={applied} />
          <Column name="Shortlisted" rej="9" tot="16" color="#A6DFA5" cards ={shortlisted}/>
          <Column name="Interview" rej="1" tot="7" color="#FF5A51" cards={interview} />
        </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default App ;
