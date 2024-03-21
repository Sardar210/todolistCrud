import axios from 'axios';
// productService.js

const baseUrl = 'http://localhost:1001';

const ApiService = {

    async postWorkList (data) { 
        try {
          const response = await axios.post(`${baseUrl}/workList`, data);
          return response.data;
        } catch (error) {
          throw new Error(`Error posting data: ${error.message}`);
        }
      },
   

  getWorkList: async () => {
    try {
        
      const response = await fetch(`${baseUrl}/workList`);
      if (!response.ok) {
        throw new Error('Failed to fetch work list');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching work list:', error.message);
      throw error;
    }
  },

  deleteWorkList: async (id) => {
    try {
  
      const response =await axios.delete(`${baseUrl}/workList/${id}`)
      if (response.ok) {
        console.log('work list Deleted Successfull');
      } else {
          console.error('Error Deleting worklist')
      }
    } catch (error) {
      console.error('Error deleting work list:');
    }
  },

  getWorkListById: async (id) => {
    try {
    
      const response = await axios.get(`${baseUrl}/workList/${id}`)
      if (response.ok) {
        console.log('work list Updated Successfull');
      } 
      
      const dataById = response.data;
      return dataById;
    } catch (error) {
      console.error('Error updating work list:');
    }
  },

  updateWorkListById: async (id , data) => {
    try {
    
      const response = await axios.put(`${baseUrl}/workList/${id}`, data)
      if (response.ok) {
        console.log('work list Updated Successfull');
      } 
      
      const dataById = response.data;
      return dataById;
    } catch (error) {
      console.error('Error updating work list:');
    }
  } 
};



export default ApiService;
