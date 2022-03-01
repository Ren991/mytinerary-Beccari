const Router = require("express").Router();
const { Delete } = require("@mui/icons-material");
const citiesControllers = require("../controllers/citiesControllers");
const { getCities,uploadCitie,deleteCitie,modifiedCitie,getCitieById } = citiesControllers;
Router.route("/allcities").get(getCities).post(uploadCitie);
Router.route("/allcities/:id").delete(deleteCitie).put(modifiedCitie).get(getCitieById)
module.exports = Router;
