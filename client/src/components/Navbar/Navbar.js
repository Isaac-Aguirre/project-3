import React, {useContext} from 'react';
import userContext from '../../utils/userContext';

export default function({setPage}){

  const {user}= useContext(userContext)
  return(
    // Navbar Name
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Hollar</a>
      <button className="navbar-toggler"
              type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" onClick={()=>{setPage('howl')}} href="/home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>{setPage('news')}} href="#">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link "  role="button" aria-haspopup="true" aria-expanded="false">
              Welcome to Hollar {user? user.username : ''}!
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}
