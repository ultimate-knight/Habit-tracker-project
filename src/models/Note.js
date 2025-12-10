// const mongoose=require("mongoose");
import mongoose from "mongoose";


const careerSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },

    content:{
        type:String,
        required:true,
        trim:true
    },

    topic:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true});


const Note = mongoose.models.CareerTracker || mongoose.model("CareerTracker", careerSchema);


export default Note;