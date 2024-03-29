import icons from 'url:../../img/icons.svg';    //Parcel 2 is ok ok

export default class View {
  _data;

  render(data ,render = true){

    // if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError(); // nie ma sensu bo warunke zawsze prawdziwy


    this._data = data;
    const markup = this._generateMarkup();
    if(!render) {
      return markup;
    }
    // recipeContainer.innerHTML = '';
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data){
    if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);    //virtual DOM object
    const newElements = newDOM.querySelectorAll('*');
    const curElements = this._parentElement.querySelectorAll('*');

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl), newEl);

      //Updates changed TEXT
      if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== ''){
        // console.log('***', newEl.firstChild.nodeValue.trim());
        curEl.textContent = newEl.textContent
      }
      
      //Updates changed ATRIBUTES
      if(!newEl.isEqualNode(curEl)){
        // console.log(newEl.attributes);
        // console.log();
        Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
      }

    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  };

  renderSpinner() {
    const markup =`
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
          `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderError(message = this._errorMessage){
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}_icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div> -->
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message){
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}_icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div> -->
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

}