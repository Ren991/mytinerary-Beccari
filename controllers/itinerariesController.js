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
    const data = await Itinerary.find({ cityID: id }) .populate("comments.userID",{ name:1 , photo:1});
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
  likeDislike:async (req,res) =>{
    const id=req.params.id //LLEGA POR PARAMETRO DESDE AXIOS
    const user = req.user.id //LLEGA POR RESPUESTA DE PASSPORT
  //console.log(id);
  //console.log(user);
   await Itinerary.findOne({_id: id})

    .then((itinerary) =>{
        //console.log(itinerary)
        if(itinerary.likes.includes(user)){
          Itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:user}},{new:true})//PULL QUITA, SACA
           .then((response)=> res.json({success:true, response:response.likes}))
           .catch((error) => console.log(error))
        }else{
           Itinerary.findOneAndUpdate({_id: id}, {$push:{likes:user}},{new:true})//PUSH AGREGA
            .then((response) => res.json({success:true, response:response.likes}))
            .catch((error) => console.log(error))
        }
    })
    .catch((error) => res.json({success:false, response:error}))
},
};
module.exports = itineraryController;
