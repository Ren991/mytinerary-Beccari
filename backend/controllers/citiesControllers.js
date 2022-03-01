const Ciudades = require("../models/citiesModel");
const citiesControllers = {
  getCities: async (req, res) => {
    let cities;
    let error = null;
    try {
      cities = await Ciudades.find();
    } catch (err) {
      error = err;
      console.log(error);
    }
    res.json({
      response: error ? "ERROR" : { cities },
      success: error ? false : true,
      error: error,
    });
  },
  uploadCitie: async (req, res) => {
    console.log(req.body);
    const { id, image, name, country, description } = req.body;
    new Ciudades({ id, image, name, country, description })
      .save()
      .then((respuesta) => res.json({ respuesta }));
  },

  deleteCitie: async (req, res) => {
    const id = req.params.id;
    await Ciudades.findOneAndDelete({ _id: id })
    .then((respuesta) =>res.json({respuesta}) )
  },
  modifiedCitie: async (req, res) => {
    const id = req.params.id;
    const city = req.body;

    await Ciudades.findOneAndUpdate({ _id: id }, city)
    .then((respuesta) =>res.json({respuesta}) )
  },
  getCitieById:  async (req, res) => {
    const id = req.params.id;
    await Ciudades.findOne({ _id: id })
    .then((respuesta) =>res.json({respuesta}) )
  },
  //getCitieById // findone
};
module.exports = citiesControllers;
