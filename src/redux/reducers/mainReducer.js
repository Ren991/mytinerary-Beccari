import { combineReducers } from "redux";

import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itinerariesReducer";
import userReducer from "./userReducer"
/* import itinerariesReducer from './itinerariesReducer' */

const mainReducer = combineReducers({
  citiesR: citiesReducer,
  itinerarieR: itineraryReducer,
  userR:userReducer
});

export default mainReducer;
