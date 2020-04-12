const axios = require('axios');

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://mythos-api.herokuapp.com/' : 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl,
});

// ====================================
// ============= Auth =================
// ====================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ====================================
// ============= Stories ==============
// ====================================

export const showStories = async () => {
  const res = await api.get('/stories');
  return res.data;
}

export const showOneStory = async (id) => {
  const res = await api.get(`/stories/${id}`);
  return res.data;
}

export const postStory = async (item) => {
  const res = await api.post(`/stories`, { story: item });
  return res.data;
}

export const updateStory = async (item, id) => {
  const res = await api.put(`/stories/${id}`, { story: item });
  return res.data;
}

export const destroyStory = async (id) => {
  const res = await api.delete(`/stories/${id}`);
  return res.data;
}

// ====================================
// ============= Comments =============
// ====================================


export const showStoryComments = async (id) => {
  const res = await api.get(`/stories/${id}/comments`);
  return res.data;
}

export const postStoryComment = async (id, item) => {
  const res = await api.post(`/stories/${id}/comments`, { comment: item });
  return res.data;
}

export const updateStoryComment = async (item, id, commentId) => {
  const res = await api.put(`stories/${id}/comments/${commentId}`, { comment: item });
  return res.data;
}

export const destroyComment = async (id, commentId) => {
  const res = await api.delete(`/stories/${id}/comments/${commentId}`);
  return res.data;
}