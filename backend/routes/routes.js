const Router = require("express").Router();

const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers= require("../controllers/itinerariesController")

const { getCities,uploadCitie,deleteCitie,modifiedCitie,getCitieById } = citiesControllers;
const {getAllItineraries,getOneItinerary,uploadItinerary,deleteItinerary,modifyItinerary}=itinerariesControllers

Router.route("/allcities").get(getCities).post(uploadCitie);
Router.route("/allcities/:id").delete(deleteCitie).put(modifiedCitie).get(getCitieById)

Router.route("/allItineraries").get(getAllItineraries).post(uploadItinerary);
Router.route("/allItineraries/:id").get(getOneItinerary).delete(deleteItinerary).put(modifyItinerary)

module.exports = Router;
