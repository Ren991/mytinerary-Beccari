const Itinerary = require("../models/itinerariesModel");

const itineraryController = {
  getAllItineraries: async (req, res) => {
    const data = await Itinerary.find();
    //console.log(data);
    res.json({
      response: data,
    });
  },
  getOneItinerary: async (req, res) => {
    const id = req.params.id;
    //console.log(id);
    const data = await Itinerary.find({ cityID: id });
    //console.log(data);
    res.json({ succes: true, response: data });
  },

  uploadItinerary: (req, res) => {
    const itinerary = new Itinerary({
      city: req.body.city,
      title: req.body.title,
      userImg: req.body.userImg,
      userName: req.body.userName,
      likes: req.body.likes,
      hours: req.body.hours,
      price: req.body.price,
      hastags: req.body.hastags,
      activities: req.body.activities,
      comments: req.body.comments,
      cityID: req.body.cityID,
    });
    itinerary
      .save()
      .then(async (itineraryGrabado) => {
        const itinerary = await Itinerary.findOne({
          _id: itineraryGrabado._id,
        });
        return res.json({ succes: true, response: itinerary });
      })
      .catch((error) => {
        return res.json({ success: false, error: error });
      });

    /*  const {city,title,userImg,userName,likes,hours,price,hastags,activities,comments,cityID} = req.body
        new Itinerary({city,title,userImg,userName,likes,hours,price,hastags,activities,comments,cityID}).save()
        .then((respuesta) => res.json({respuesta})) */

    // res.json({respuesta: productos})
  },
  deleteItinerary: async (req, res) => {
    const id = req.params.id;
    await Itinerary.findOneAndDelete({ _id: id }).then((respuesta) =>
      res.json({ respuesta })
    );
  },
  modifyItinerary: async (req, res) => {
    const id = req.params.id;
    const itinerary = req.body;

    await Itinerary.findOneAndUpdate({ _id: id }, itinerary).then((respuesta) =>
      res.json({ respuesta })
    );
  },
  /* getItinerarieByIdCity: async (req, res) =>{
        try {
            let itinerary
            const id = req.params.id
            try{
                itinerary = await Itinerary.find({cityID:id})
            }catch(error){
                console.log(error)
            }
            res.json({respuesta:itinerary,success:true})

        } catch (error) {
            console.log(error);
        }
    
    } */
};
module.exports = itineraryController;
