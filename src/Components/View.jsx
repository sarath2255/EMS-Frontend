import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';


function View() {


  const {id}=useParams()
  console.log(id);

  const base_url ="http://localhost:8000"


const [employeeData,setEmployeeData]=useState({})

  const fetchAnEmployee=async(id)=>{
    const result = await axios.get(`${base_url}/view-employee/${id}`)
   console.log(result.data.employees);
   setEmployeeData(result.data.employees)
   }
   
  console.log(employeeData);


   useEffect(()=>{
    fetchAnEmployee(id)
  },[])


  return (
    <div>
      <h3 className='text-center m-4'><strong>View Employee Details</strong></h3>
    <div className=" row container mt-1 p-5">
      <div className="col-8">

      <MDBCard className="shadow">
      <MDBCardBody>
        <MDBCardTitle className='text-center'>Employee Card</MDBCardTitle>
        <MDBCardText>
      {  <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem  aria-current='true' className='px-3'>
       Employee Id :{employeeData.id}
      </MDBListGroupItem>
      <MDBListGroupItem  className='px-3'>
        Name:{employeeData.name}
      </MDBListGroupItem>
      <MDBListGroupItem  className='px-3'>
        Age :{employeeData.age}
      </MDBListGroupItem>
      <MDBListGroupItem  className='px-3'>
        Designation : {employeeData.designation}
      </MDBListGroupItem>
      <MDBListGroupItem  className='px-3'>
      {employeeData.salary}
      </MDBListGroupItem>
    </MDBListGroup>
}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

      </div>

      <div className="col-4">
      <img width={'500px'} src="https://cdn.dribbble.com/users/129972/screenshots/3964116/75_smile.gif" alt="" />

      </div>
<div className='text-center'>
<Link to={'/'}>
<MDBBtn className='m-3 p-3'>Back To Home</MDBBtn>

</Link>
</div>

    </div>
    </div>
  )
}

export default View