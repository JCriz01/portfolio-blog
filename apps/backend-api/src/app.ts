import express from "express";
import cookieParser from "cookie-parser";
import postsRouter from "./routes/posts";
import userRouter from "./routes/user";
//import bcrypt from "bcryptjs";
import passport from "./utils/passport";

/*
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const bcrypt = require("bcryptjs");
const passport = require("./utils/passport");
*/

const app = express();

//adding passport js JWT strategy & local strategy
const session = require("express-session");

require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//passport js
app.use(passport.session());

app.use("/api/v1/", postsRouter);
app.use("/api/v1/", userRouter);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
