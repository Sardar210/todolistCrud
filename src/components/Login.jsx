import React from "react";
import { useState } from "react";
import DataList from "./DataList";
import {Link} from "react-router-dom"
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function LogIn() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    // Hardcoded username and password for demonstration
    const username = "admin";
    const password = "password";
    event.preventDefault();
    if (loginData.username === username && loginData.password === password) {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  if (loggedIn) {
    return (
      <div className="position-relative">
        <DataList />
        <br/>
        <button
          type="button"
          className="btn btn-outline-dark 
                position-absolute bottom-0 start-50 translate-middle-x"
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <>
      {/* <LogIn logOutFunction = {handleLogout}/> */}
      <h2 className="text-center mt-3 mb-3"> Sign In </h2>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput
          wrapperClass="mb-4"
          name="username"
          value={loginData.username}
          onChange={handleInputChange}
          label="Email address"
          id="form1"
          type="email"
        />
        <MDBInput
          wrapperClass="mb-4"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          label="Password"
          id="form2"
          type="password"
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>

        <button className="mb-4 btn btn-primary" onClick={handleLogin}>
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <Link to ="./signup"> Register </Link>
          </p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          >
            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </>
  );
}

export default LogIn;
