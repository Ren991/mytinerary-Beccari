const Router = require("express").Router();
const validator = require('../config/validator')
//CITIES REQUIRES
const citiesControllers = require("../controllers/citiesControllers");
const { getCities,uploadCitie,deleteCitie,modifiedCitie,getCitieById } = citiesControllers;
//ITINERARIES REQUIRES
const itinerariesControllers= require("../controllers/itinerariesController")
const {getAllItineraries,getOneItinerary,uploadItinerary,deleteItinerary,modifyItinerary,likeDislike}=itinerariesControllers
//USERS REQUIRES
const usersControllers=require("../controllers/usersControllers")
const {signUpUsers,signInUser,signOutUser,verifyEmail,verificarToken}=usersControllers
//COMMENTS REQUIRES
const commentsControllers = require('../controllers/commentsControllers')
const {addComment, modifiComment,deleteComment}= commentsControllers
//ACTIVITIES REQUIRES
const activitiesControllers=require("../controllers/activitiesControllers")
const passport = require('../config/passport')
const {getAllActivities,getActivitiesByItineraryId,uploadActivity,deleteActivity,modifyActivity}=activitiesControllers
/*--------------------------------------------------------------------------------- */ 
//CITIES ROUTES
Router.route("/allcities").get(getCities).post(uploadCitie);
Router.route("/allcities/:id").delete(deleteCitie).put(modifiedCitie).get(getCitieById)
//ITINERARIES ROUTES
Router.route("/allItineraries").get(getAllItineraries).post(uploadItinerary);
Router.route("/allItineraries/:id").get(getOneItinerary).delete(deleteItinerary).put(modifyItinerary)//.get(getItinerarieByIdCity)
Router.route("/like/:id").put(passport.authenticate("jwt", {session: false}),likeDislike)
Router.route('/allItineraries/comment/:id')
.post(passport.authenticate('jwt',{ session: false }),addComment)
.put(passport.authenticate('jwt',{ session: false }),modifiComment)
Router.route('/allItineraries/comment/:id')
.delete(passport.authenticate('jwt',{ session: false }),deleteComment)
//ACTIVITIES ROUTES
Router.route("/allActivities").get(getAllActivities).post(uploadActivity);
Router.route("/allActivities/:id").get(getActivitiesByItineraryId).delete(deleteActivity).put(modifyActivity)
//USERS ROUTES
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
