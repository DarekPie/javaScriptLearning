'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(cords, distance, duration) {
    this.cords = cords;
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Runnign extends Workout {
  constructor(cords, distance, duration, cadence) {
    super(cords, distance, duration);
    this.cadence = cadence;

    this.calcPace();
  }

  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(cords, distance, duration, elevation) {
    super(cords, distance, duration);
    this.elevation = elevation;

    this.calcSpeed();
  }

  calcSpeed() {
    //km/h
    this.speed = this.distance / (this.duration / 60);
    return this.peed;
  }
}

const run1 = new Runnign([39, -12], 5.2, 24, 178);
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

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not  get your position');
        }
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

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
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

    // If workout running, create runnig object
    if(type==='running'){
      
      const cadence = +inputCadence.value;
      //Check if data is valid
      // if(!Number.isFinite(distance) || !Number.isFinite(duration) || !Number.isFinite(cadence)){
      //   return alert('Input have to be positive numbers!')
      // }
      if(!validInputs(distance, duration, cadence) ||
        !allPositive(distance,duration,cadence)){
        return alert('Input have to be positive numbers!');
      }
      const workout = new Runnign()
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
    }

    // Add new object to workout array

    //Render workout on map as marker

    //Render workout on list

    //Hide form ad CLear input fields


    // Display marker
    console.log(this.#mapEvent);
    const { lat, lng } = this.#mapEvent.latlng; //This #map !! wazne
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();


      inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
  }
}

const app = new App();
