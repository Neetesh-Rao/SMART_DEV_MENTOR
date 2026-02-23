import Roadmap  from "../models/Roadmap.js";




export const getAllRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find();
    res.status(200).json(roadmaps);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch roadmaps" });
  }
};

export const getRoadmapByGoal = async(req,res)=>{
    const {goal}=req.params;
    const roadmap=await Roadmap.findOne({goal});
    if(!roadmap){
        return res.status(404).json({ message: "No roadmap found" });
    }
    res.json(roadmap);
};