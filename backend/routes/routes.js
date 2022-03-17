const Router = require("express").Router();
const validator = require('../config/validator')


const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers= require("../controllers/itinerariesController")
const usersControllers=require("../controllers/usersControllers")
const passport = require('../config/passport')

const { getCities,uploadCitie,deleteCitie,modifiedCitie,getCitieById } = citiesControllers;
const {getAllItineraries,getOneItinerary,uploadItinerary,deleteItinerary,modifyItinerary,}=itinerariesControllers
const {signUpUsers,signInUser,signOutUser,verifyEmail,verificarToken}=usersControllers

Router.route("/allcities").get(getCities).post(uploadCitie);
Router.route("/allcities/:id").delete(deleteCitie).put(modifiedCitie).get(getCitieById)

Router.route("/allItineraries").get(getAllItineraries).post(uploadItinerary);
Router.route("/allItineraries/:id").get(getOneItinerary).delete(deleteItinerary).put(modifyItinerary)//.get(getItinerarieByIdCity)

Router.route('/auth/signUp')
.post(validator,signUpUsers)


Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)
Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString') //RECIBE EL LINK DE USUARIO
.get(verifyEmail) //LLAMA A FUNCION DE VERIFICACIION


module.exports = Router;
