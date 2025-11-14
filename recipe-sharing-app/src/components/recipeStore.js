import { create } from 'zustand';

import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));


export default useRecipeStore;
