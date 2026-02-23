import express from "express";
import { getRoadmapByGoal,getAllRoadmaps } from "../controllers/roadmapController.js";

const router = express.Router();

router.get("/", getAllRoadmaps);

router.get("/:goal", getRoadmapByGoal);

export default router;