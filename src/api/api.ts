import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Backend URL'inizi burada belirtin

export const login = async (username: string, password: string) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

export const getActivities = async (token: string) => {
  return axios.get(`${API_URL}/activities`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
