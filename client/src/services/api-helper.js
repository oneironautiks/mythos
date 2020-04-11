const axios = require('axios');

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://.herokuapp.com/' : 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl,
})