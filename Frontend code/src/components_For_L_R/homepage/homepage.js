import React from 'react'
import { useHistory } from 'react-router-dom'
import "./homepage.css"

const Homepage = ({ setLoginUser }) => {

  const history = useHistory()
  const handleChange = () => {
    history.push("/EmployeesList")
  }
  
  return (
    <div >
      <h1>Hello Homepage</h1>
      <button onClick={() => handleChange({})}> Employees List </button>
      <button onClick={() => setLoginUser({})} >Logout</button>
    </div>
  )
}

export default Homepage