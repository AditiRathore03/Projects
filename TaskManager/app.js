const express = require("express")
const mongoose = require("mongoose")


const app = express()

mongoose.connect("mongodb+srv://rathoreaditi600:Bv9uLxe8TTei7YJ7@cluster0.mxvkh56.mongodb.net/Todo")
.then(()=>{
    console.log("mongodb connected");
})

.catch((error) => {
    console.error("Failed to connect ", error);
});

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine" , "ejs");


app.use(require("./routes/index"))
app.use(require("./routes/todo"))





app.listen(5000,()=>{
    console.log('Server is running on port : 5000')
})