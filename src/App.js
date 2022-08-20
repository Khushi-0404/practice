import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './14Aug/About'
import Navbar from "./14Aug/Navbar";
import Application from "./14Aug/Application";
import Home from "./14Aug/Home";
import Feedback from './14Aug/Feedback'
import Login from "./14Aug/Login";
import UserPage from "./14Aug/UserPage";
import Items from "./14Aug/Object";
import Protected from "./14Aug/Protected";

function App(props){
    return(
        <div>
            <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path ="/" element={<Application></Application>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path ="/Home" element={<Home></Home>}></Route>
                <Route path ="/Feedback" element={<Feedback></Feedback>}></Route>
                <Route path="/Login" element={<Login></Login>}></Route>
                 <Route path="/user" element={<Protected></Protected>}></Route>
                
            </Routes>
            </BrowserRouter>
        </div>
    )

}
export default App


