import express from "express";
import { getSkillResources } from "../controllers/skillController.js";

const router = express.Router();

router.get("/:skill", getSkillResources);

export default router;