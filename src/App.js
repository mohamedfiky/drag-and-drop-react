import Column from './Components/Column';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Column name="Applied" addApplicants={true} rej="8" tot="24" color="#4CBBF7" />
          <Column name="Shortlisted" rej="9" tot="16" color="#A6DFA5" />
          <Column name="Interview" rej="1" tot="7" color="#FF5A51" />
        </div>
      </div>
    </div>
  );
}

export default App;
