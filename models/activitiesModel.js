const mongoose = require('mongoose')
const activitiesSchema = new mongoose.Schema({
    activitieTitle:{type:String, required:true},
    
    activitieImg:{type:String, required:true},
    itineraryID:{type: mongoose.Schema.ObjectId, ref: "itinerarios"},
    city:{type:String},
    

})
const Activities = mongoose.model('activities', 
activitiesSchema)
module.exports = Activities