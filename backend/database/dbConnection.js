import mongoose from "mongoose";


export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTORANT"
    }).then(() => {
        console.log("connected to db succesfully!");
    }).catch(err=>{
        console.log("Some error",err);
    });
};