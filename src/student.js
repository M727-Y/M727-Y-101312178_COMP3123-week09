import React from 'react'
import './App.css';

function Student(props) {
  return(
    <>
      <h1>Welcome to {props.course}</h1>
      <h2>React JS Programming Week{props.week} Lab exercise</h2>
      <h3>{props.sid}</h3>
      <h4>{props.fnm} {props.lnm}</h4>
      <h5>{props.college}, {props.city}</h5>
    </>
  )
  
  

}

export default Student
