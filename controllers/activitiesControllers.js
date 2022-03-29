const Activity = require("../models/activitiesModel");

const activityController = {
  getAllActivities: async (req, res) => {
    const data = await Activity.find();
    //console.log(data);
    res.json({
      response: data,
    });
  },
  /* getOneActivity: async (req, res) => {
    const id = req.params.id;
    //console.log(id);
    const data = await Activity.find({ itineraryID: id });
    console.log(data);
    res.json({ succes: true, response: data });
  },
 */
  getActivitiesByItineraryId: async (req,res)=>{
  
    try {
      let activities= await Activity.find({
        itineraryID: req.params.id
      })
    res.json({success:true,response:activities})

    }catch (err){
     res.json({success:false,response:err.message})
    }
    
  
  },

  uploadActivity: (req, res) => {
    const activity = new Activity({
      activitieTitle:req.body.activitieTitle,
      activitieImg: req.body.activitieImg,      
      itineraryID:req.body.itineraryID,
      city:req.body.city
    });
    //console.log(activitieImg);
    activity
      .save()
      .then(async (activityGrabado) => {
        const activity = await Activity.findOne({
          _id: activityGrabado._id,
        });
        return res.json({ succes: true, response: activity });
      })
      .catch((error) => {
        return res.json({ success: false, error: error });
      });

    /*  const {city,title,userImg,userName,likes,hours,price,hastags,activities,comments,cityID} = req.body
        new Itinerary({city,title,userImg,userName,likes,hours,price,hastags,activities,comments,cityID}).save()
        .then((respuesta) => res.json({respuesta})) */

    // res.json({respuesta: productos})
  },
  deleteActivity: async (req, res) => {
    const id = req.params.id;
    await Activity.findOneAndDelete({ _id: id }).then((respuesta) =>
      res.json({ respuesta })
    );
  },
  modifyActivity: async (req, res) => {
    const id = req.params.id;
    const activity = req.body;

    await Activity.findOneAndUpdate({ _id: id }, activity).then((respuesta) =>
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
module.exports = activityController;
