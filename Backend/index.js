import express from "express";
import mongoose from "mongoose";
import router from "./Router/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

const apikey =
  "mongodb+srv://Mushhoodqazi:Qaziiscool@sneaksquad.mh4h6yx.mongodb.net/";
mongoose
  .connect(apikey, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to Database..."))
  .catch((error) => console.log(error));

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.listen(5000);
