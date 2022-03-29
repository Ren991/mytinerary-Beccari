import { combineReducers } from "redux";

import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itinerariesReducer";
import activityReducer from "./activitiesReducer";
import userReducer from "./userReducer"

/* import itinerariesReducer from './itinerariesReducer' */

const mainReducer = combineReducers({
  citiesR: citiesReducer,
  itinerarieR: itineraryReducer,
  activitieR: activityReducer,
  userR:userReducer
});

export default mainReducer;
