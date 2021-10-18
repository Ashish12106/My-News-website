import React, { Component } from 'react'
import { Link} from "react-router-dom";
export class navbar extends Component {
  render() {
    return (
      <div>
         <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark mb-1">
     <div className="container-fluid" >
      <Link className="navbar-brand my-2" to="/">Daily Buggal News </Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mx-5 mb-lg-0">
        <li className="nav-item mx-2 my-2">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2 my-2">
          <Link className="nav-link active" to="/Entertainment">Entertainment News </Link>
        </li>    
        <li className="nav-item mx-2 my-2">
          <Link className="nav-link active" to="/Sports">Sports News </Link>
        </li>  
        <li className="nav-item mx-2 my-2">
          <Link className="nav-link active" to="/Technology">Tech News </Link>
        </li> 
         <li className="nav-item mx-2 my-2">
          <Link className="nav-link active" to="/Business">Business News </Link>
        </li>  
      </ul>
      
    </div>
  </div>
</nav>
</div>
      </div>
    )
  }
}

export default navbar
