const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rathoreaditi600:ZGisjk4T4u22mHyF@cluster0.lkpdjj5.mongodb.net/?retryWrites=true&w=majority")

.then(()=>{
    console.log("mongodb connected successfully");
})

.catch((error) => {
    console.error("Failed to connect ", error);
});


const OtpVerification  = new mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Otp:{
        type:Number,
        required:true
    }
   
})

const Signup = new mongoose.model("Signup_data" , OtpVerification);
module.exports = Signup;


