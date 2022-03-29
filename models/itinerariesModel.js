const mongoose = require ("mongoose")

const itinerarySchema = new mongoose.Schema({
    city:{type: String, required: true},
    title: {type: String, required: true},
    userImg: {type: String, required: true},
    userName: {type: String, required: true},
    likes: {type:Array},
    hours: {type: Number, required: true},
    price: {type: Number, required: true},
    hashtags: {type: Array, required: true},
    activities: {type:Array,required: true},
   
    comments: [{
        comment:{type:String}, 
        userID:{ type: mongoose.Schema.ObjectId, ref: "users"}}],
    cityID:{type: mongoose.Schema.ObjectId, ref: "ciudades"}
    
    
})
const Itinerary = mongoose.model("itinerarios", itinerarySchema)
module.exports = Itinerary