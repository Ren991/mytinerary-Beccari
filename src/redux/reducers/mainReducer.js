import {combineReducers} from 'redux';

import citiesReducer from './citiesReducer'
import itineraryReducer from './itinerariesReducer';
/* import itinerariesReducer from './itinerariesReducer' */

const mainReducer=combineReducers({

citiesR:citiesReducer,
itinerarieR:itineraryReducer,


})

export default mainReducer