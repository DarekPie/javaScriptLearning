import View from "./View.js";
import previewView from "./previewView.js";
import icons from 'url:../../img/icons.svg';    //Parcel 2 is ok ok'

class BookmarksView extends View{

  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and boomakr it ;)';
  _message = '';

  addHandlerRender(handler){
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(bookmark => previewView.render(bookmark, false)).join('');
  }
}

export default new BookmarksView();