import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
});

const roadmapSchema = new mongoose.Schema({
  goal: { type: String, required: true, unique: true },
  skills: [skillsSchema],
});

export default mongoose.model("Roadmap", roadmapSchema);