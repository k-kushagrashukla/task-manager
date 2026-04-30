import express from "express";
import Project from "../models/Project.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const project = await Project.create(req.body)
  res.json(project)
});

router.get("/", protect, async (req, res) => {
  const projects = await Project.find().populate("members")
  res.json(projects)
});

export default router;