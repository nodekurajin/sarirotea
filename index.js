const axios = require('axios'); // Install axios library: npm install axios

async function getFoodRecipes(ingredient) {
  // Replace with the actual API URL and your API key
  const API_URL = `https://api.spoonacular.com/recipes/search?apiKey=YOUR_API_KEY&includeIngredients=${ingredient}`;

  try {
    const response = await axios.get(API_URL);
    const recipes = response.data.results.map(recipe => ({
      title: recipe.title,
      source: recipe.sourceUrl,
    }));
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return []; // Handle errors gracefully, like returning an empty list
  }
}

// Example usage
const ingredient = "bread";
getFoodRecipes(ingredient).then(recipes => {
  if (recipes.length > 0) {
    console.log("Recipes using", ingredient, ":");
    recipes.forEach(recipe => console.log(`${recipe.title} - ${recipe.source}`));
  } else {
    console.log("No recipes found using", ingredient);
  }
});
