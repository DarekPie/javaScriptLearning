import * as model from './model.js';
import recipeView from './views/recipeView.js'; 
import searchView from './views/searchView.js'; 
import paginationView from './views/paginationView.js'; 

import 'core-js/stable';
import 'regenerator-runtime/runtime.js'
import {async} from 'regenerator-runtime';
import resultsView from './views/resultsView.js';
// import searchView from './views/searchView.js';


// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2


if(module.hot){
  module.hot.accept();
}
///////////////////////////////////////
const controlRecipes = async function(){
  try{
    const id = window.location.hash.slice(1);
    console.log(id);
    
    if(!id) return;
    // renderSpinner(recipeContainer);
    recipeView.renderSpinner();

    //0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());     //selected is selected :)

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
      

      // 3 Render results
      // console.log(model.state.search.results);
      //resultsView.render(model.state.search.results);     // PAMIETAJ O MODELU!!!! PRZEZ TO NIE DZIALALO!
      resultsView.render(model.getSearchResultsPage(3));


      // 4. Render initial pagination buttons
      paginationView.render(model.state.search);
      console.log(paginationView);

    }catch(err){
      console.log(err);
    }
  }
  
  // controlSarchResults();
  const controlPagination = function(goToPage) {
    // 1 Render NEW results
      // console.log(model.state.search.results);
      //resultsView.render(model.state.search.results);     // PAMIETAJ O MODELU!!!! PRZEZ TO NIE DZIALALO!
      resultsView.render(model.getSearchResultsPage(goToPage));


      // 2. Render NEW initial pagination buttons
      paginationView.render(model.state.search);
      console.log(paginationView);
  }
  

  //starting with updating servings
const controlServings = function(newServgins){
  //Update the recipe servings (in state)
  model.updateServings(newServgins);

  //Update the recipe view
  // Rendering recipe
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);

}


  const init = function(){
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    searchView.addHandlerSearch(controlSarchResults);
    paginationView.addHandlerClick(controlPagination)
    // controlServings();
  }
  init();


