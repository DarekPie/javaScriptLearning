import * as model from './model.js';
import recipeView from './views/recipeView.js'; 

import 'core-js/stable';
const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function(){
  try{
    const id = window.location.hash.slice(1);
    console.log(id);
    
    if(!id) return;
    // renderSpinner(recipeContainer);
    recipeView.renderSpinner();

    // 1. Loading recipe
    await model.loadRecipe(id);
    

    //2. Rendering recipe
    recipeView.render(model.state.recipe);
 
  }catch(err){
    console.log(err);
  }
};
// controlRecipes();

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
  // zamiast tego mozna napisac tak:

  const init = function(){
    recipeView.addHandlerRender(controlRecipes);
  }
  init();


