import React from 'react'
import {Link} from 'react-router-dom';


export default function Navbar() {
    
  return (
    <>
    <div>
        
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <p className="nav-link">
            <b>React Todo List App</b>
          </p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/getuserdata"} className="nav-link">
                  Create List
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/datalist'} className="nav-link">
                  Todo List
                </Link>
              </li>
              {/* <li>
              <button type="button" className="btn btn-outline-dark 
                position-absolute bottom-0 start-50 translate-middle-x"
                onClick={handleLogout}>Sign Out</button>
             </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}
