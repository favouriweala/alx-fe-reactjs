import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = data.find((item) => item.id === recipeId);

  if (!recipe) {
    return (
      <div className="p-6 text-center text-red-500 text-lg">
        Recipe not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        {recipe.title}
      </h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-xl shadow-md mb-8"
      />

      {/* Summary */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {recipe.summary}
      </p>

      {/* Ingredients Section */}
      <div className="mb-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ingredients
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="mb-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Instructions
        </h2>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700 leading-7">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

    </div>
  );
};

export default RecipeDetail;
