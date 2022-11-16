import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URI;

export const client = axios.create({
  baseURL: baseUrl,
});
