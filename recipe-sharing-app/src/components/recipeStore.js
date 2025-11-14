import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // All recipes in the app
  recipes: [],

  // Favorite recipe IDs
  favorites: [],

  // Recommendations based on favorites
  recommendations: [],

  // Search term for filtering recipes
  searchTerm: '',

  // Action: Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action: Update an existing recipe by ID
  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      ),
    })),

  // Action: Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  // Action: Set the current search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Derived state: Get recipes matching the search term
  getFilteredRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;
    return recipes.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  // Action: Add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),

  // Action: Remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action: Generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      // For simplicity, recommend random recipes that are not already in favorites
      const recommended = state.recipes.filter(
        (r) => !state.favorites.includes(r.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
