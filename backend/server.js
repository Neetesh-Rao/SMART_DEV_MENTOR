import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import skillRoutes from "./routes/skillRoutes.js"; // your router



dotenv.config();
connectDB();

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/user", userRoutes);
app.use("/api/resources", skillRoutes);
app.use("/api/roadmap", roadmapRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port 5000`);
})
