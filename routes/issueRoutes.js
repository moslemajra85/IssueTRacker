import express from "express";
import {
  getAllIssues,
  createIssue,
  getIssueById,
  updateIssue,
} from "../controllers/issueController.js";

const router = express.Router();

// GET: /api/issues
//
router.get("/", getAllIssues);

// GET: /api/issues/:id respresent  /api/issues/1, /api/issues/2,   /api/issues/3
router.get("/:id", getIssueById);

router.post("/", createIssue);

// Post: /api/issues/:id respresent  /api/issues/1, /api/issues/2,   /api/issues/3
router.put("/:id", updateIssue);
export default router;
