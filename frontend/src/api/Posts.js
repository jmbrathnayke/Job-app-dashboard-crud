// src/api/posts.js
import axios from 'axios';

export const getAllPosts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/jobPosts");
    

    return response.data;
  } catch (error) {
    throw error;
  }
};
// src/api/posts.js

export const getPostById = async (id) => {
  return axios.get(`http://localhost:8080/jobPosts${id}`);
};

export const createPost = async (newPost) => {
  return axios.post(`http://localhost:8080/jobPosts`, newPost);
};

