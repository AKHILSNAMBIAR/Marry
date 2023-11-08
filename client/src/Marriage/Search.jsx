import React from 'react'
import{Outlet}  from 'react-router-dom'
const Search = () => {
  return (
    <div>
      <label htmlFor="">Choose age range</label><br />
      <select >
        <option value="25">below 25</option>
        <option value="2530">above 25 and below 30</option>
        <option value="30">above 20</option>
      </select><br />
      <hr />
      <label htmlFor="">Choose religion</label><br />
      <select >
        <option value="chri">Christian</option>
        <option value="hin">Hindu</option>
        <option value="jai">Jain</option>
        <option value="muslim">Muslim</option>
      </select><br />
      <hr />
      <label htmlFor="">Choose location</label><br />
      <select >
        <option value="ahm">Ahmedhabadh</option>
        <option value="bang">Bangalore</option>
        <option value="koc">Kochi</option>
      </select><br />
      <button>Apply</button>
    </div>
  )
}

export default Search