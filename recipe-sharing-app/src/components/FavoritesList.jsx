import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  // Map favorite IDs to recipe objects
  const favorites = useRecipeStore(state =>
    state.favorites
      .map(id => state.recipes.find(recipe => recipe.id === id))
      .filter(Boolean) // remove any undefined
  );

  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id} className="border p-2 mb-2 rounded">
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>
            Remove Favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
