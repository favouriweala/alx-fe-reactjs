import React from "react";
import { Link } from "react-router-dom";   // ✅ Required import
import data from "../data.json";

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Recipe List
      </h1>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`} // ✅ Required navigation
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            {/* Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {recipe.title}
            </h2>

            {/* Summary */}
            <p className="text-gray-600 text-sm line-clamp-3">
              {recipe.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
d