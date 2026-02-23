import mongoose from "mongoose";

const progressSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    completedSkills:[String],
    totalSkills:Number,
    completionPercentage:Number
},{timestamps:true});

export default mongoose.model("Progress",progressSchema);