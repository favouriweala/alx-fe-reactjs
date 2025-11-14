import useRecipeStore from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      onClick={() => {
        deleteRecipe(recipeId);
        alert("Recipe deleted!");
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
