import axios from 'axios';

const API_URL = 'http://localhost:8000'; 
const CSIRT_URL = `${API_URL}/csirts/`;

export const fetchUsers = async () => {
  try {
    const response = await axios.get(CSIRT_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(CSIRT_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const url = `${CSIRT_URL}${userId}/`; 
    const response = await axios.put(url, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const url = `${CSIRT_URL}${userId}/`; 
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
