import { async } from 'regenerator-runtime';
import { API_URL, KEY, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';

// import { set } from 'core-js/core/dict';   jakis bug wyskakiwal

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function(id){
  try{

    const data = await getJSON(`${API_URL}/${id}`);
    
    // const data = await getJSON(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`);
    // const res = await fetch(`${API_URL}/${id}`);
    // const data = await res.json();
        
    // if(!res.ok) throw new Error(`${data.message} (${res.status})`);
    // console.log(res, data);
    // console.log(data);
  
    const {recipe } = data.data;
    state.recipe ={
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    if(state.bookmarks.some(bookmark => bookmark.id === id ))
      state.recipe.bookmarked = true;
    else
      state.recipe.bookmarked = false;

    // console.log( state.recipe);
  }catch(err){
    // console.error(`${err} !!!!!!!!!!!!!???????????`);
    throw err;
  }

}

export const loadSearchResults = async function(query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}&key=${KEY}`)
    // console.log(`${API_URL}?search=${query}&key=${KEY}`);
    // console.log(data);

   state.search.results = data.data.recipes.map(rec => {
      // console.log("starts state.search.results !!!!!!!!!");
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    // console.log( state.search.results);
    state.search.page = 1;
  }catch(err){
    // console.error(`${err}?????????????????????????????????????!!!!!!!!`);
    throw err;
  }
};

export const getSearchResultsPage = function(page = state.search.page){

  state.search.page = page;
  // console.log("++page " + page);

const start = (page - 1) * state.search.resultsPerPage; //0; 
const end = page * state.search.resultsPerPage;         //9;

  return state.search.results.slice(start, end);
}

export const updateServings = function(newServings){
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings )/ state.recipe.servings;
    // newQt = oldQt * newServgins/oldSercings //  2 * 8 / 4 = 4
  });
//Musimy odświeżyć oryginalna zmienna state.recipe.servings
  state.recipe.servings = newServings;
};

const presistBookmakrs = function(){
  localStorage.setItem('bookMarks', JSON.stringify(state.bookmarks));
}

export const addBookmark = function(recipe) {
  //Add bookmark
  state.bookmarks.push(recipe);

  //Mark current recipe as bookmak
  if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  presistBookmakrs()
};

export const deleteBookmark = function(id){
  //Delte bookmarks
  const index = state.bookmarks.findIndex(el=> el.id === id);
  state.bookmarks.splice(index, 1);

  //Mark current recipe as NOT bookmak
  if(id === state.recipe.id) state.recipe.bookmarked = false;
  presistBookmakrs();
};

const init = function() {
  const storage = localStorage.getItem('bookMarks');
  if(storage) state.bookmarks = JSON.parse(storage);
};

init();
console.log(state.bookmarks);

const clearBookmarks = function(){
  localStorage.clear('bookMarks')
};

clearBookmarks();