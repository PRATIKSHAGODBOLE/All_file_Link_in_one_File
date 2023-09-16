import React from 'react';
import ReversePromoteSummary from './ReversePromoteSummary';
import ReactDOM from 'react-dom'; // Import ReactDOM, not ReactDOM/client

let students = ["Nisha Yadav", "Pratiksha Godbole", "Rahul Ghodeswar", "Apeksha Sharma", "Samir Kumar", "Neha sharma", " Harsh yadav", "Nidhi patil"]

function ReversePromoteApp() {
  function btnClick() {
    alert("Reverse All the Elements")
    students.reverse();
    // Use ReactDOM.render to render ReversePromoteApp, not ReactDOM.createRoot
    ReactDOM.render(<ReversePromoteApp />, document.getElementById('root'));
  }

  function promote(name) {
    console.log("Promote", name)
    alert("Promote the Element..!!")
    students = [name, ...students.filter((std) => std !== name)];
    // Use ReactDOM.render to render ReversePromoteApp, not ReactDOM.createRoot
    ReactDOM.render(<ReversePromoteApp />, document.getElementById('root'));
  }

  return (
    <div className='container'>
      <h3 className='bg-warning text-center m-3'>List of students</h3>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Character</th>
            <th scope="col" colSpan={3}>Handle</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student, i) => (
              <tr key={i}>
                <ReversePromoteSummary name={student} index={i} callback={btnClick} promoteFun={promote} />
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ReversePromoteApp;
