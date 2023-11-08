import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet,useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
const Profile = () => {
    let[content,setcontent]=useState([])
    let obj=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5000/profile/${obj._id}`)
        .then((response)=>{setcontent(response.data)
            console.log(response.data)})//response from server is meant by response
        .catch(()=>{console.log("error");})
    },[])
  return (
    <div>
        <button><Link to={`/home/${obj._id}/search`}>Filter</Link></button>
         {content.map((x)=>{
                return(
                    <div>
                    <table>
                       <tr>
                        <td>Name:</td>
                        <td>{x.name}</td>
                       </tr>
                       <tr>
                        <td>Age:</td>
                        <td>{x.age}</td>
                       </tr>
                       <tr>
                        <td>Gender:</td>
                        <td>{x.gen}</td>
                       </tr>
                       <tr>
                        <td>Religion :</td>
                        <td>{x.rel}</td>
                       </tr>
                       <tr>
                        <td>Profession :</td>
                        <td>{x.pro}</td>
                       </tr>
                       <tr>
                        <td>Location :</td>
                        <td>{x.loc}</td>
                       </tr>
                       <tr>
                        <td>Interest :</td>
                        <td>{x.inte}</td>
                       </tr>
                       <tr>
                        <td>About :</td>
                        <td>{x.abo}</td>
                       </tr>
                       <tr>
                        <td><button><Link to={`/home/${obj._id}/chat/${x._id}`}>Chat</Link></button></td>
                       </tr>
                      </table>
            
             </div>
           )
            
         })}
         {/* <Outlet></Outlet> */}
    </div>
  )
}

export default Profile