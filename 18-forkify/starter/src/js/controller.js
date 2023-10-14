import * as model from './model.js';
import recipeView from './views/recipeView.js'; 
import searchView from './views/searchView.js'; 

import 'core-js/stable';
import 'regenerator-runtime/runtime.js'
import {async} from 'regenerator-runtime';
import resultsView from './views/resultsView.js';
// import searchView from './views/searchView.js';


// const recipeContainer = document.querySelector('.recipe');

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
    // console.log(err);
    recipeView.renderError();
  }
};
// controlRecipes();

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
  // zamiast tego mozna napisac tak:

  const controlSarchResults = async function(){
    try{

      resultsView.renderSpinner();
      // 1 Get search query
      const query = searchView.getQuery();
      console.log(query);
      if(!query) return;


      // 2 Load search  results
      await model.loadSearchResults(query);

      // Render results
      console.log(model.state.search.results);
      resultsView.render(model.state.search.results);     // PAMIETAJ O MODELU!!!! PRZEZ TO NIE DZIALALO!
    }catch(err){
      console.log(err);
    }
  }
  
  // controlSarchResults();
  
  const init = function(){
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSarchResults)
  }
  init();


