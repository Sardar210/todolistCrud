import {React} from 'react';
import { useState, useEffect } from 'react';
import {MDBContainer, MDBInput} from 'mdb-react-ui-kit';
import ApiService from './Services';
import Navbar from './Navbar';

export default function Getuserdata() {


  const [userData, setUserData] = useState({
   name: '',
   day: '',
   work: '',
  });

  useEffect(() => {

  }, [userData])

  const handleInputChange = (event) => {
    const {name, value} = event.target;
     setUserData({...userData, [name]: value});
  }

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const result = await ApiService.postWorkList(userData);
      console.log('Data Posted Done.', result);
      alert(`Data added succesfully.`)
      setUserData({
        name: '',
        day: '',
        work: ''
      })
     
      

    } catch (error) {
      console.error(`Submit Data ${error.message}`)
    }
  };

  return (
    <>
    <Navbar/>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <h2 className="text-center"> User Data Form </h2>
      <MDBInput
        wrapperClass="mb-4"
        label="Name"
        type="text"
        name="name"
        value={userData.name}
        onChange={handleInputChange}
        placeholder="Enter Name here"
        
      />
       <MDBInput
        wrapperClass="mb-4"
        label="Day"
        type="text"
        name="day"
        value={userData.day}
        onChange={handleInputChange}
        placeholder="Enter Day here"
        
      />
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Work here"
            name="work"
             value={userData.work}
             onChange={handleInputChange}
          ></textarea>
          <p>Work</p>
        </div>
        <div>
          <button className="btn btn-success"  type="submit" onClick={submitData}>
            Submit
          </button>
          {userData._id && (
          <button className="btn btn-primary " type="update">
          Update
          </button>)
}
        </div>
    </MDBContainer>

    </>
  )
}
