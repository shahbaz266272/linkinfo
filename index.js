import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./configs/config.js";
 import PoetryRoutes from "./routes/linkInfo.js";
 
dotenv.config();

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DB_URL;

// Cors error handling
app.use(cors());

//DATABASE CONNECTION
connectDB(DATABASE_URL);

//JSON CONFIG
app.use(express.json());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

 
app.use("/api/info", PoetryRoutes);

app.listen(port, () => {
  console.log("App is running at port: ", port);
});
