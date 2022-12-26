import React from 'react'
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
  return (
      <div >
          <h1>Hello Homepage</h1>
          <button onClick={() => setLoginUser({})} >Logout</button>
      </div>
  )
}

export default Homepage