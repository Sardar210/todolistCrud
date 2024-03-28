import React, { useEffect, useState } from "react";
  import { useParams, useNavigate } from "react-router-dom";
  import ApiService from "./Services";
  import Navbar from "./Navbar";
  import {
    MDBContainer
  } from "mdb-react-ui-kit";

function EditList() {

  const [userForm, setUserForm] = useState({
    name: "",
    day: "",
    work: "",
  });
  
  let params = useParams();
  let navigate = useNavigate();

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value
      
    }));

    console.log(userForm);
    
  };

  const onUpdate = async (e) => {
    e.preventDefault();
    debugger
    const result = await ApiService.updateWorkListById( params.id, {
        name: userForm.name,
        day: userForm.day,
        work: userForm.work,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/datalist");  
      })
      console.log('Data updated Successfully', result);
  };

  useEffect(() => {
    
    const getData = ApiService.getWorkListById(params.id)
      .then((res) => {
        setUserForm({
          name: res.name,
          day: res.day,
          work: res.work,
        })
        console.log('Data get succesfully', getData);
      });
  }, [params.id]);

  return (
    <div>
      <Navbar/>  
       <h2 className="text-center mt-3 mb-3"> User Update Form </h2>
      <MDBContainer className="d-flex flex-column w-50">
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Day</label>
            <input
              type="text"
              className="form-control"
              name="day"
              id="day"
              value={userForm.day}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Work</label>
            <input
              type="text"
              className="form-control"
              name="work"
              id="work"
              value={userForm.work}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
      </MDBContainer>
    </div>
  );
}

export default EditList;