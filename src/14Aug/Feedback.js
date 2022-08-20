import React from "react"
import './style.css'
const Feedback=()=>{
    return(
        <div className="box">
            <h3>Feedback Form</h3>
            <div className="input-icons">
            <i className="fa fa-user icon"></i>
            <input className="input-field" placeholder="Enter your Username" type="text"/><br></br>
            <i className="fa fa-instagram icon"></i>
            <input className="input-field" placeholder="Enter your Instagram Id" type="text"/><br></br>
            <i className="fa fa-envelope icon"></i>
            <input className="input-field" placeholder="Enter your remarks" type="text"/><br></br>
            <i className="fa fa-youtube icon"></i>
            <input className="input-field" placeholder="Enter your Youtube Id" type="text"/><br></br>
            <i className="fa fa-facebook icon"></i>
            <input className="input-field" placeholder="Enter your Facebook Id" type="text"/><br></br>
            <button className="submit">Submit</button>
            </div>
        </div>
    )
}
export default Feedback