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
            price: (Math.random() * (10 - 1) + 1).toFixed(2),
          })
        );
        const totalCost = ingredientsWithPrices.reduce(
          (acc: number, item: { price: string; }) => acc + parseFloat(item.price),
          0
        );
        return { ...recipe, ingredientsWithPrices, totalCost };
      });
      setRecipes(recipesWithPrices);
    } catch (error) {
      console.error("Error fetching recipes or pricing data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleConvertToNaira = (totalCost: number) => {
    const totalInNaira = (totalCost * 1468.9).toFixed(2);
    alert(`Total Cost in Naira: ₦${totalInNaira}`);
  };

  return (
    <div className="flex flex-col items-center bg-[#800020] p-4 min-h-screen">
      <form onSubmit={handleSearch} className="mb-4 w-full max-w-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
          className="p-2 rounded-[25px] bg-transparent border-solid border-2 border-black-500 w-full"
        />
        <button
          type="submit"
          className="p-2 bg-white rounded-md mt-2 w-full md:w-auto"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {recipes.map((recipe) => (
          <div
            key={recipe.recipe.uri}
            className="text-center text-white p-4 bg-[#6b001a] rounded-lg"
          >
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
              {recipe.ingredientsWithPrices.map((ingredient: { ingredient: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode>; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode>; }, index: React.Key) => (
                <li key={index}>
                  {ingredient.ingredient} - ${ingredient.price}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-bold">
              Total Cost: ${recipe.totalCost.toFixed(2)}
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleConvertToNaira(recipe.totalCost)}
            >
              Convert to Naira
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
