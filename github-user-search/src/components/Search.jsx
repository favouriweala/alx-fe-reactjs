// src/components/Search.jsx
import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build GitHub search query
    let query = username;
    if (location) query += "+location:" + location;
    if (minRepos) query += "+repos:>" + minRepos;

    try {
      setLoading(true);
      setError(false);
      setSearchResults([]);

      const results = await fetchUserData(query);

      // GitHub returns: { items: [] }
      setSearchResults(results.items);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">GitHub User Search</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 rounded-md outline-none focus:ring focus:ring-blue-300"
        />

        <input
          type="text"
          placeholder="Enter location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-3 rounded-md outline-none focus:ring focus:ring-blue-300"
        />

        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-3 rounded-md outline-none focus:ring focus:ring-blue-300"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-500">Loading...</p>}

        {/* ALX requires EXACTLY this message */}
        {error && <p className="text-red-500">Looks like we cant find the user</p>}

        {searchResults.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {searchResults.map((user) => (
              <div
                key={user.id}
                className="border p-4 rounded-md flex flex-col items-center"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full mb-2"
                />
                <p className="font-bold">{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
