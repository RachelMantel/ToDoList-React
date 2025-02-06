import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5065"; 


axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('Error in response:', error.response || error.message);  
    return Promise.reject(error); 
  }
);


export default {
  getTasks: async () => {
    try {
      const result = await axios.get(`/tasks`); 
      return result.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  },

  addTask: async (name) => {
    console.log('addTask', name);
    try {
      const result = await axios.post(`/tasks`, { name });
      return result.data;
    } catch (error) {
      console.error("Error adding task:", error);
      throw error;
    }
  },

  setCompleted: async (id, name, isComplete) => {
    console.log('setCompleted', { id, name, isComplete });
    try {
      const result = await axios.put(`/tasks/${id}`, { name, isComplete });
      return result.data;
    } catch (error) {
      console.error("Error updating task completion status:", error);
      throw error;
    }
  },

  deleteTask: async (id) => {
    console.log('deleteTask', id);
    try {
      const result = await axios.delete(`/tasks/${id}`);
      return result.data;
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  }
};


