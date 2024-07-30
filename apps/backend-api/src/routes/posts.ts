import express from "express";
const router = express.Router();
const postsController = require("../controllers/postsController");

// GET /api/v1/posts
router.get("/posts", postsController.all_posts);

// POST /api/v1/posts
router.post("/posts", postsController.create_post);
export default router;
