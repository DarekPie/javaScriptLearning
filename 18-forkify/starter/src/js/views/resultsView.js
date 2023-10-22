import View from "./View.js";
import icons from 'url:../../img/icons.svg';    //Parcel 2 is ok ok'
import previewView from "./previewView.js";

class ResultsView extends View{

  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();