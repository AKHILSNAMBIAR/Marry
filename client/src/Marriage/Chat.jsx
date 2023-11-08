import React from 'react'
import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"
import axios from "axios"
const Chat = () => {
    let[content,setcontent]=useState([])
    let[content1,setcontent1]=useState([])
   let obj=useParams()
   let ect=useParams()
   console.log(obj)
    // useEffect(()=>{
    //     axios.get(`http://localhost:5000/chat/${obj._id}`)
    //     .then((response)=>{setcontent(response.data)})
    //     .catch(()=>{console.log("error2")})
       
    // },[])
    useEffect(()=>{
      axios.get(`http://localhost:5000/pro/${ect._id}`)
      .then((response)=>{setcontent1(response.data)})
      .catch(()=>{console.log("error2")})
     
  },[])
  return (
    <div>
        {/* {content1.map((x)=>{
                return(
                    <div>
                    <table>
                       <tr>
                        <td>Name:</td>
                        <td>{x.name}</td>
                       </tr>
                    </table>
            
             </div>
           )
            
         })} */}
         <h1>{content1.name}</h1>
    </div>
  )
}
export default Chat