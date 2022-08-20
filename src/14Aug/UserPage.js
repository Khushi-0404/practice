
import { useState , useEffect } from "react"
import React from "react";
import './Product.css'
const UserPage = (props) =>{
    const [ product ,setProduct] =useState([])
    const [ search ,setSearch ] =useState('')
    const [ result ,setResult]=useState([])
    
    useEffect(()=>{
    console.log("inside use effect")
     setProduct(props.data)
    },[props.data])

    
     const handleChange=(event)=>{
      console.log(event.target.value)
        setSearch(event.target.value)
    }
    const handleSearch=(event)=>{
        event.preventDefault()
        let temp=[...product]
        let data=temp.filter((item)=>item.Title===search)
        setResult(data) 
    }

      
        return(
            <div className="Body">
                <form>
                    <h1 className="Welcome">Welcome User!!</h1>
                    <h3 className="Text">You can search any item here..</h3>
                    <input className="search" type='text' placeholder="enter product name" onChange={(e)=>handleChange(e)}></input>
                    <button  onClick={(e)=>handleSearch(e)}>Search</button>
                </form>
                <div className="products">
                {
                    result.map((item)=>(
                        <div className="Container">
                            <h2 className="title ">Product:{item.Title}</h2>
                            <img src={`${item.Image}`} className="Image" alt="img"/>
                            <p className="price">Price:{item.price}</p>
                            <button className="btn1">Add to Cart</button>
                            <button className='btn'>Buy</button>

                           
                        </div>
                        
                    ))
                    
                }</div>
                
            </div>
        )
    }


export default UserPage