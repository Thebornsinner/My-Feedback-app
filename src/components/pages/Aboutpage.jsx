import React from "react"
import Cardd from "../shared/Cardd"
import { Link } from "react-router-dom"
function Aboutpage() {
  return (
   <Cardd>
   <div className="about">
    <h1>About Page</h1>
    <p>This is a react app built by Tobs to leave feedback hence it is a feedback ui.</p>
    <p>Version 1.0.0</p>
    <p>
        <Link to="/">Back to Home</Link>
    </p>
   </div>
   </Cardd>
  )
}

export default Aboutpage