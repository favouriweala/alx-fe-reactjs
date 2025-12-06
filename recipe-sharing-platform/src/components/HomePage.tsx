import React, { useState, useEffect } from 'react';
import data from '../data.json';

type Recipe = {
  id: number;
  title: string;
  summary: string;
  image: string;
};

const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
        {recipes.map((item) => (
          <div
            key={item.id}
            className="bg-white w-full max-w-sm rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
