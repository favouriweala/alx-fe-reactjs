import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(
    state => state.generateRecommendations
  );

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} className="border p-2 mb-2 rounded">
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
