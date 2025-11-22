import axios from "axios";

const API_URL = "https://api.github.com";

const fetchUserData = async (query) => {
  const url = `https://api.github.com/search/users?q=${query}`;

  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};

export default fetchUserData;
