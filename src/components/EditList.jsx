import React, { useEffect, useState } from "react";
  import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

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
  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/students/update-student/" + params.id, {
        name: userForm.name,
        email: userForm.email,
        rollno: userForm.rollno,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/student-list");  
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/get-student/" + params.id)
      .then((res) => {
        setUserForm({
          name: res.data.data.name,
          day: res.data.data.day,
          work: res.data.data.work,
        });
      });
  }, [params.id]);

  return (
    <div>
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
              name="email"
              id="email"
              value={userForm.day}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Work</label>
            <input
              type="text"
              className="form-control"
              name="rollno"
              id="rollno"
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
    </div>
  );
}

export default EditList;