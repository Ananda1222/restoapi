const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    fname: { type: String},
    lname: { type: String},
    password: { type: String },
    email:{ type:String, unique : true} , 
    image:{type:String, default:"user.jpg"},

});

// let Admin =new Schema({
//     admin_name :{type: String},
//     admin_email :{type:String , unique : true},
//     admin_id :  {type:Number , unique : true },
//     admin_phone: {type:Number , unique : true},
//     isVerified : {type:Boolean , default : false }
// });
const User = mongoose.model("User",UserSchema);
module.exports= User ; 

// module.exports.Admin=mongoose.model("Admins",Admin);