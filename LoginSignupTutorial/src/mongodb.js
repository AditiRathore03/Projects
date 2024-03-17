const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://rathoreaditi600:zYoENwJfOhCWc1WM@cluster0.pjlwkpj.mongodb.net/TaskManager")

.then(()=>{
    console.log("mongodb connected");
})

.catch((error) => {
    console.error("Failed to connect ", error);
});

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=new mongoose.model("Collection1", LogInSchema)

module.exports=collection