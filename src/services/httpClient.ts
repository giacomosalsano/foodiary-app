import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://hcnruwnjwa.execute-api.us-east-1.amazonaws.com',
});