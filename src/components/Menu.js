import React from 'react';
import { Link } from 'react-router-dom';


export default function Menu() {
  const openExternalWebsite = (url) => {
    window.open(url, '_blank');
    
  };

  const checkEligibility = () => {
    // Prompt the user for their age
    const age = prompt("Enter your age");
    if (age !== null) {
      if (parseInt(age) >= 18) {
        document.write('You are eligible to vote');
      } else {
        document.write('Sorry, you are not eligible to vote');
      }
    }
  }
//----------------------------------------------------------
  const largenum = () =>{
    var num1 =prompt("Enter First number ")
    var num2 = prompt("Enter Second number ")

    if(num1>num2){
      document.write(num1, " Large number <br>")
      document.write(num2, " Lowest number <br>")
    }else{
      document.write(num2, " Large Number <br>")
      document.write(num1, " Lowest number <br>")
    }
  }
//----------------------------------------------------------

  const handleLogin = () => {
    var x = prompt("Enter Username", "");
    var y = prompt("Enter Password", "");
    var z = "admin";
    var a = "password123";

    if (x === z && y === a) {
      document.write("Access granted");
    } else {
      document.write("Access denied");
    }
  };
//----------------------------------------------------------
  const number = () => {
    var age = prompt("Enter the number")

if(age%2){
    document.write(age, " The number is odd")
}else{
    document.write(age, " The number is even")
}
  }
//----------------------------------------------------------
  const sumnum =  () => {
    var i = 0
           var k;
        do{
            var k = parseInt(prompt("Enter User Number"))
            if(k>=0){
                i+=k;
                // user input total addtion
            }
        }while(k>=0);
    
    document.write("Enter Amount Calculation: "   + i)
  }
 //--------------------------------------------------------
 const random =  () => {
  var usernumber;
 var chances = 0;
 var maxchances = 3;
 var randomNumber = Math.floor(Math.random()*10)+ 1;
 console.log(randomNumber)

 while(chances <  maxchances)
 {
    usernumber = parseInt(prompt("Guess the number 1 to 10"))                                        
    if(usernumber == randomNumber){                                                  
        document.write("User won")
        break;
    }
    else{
        chances++;
    }
    if(chances === maxchances){
       document.write("User Lose")
    }
 }
 }
 //---------------------------------------------------
  const reverse = () => {
    
   var name = prompt("Enter Your  Name")


   function display(str){
    document.write(" Reverse the Name : " + str.split("").reverse().join(""))
   }
   display(name)
  }
  //---------------------------------------------------
  const vowels = () => {
    var count = 0;
var vowels  = ["a" ,"e" ,"i" ,"o","u"];
function display(str){

    for(var i=0; i<str.length; i++){

        if(vowels.includes(str[i].toLowerCase())){
            count++;

        }
    }
    return count;
}
let username = prompt("Enter you name")
document.write(username + "<br>")
document.write("Total Vowels:  " + display(username));
  }
  //----------------------------------------------------------
  const uprletter = () => {
    var username = prompt("Enter Your Name")
function display(str){
return str.charAt(0).toUpperCase() + str.slice(1)
}

var result = display(username)
document.write("First Letter Capital : " , result)
  }
  //----------------------------------------------------
 
  

  return (
    <div>
      <div className="container-fluid">
      <button className="btn btn-dark  mt-3" onClick={() => openExternalWebsite('https://myskillsintro.netlify.app/')}>
          Myskills
        </button>&nbsp;

        <button className="btn btn-dark  mt-3" onClick={() => openExternalWebsite('https://jobapplicationform123.netlify.app/')}>
          Form
        </button>&nbsp;

         {/* Open the first external website in a new tab */}
         <button
          className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://radiant-fox-608431.netlify.app/')}
        >
          First-Project
        </button>&nbsp;
        {/* Open the second external website in a new tab */}
        <button className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://amazonclonehtmlcssproject.netlify.app/')}
        >Second-Project</button>&nbsp;

        <button
          className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://bootstrapfirstpage.netlify.app/')}
        >
          Bootstrap-Project
        </button>&nbsp;

        <button
          className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://loadingball.netlify.app/')} >
          Loading1
        </button>&nbsp;

        <button
          className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://loadingannimation.netlify.app/')} >
          Loading2
        </button>&nbsp; 

        <button
          className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://loadingann.netlify.app/')} >
          Loading3
        </button>&nbsp;
    {/* JavaScript */}
    <Link className=" btn btn-dark  mt-3" onClick={checkEligibility} target="_blank">JS-Condition</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" onClick={largenum} target="_blank">JS-LargeNum</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" onClick={handleLogin} target="_blank">JS-Access</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" onClick={number} target="_blank">JS-Number</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" onClick={sumnum} target="_blank">JS-SumofNumber</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" onClick={random} target="_blank">JS-RandomNum</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" onClick={reverse} target="_blank">JS-RerverStr</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" onClick={vowels} target="_blank">JS-Vowels</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" onClick={uprletter} target="_blank">JS-FirstUpper</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;


         
          

          <button className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://rad-seahorse-633419.netlify.app/')}
        >JS-Record</button>&nbsp;

          <button className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://pratikshagodbole.github.io/To-doProject.github.io/')}
        >JS-Todolist</button>&nbsp;

         <button className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://idyllic-kataifi-eb9ee5.netlify.app/')}
        >JS-FirstAPI</button>&nbsp;


       <button className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://authenticationwithwebstorage.netlify.app/')}
        >JS-Authentication</button>&nbsp;

          <button className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://pratikshagodboledigitalclock2023.netlify.app/')}
        >JS-Clock</button>&nbsp;
           
           <button className="btn btn-dark  mt-3"
          onClick={() => openExternalWebsite('https://weatherapplication1234.netlify.app/')}
        >JS-Weather</button>&nbsp;














        
      <Link className=" btn btn-dark mt-3" to="/" target="_blank">Router</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp; 
        
          <Link className=" btn btn-dark mt-3" to="/todo" target="_blank" >Todo-List</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp; 

          <Link className=" btn btn-dark  mt-3 " to="/CRUD" target="_blank">CRUD-App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/MovieApp" target="_blank" >Movie-App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/reverse-promote" target="_blank">Reverse-Promote</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/state" target="_blank" >State</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/checker" target="_blank">Text-Checker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          <Link className=" btn btn-dark  mt-3" to="/reduxcontext" target="_blank">Redux-ContextApi</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>&nbsp;

          
        
       

        

       
      </div>
    </div>
  );
}
