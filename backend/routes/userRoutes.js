// routes/userRoutes.js
import express from "express";
import { updateGoal } from "../controllers/userController.js";

const router = express.Router();

// PUT /api/user/goal
// GET all roadmaps
router.put("/goal", updateGoal);

export default router;