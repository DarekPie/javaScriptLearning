'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
 

  constructor(cords, distance, duration) {
    this.cords = cords;
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription(){
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${this.date.getMonth()} ${this.date.getDay()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(cords, distance, duration, cadence) {
    super(cords, distance, duration);
    this.cadence = cadence;
    this.type = 'running';
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(cords, distance, duration, elevation) {
    super(cords, distance, duration);
    this.elevation = elevation;
    this.type = 'cycling';
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    //km/h
    this.speed = this.distance / (this.duration / 60);
    return this.peed;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1, cycling1);

///////////////////////////////////////
// Application Architecture

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// let map, mapEvent;

class App {
  #map;
  #mapEvent;
  #workouts =[];

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.
      geolocation.
      getCurrentPosition(
                         this._loadMap.bind(this),
                         function () {alert('Could not  get your position');}
                        );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(
      `https://www.google.pl/maps/@${latitude},${longitude},7z?entry=ttu`
    );

    const cords = [latitude, longitude];

    this.#map = L.map('map').setView(cords, 13);
    // console.log(map);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling click on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {

    //helper function
    const validInputs = (...inputs) => 
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);


    e.preventDefault();
    console.log(this);

    // Get data from form
    const type = inputType.value;     // Cycling i running sa czescia taga value w HTML
    const distance = +inputDistance.value;    // + konwertuje na liczbe
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng; //This #map !! wazne
    let workout;

    // If workout running, create runnig object
    if(type ==='running'){
      
      const cadence = +inputCadence.value;
      //Check if data is valid
      // if(!Number.isFinite(distance) || !Number.isFinite(duration) || !Number.isFinite(cadence)){
      //   return alert('Input have to be positive numbers!')
      // }
      if(!validInputs(distance, duration, cadence) ||
        !allPositive(distance,duration,cadence)){
        return alert('Input have to be positive numbers!');
      }
      workout = new Running([lat, lng], distance, duration, cadence );
    }

    // If Woirkout cycling, create cycling object
    if(type==='cycling'){
      
      const elevation = +inputElevation.value;
      //Check if data is valid
      // if(!Number.isFinite(elevation)) return alert('Input have to be positive numbers!')
      if(!validInputs(distance, duration, elevation) || 
        !allPositive(distance, duration)){
        return alert('Input have to be positive numbers!');
      }
      workout = new Cycling([lat, lng], distance, duration, elevation );
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    //Render workout on map as marker
    console.log("workout");
    console.log(workout);
    this._renderWorkoutMarker(workout);
    
    //Render workout on list
    this._renderWorkout(workout);
    
    //Hide form ad CLear input fields

    // Display marker


      inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
  }

  _renderWorkoutMarker(workout){
    L.marker(workout.cords)
    .addTo(this.#map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`,
      })
    )
    .setPopupContent('workout')
    .openPopup();
  }

  _renderWorkout(workout){

    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>          
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if(workout.type === 'running')
      html += `   
              <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace}</span>
                <span class="workout__unit">min/km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
              </div>
            </li>
      `;

      if(workout.type === 'cycling')
      html += `   
              <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.elevation}</span>
                <span class="workout__unit">spm</span>
              </div>
            </li>
            `;
            // form.insertAdjacentElement('afterend', html);
  }
}

const app = new App();