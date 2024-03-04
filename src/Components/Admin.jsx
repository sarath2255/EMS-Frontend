
import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import {Link} from "react-router-dom"



function Admin() {

    const base_url ="http://localhost:8000"

    const [admindata,setAdmindata]=useState([])

     const fetchdata=async()=>{
      const result =await axios.get(`${base_url}/get-all-employees`)
      console.log(result.data.employees);
      setAdmindata(result.data.employees)
     }
     console.log(admindata);

     const DeleteEmployee=async(id)=>{
      const result =await axios.delete(`${base_url}/delete-employee/${id}`)
      alert (result.data.message)
      fetchdata()

     }
     

     
    

     useEffect(()=>{
      fetchdata()
     },[])






  


  return (
    <div>
      <h1 className='text-center m-3'>Employee Management System</h1>
      <div className="container">
        <p>
         An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions.</p>
      </div>

     <Link to={'/add'}>
     <a style={{float:'right'}} className='btn btn-primary' href="">Add</a></Link>

      <div className="container">
      <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>

        {admindata.map(item=>(


        <tr>
          <td>
           {item.id}
          </td>

          <td>
            {item.name}
          </td>

          <td>
           {item.age}
          </td>

          <td>
          {item.designation}
          </td>

          <td>
          {item.salary}
          </td>

      <td>
        <div className='d-flex justify-content-evenly'>
          <Link to={`view/${item.id}`}> <i class="fa-solid fa-eye"></i></Link>

         <Link to={`edit/${item.id}`}> <i  className='fa-solid fa-pen text-success'></i></Link>
          <i onClick={()=>DeleteEmployee(item.id)} className='fa-solid fa-trash text-danger'></i>

        </div>
      </td>
        </tr>
        ))
        }
      </MDBTableBody>
    </MDBTable>
      </div>


    </div>
  )
}


export default Admin