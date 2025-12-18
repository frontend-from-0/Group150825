const recipes = [
  { title: 'Biriyani', ingredients: ['Rice', 'Onion', 'Salt', 'Meat'], time: 40 },
  { title: 'Omlet', ingredients: ['Egg', 'Cheese', 'Salt', 'Milk'], time: 10 },
];
function displayAllRecipes() {
  console.log('------------------');
  console.log("My Recipe Book");
  
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    console.log(`Recipe: ${recipe.title}`);
    console.log(`Time: ${recipe.time} mins`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log('------------------');
  }
}
function addRecipe(title, ingredients, time) {
  console.log('------------------');
  console.log(`Adding a recipe with title ${title}...`);
  const newRecipe = { title, ingredients, time };
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].title.toLowerCase() === title.toLowerCase()) {
      console.warn(`The recipe with title "${title}" already exists.`);
      return; 
    }
  }
  recipes.push(newRecipe);
  console.log('Recipe added successfully.');
}
function findRecipeByIngredient(ingredientName) {
  console.log('------------------');
  console.log(`Searching for recipes with: ${ingredientName}`);
  let foundCount = 0;
  for (let i = 0; i < recipes.length; i++) {
    const currentRecipe = recipes[i];
    const ingredientsList = currentRecipe.ingredients;
    for (let j = 0; j < ingredientsList.length; j++) {
      if (ingredientsList[j].toLowerCase() === ingredientName.toLowerCase()) {
        console.log(`- Found in: ${currentRecipe.title}`);
        foundCount++;
        break;
      }
    }
  }
  if (foundCount === 0) {
    console.log(`No recipes found with the ingredient: ${ingredientName}`);
  }
}
function deleteRecipe(title) {
  console.log('------------------');
  let found = false;
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].title.toLowerCase() === title.toLowerCase()) {
      recipes.splice(i, 1);
      console.log(`Recipe "${title}" has been removed.`);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log(`Recipe "${title}" not found.`);
  }
}

addRecipe('Milkshake', ['Milk', 'Banana', 'Honey'], 15);
displayAllRecipes();
findRecipeByIngredient('Egg');
deleteRecipe('Omlet');
displayAllRecipes();