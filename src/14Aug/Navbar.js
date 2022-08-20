import React from "react"
import {Link} from "react-router-dom"
import './style.css'
const Navbar=()=>{
    return(
        <div className="nav">
    
      <ul>
        <li><Link className="first" to ="/"></Link>
        </li>
        <li><Link className="second" to="/about">About</Link>
        </li>
      <li><Link  className="third"to ="/Home">Home</Link> 
      </li>
      <li><Link  className="third"to ="/Feedback">Feedback</Link> 
      </li>
      <li><Link className="third" to="/Login">Login</Link></li>
     
      </ul>
      
            <input className="search" type="text"/><i className="fa fa-menu icon"></i>
            
    </div>
    )
}
export default Navbar