import React from 'react';
import { Link } from 'react-router-dom';


export default function Menu() {
  const openExternalWebsite = (url) => {
    window.open(url, '_blank');
    
  };

  const checkEligibility = () => {
    const age = prompt("Enter your age");
    if (age !== null) {
      if (parseInt(age) >= 18) {
        alert('You are eligible to vote');
      } else {
        alert('Sorry, you are not eligible to vote');
      }
    }
  }
  

  return (
    <div>
      <div className="container-fluid">
      <Link className=" btn btn-dark mt-3" to="/" >Router</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp; 
        
          <Link className=" btn btn-dark mt-3" to="/todo" >Todo-List</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp; 

          <Link className=" btn btn-dark  mt-3 " to="/CRUD">CRUD-App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/MovieApp" >Movie-App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/reverse-promote">Reverse-Promote</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/state" >State</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/checker">Text-Checker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/reduxcontext">Redux-ContextApi</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/condition" onClick={checkEligibility} target='_blank'>JS-Condition</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;
        
        {/* Open the first external website in a new tab */}
        <button
          className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://radiant-fox-608431.netlify.app/')}
        >
          First-Project
        </button>&nbsp;

        {/* Open the second external website in a new tab */}
        <button
          className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://amazonclonehtmlcssproject.netlify.app/')}
        >
          Second-Project
        </button>&nbsp;

        <button
          className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://loadingball.netlify.app/')}
        >
          Loading
        </button>&nbsp;
      </div>
    </div>
  );
}
