// src/services/githubService.js
import axios from "axios";

const fetchUserData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data; // Axios wraps the JSON in data
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error; // Let the component handle the error
  }
};

export default fetchUserData;
