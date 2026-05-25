
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const userroutes = require("./routes/userroutes");
const foodroutes = require("./routes/foodroutes");

dotenv.config();

const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public folder

app.use(express.static(path.join(__dirname, "public")));

// mongodb connection

mongoose.connect(process.env.mongodburl)
.then(() => {
  console.log("mongodb connected successfully");
})
.catch((error) => {
  console.log(error);
});

// routes

app.use("/user", userroutes);
app.use("/food", foodroutes);

// pages

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/donate", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "donate.html"));
});

app.get("/foods", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "foods.html"));
});

// server

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});