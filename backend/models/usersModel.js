const mongoose =  require('mongoose')

const userSchema =  new mongoose.Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:[{type:String, required:true}],
    country:{type:String},
    photo:{type:String, required:true},
    from:{type:Array},
    emailVerificado:{type:Boolean, required:true},//Verificar si ese dato es verdadero o es falso 
    uniqueString:{type:String, required:true},
    
})

const User = mongoose.model('users', userSchema)
module.exports = User