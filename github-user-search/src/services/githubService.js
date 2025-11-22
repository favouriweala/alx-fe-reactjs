import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

const fetchUserData = async (username, location, minRepos) => {
  try {
    // Build query string
    let query = "";
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    // Axios request
    const response = await axios.get(BASE_URL, {
      params: {
        q: query.trim(),
      },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    // Return only the items array
    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error; // Let the component handle the error
  }
};

export default fetchUserData;
