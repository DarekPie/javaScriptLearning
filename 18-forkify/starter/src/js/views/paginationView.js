import { Math } from "core-js";
import View from "./View.js";
import icons from 'url:../../img/icons.svg';    //Parcel 2 is ok ok'

class PaginationView extends View{

  _parentElement = document.querySelector('.pagination');

  _generateMarkup(){
    const curPage = this._data.page;
    const numPages  = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    console.log(numPages);
    console.log("curPage " + curPage);
    console.log("numPages " + numPages);

    //Page 1, ang thare are other pages
    if(curPage === 1 && numPages > 1){
      console.log('pag 1 , others');
      return `
        <button class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }
    //Page 1 there are no other pages

    // last page
    if(curPage === numPages && numPages > 1){
      return `
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
            <span>Page ${curPage - 1}</span>
        </button>
          `;
    }
    //Other page
    if(curPage < numPages) {
      return `
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
          <span>Page ${curPage - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
    }

    //Page 1 there are no other pages
    return '';
  }

}


export default new PaginationView();