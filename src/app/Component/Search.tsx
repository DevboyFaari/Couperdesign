"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipeData = async (query) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=eac0311b&app_key=e5ea3acc2f316974020d8f02e53af588`
      );
      return response.data.hits;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const recipes = await fetchRecipeData(query);
      const recipesWithPrices = recipes.map((recipe) => {
        const ingredientsWithPrices = recipe.recipe.ingredientLines.map(
          (ingredient) => ({
            ingredient,
            price: (Math.random() * (10 - 1) + 1).toFixed(2), // Generate random price between 1 and 10
          })
        );
        return { ...recipe, ingredientsWithPrices };
      });
      setRecipes(recipesWithPrices);
    } catch (error) {
      console.error("Error fetching recipes or pricing data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#800020] p-4 min-h-screen">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
          className="p-2 rounded-[25px] bg-transparent border-solid border-2 border-black-500 w-[500px]"
        />
        <button type="submit" className="p-2 bg-white rounded-md ml-2">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.recipe.uri} className="text-center text-white">
            <Image
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              width={300}
              height={200}
              className="w-full h-auto rounded-md"
            />
            <p className="mt-2 font-bold">{recipe.recipe.label}</p>
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
            <p>Ingredients:</p>
            <ul className="list-disc list-inside">
              {recipe.ingredientsWithPrices.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.ingredient} - ${ingredient.price}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
