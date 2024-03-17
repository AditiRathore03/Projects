const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const path = require("path");
const hbs=require("hbs");
const Signup = require("./schema");
let random ="";
let Userdata="";


// const mongodb = require("mongoose");
app.use(express.json());
const tempelatePath=path.join(__dirname,'../frontend')
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.render("home")
})

app.post("/signup",async (req,res)=>{

   random = JSON.stringify(Math.floor(1000 + Math.random() * 9000));

     Userdata={
        Email: req.body.email,
        Otp: random
        
    }
    console.log(Userdata)

    await Signup.insertMany([Userdata])
//    res.render("info");

   const transporter = nodemailer.createTransport({
    service: 'gmail',
    
    auth: {
        user: 'aditirathore9555@gmail.com',
        pass: 'nazz dyhq uqpr ayjz'
    }
});

const mailOptions = {
    from: 'aditirathore9555@gmail.com',
    to: ` ${Userdata.Email}`,
    subject: 'This is your OTP ',
    text: `Your OTP is: ${Userdata.Otp}`
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ success: false, message: 'Failed to send OTP.' });
    } else {

        console.log('Email sent:', info.response);
        // res.json({ success: true, message: 'OTP sent successfully.' });
        res.render("info");
    }
});    
});

app.post("/data_verify",async (req,res)=>{
    const Otp2 = req.body.otp;
    if(Userdata.Otp===Otp2){
       res.send("Done")
    }
    else{
       res.send("Not found")
    }
})

app.listen(9000,()=>{
    console.log("port connected");
})