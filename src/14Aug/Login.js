import React from "react"
import { Link,Navigate } from "react-router-dom"
import {useContext, createContext ,useState} from "react";
import "./style.css"
import ReactSwitch from "react-switch"
import Protected from "./Protected";

export const ThemeContext = createContext({theme:null});
const Login=()=>{
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [isLoggedIn, setisLoggedIn] = useState(null);
    
  const handleChange=(e,key)=>{
        if(key==='username'){
          console.log(username)
            setUsername(e.target.value)
            
        }
        if(key==='password'){
            setPassword(e.target.value)
            console.log(password)
        }
    }
    
  const handleLogin=()=>{
    if(username==='khushi' && password==='khushi'){
      console.log("in true")
      setisLoggedIn(true)
      console.log(isLoggedIn)
    }
    else{
      
      setisLoggedIn(false);
      alert("wrong credentials")
      console.log(isLoggedIn)
        
    }
}


    return(
      
      <div className="loginBody">
        <Protected value={isLoggedIn}></Protected>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            
            <div className="box" id={theme}>
            <div className="input-icons">
                <h3>Login </h3>
            <i className="fa fa-user icon"></i>
            <input className="input-field" type="text" onChange={(e)=>handleChange(e,"username")}/><br></br>
            <i className="fa fa-key icon"></i>
            <input className="input-field" type="text"  onChange={(e)=>handleChange(e,"password")}/>
                  <br></br>
            <a href="Forgot Password">Forgot Password?</a> {"\u00a0\u00a0\u00a0\u00a0"}
            <a href="Create ">Create an account</a>
            <button className="signIn" onClick={handleLogin}>Sign In</button>

            </div>
           </div>

           </ThemeContext.Provider> 
            </div>
       
    )

}
export default Login 