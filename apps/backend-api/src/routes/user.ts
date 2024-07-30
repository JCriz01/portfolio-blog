const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// POST /api/v1/users
router.post("/users", usersController.create_user);

export default router;
