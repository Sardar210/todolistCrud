import React from 'react'
import {MDBContainer} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
     <h3 className='text-center mt-3 mb-3'>Sign Up</h3>
    <MDBContainer className="d-flex flex-column w-50">
    <form>
    <div className="mb-3">
      <label>First name</label>
      <input
        type="text"
        className="form-control"
        placeholder="First name"
      />
    </div>
    <div className="mb-3">
      <label>Last name</label>
      <input type="text" className="form-control" placeholder="Last name" />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </div>
    <p className="forgot-password text-right text-center">
      Already registered <Link to ={"/"}>Sign in</Link>
    </p>
  </form>
  </MDBContainer>
  </div>
  )
}

export default Signup;