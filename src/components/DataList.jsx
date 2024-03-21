import React from 'react';
import { useEffect, useState } from 'react';
import ApiService from './Services'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';


export default function DataList() {

     const [dataListForm, setDataListForm] = useState([]);

     const deleteWorkList = async (id) => {
      await ApiService.deleteWorkList(id);
      alert (`Item Deleted`);
      fetchWorkList();  
     }

     useEffect(() => {
        fetchWorkList();
     }, []);

     const fetchWorkList = async () => {
      try {
        const workListData = await ApiService.getWorkList();
        setDataListForm(workListData);
      } catch  (error) {
        console.error('Error', error.message);
      }
    };

     useEffect (() => {
     }, [dataListForm])

     return (
      <>
      <Navbar/>   
  <h2 className='text-center mb-3 mt-3'>Record List</h2>
  <table className="table">
    
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Day</th>
            <th scope="col">Work</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {dataListForm.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.day}</td>
                <td>{user.work}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
                <td>
                  <Link
                  
                    className="btn btn-primary btn-sm me-2"
                    to={"/editlist/" + user._id}
                  >
                    Edit
                  </Link>
                  </td>
                  <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteWorkList(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      </>
    );
}
