import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
  // to hold all input fields data

  const [id,setId]=useState("")
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [designation,setDesignation]=useState("")
  const [salary,setSalary]=useState("")

  const base_url ='http://localhost:8000/add-employee'

  const location =useNavigate()//component to component


  const AddEmployee= async(e)=>{
    e.preventDefault()
    console.log(id,name,age,designation,salary);
    
  //Api call to add employee details
const body={
  id,name,age,designation,salary
}


  const result =await axios.post(base_url,body).then((Response)=>{
    console.log(Response);
    alert(Response.data.message)
    location('/')

  })
  .catch((error)=>{
    alert("please enter a unique employee Id")
  })


  }
  






  return (
    <div>
      <div className="container text-center">
        <h1 className='m-3'>Add Employee Details</h1>
        <form className='p-5 m-5 border shadow'>
        <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setName(e.target.value)} label='Name' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setAge(e.target.value)} label='Age' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setDesignation(e.target.value)} label='Designation' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setSalary(e.target.value)} label='Salary' id='formControlLg' type='text' size='lg' />
      <br />
      <div>
        <button onClick={(e)=>AddEmployee(e)} className='btn btn-success'>Add</button>
      </div>

        </form>
      </div>
    </div>
  )
}

export default Add