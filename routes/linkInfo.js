import express from "express";

import {
  AddData,
  GetAllData,
  UpdateData,
  GetSpecificData,
  DeleteData,
} from "../controllers/linkInfo.js";

const router = express.Router();

//PUBLIC ROUTES
router.post("/add", AddData);
router.get("/all", GetAllData);
router.get("/:id", GetSpecificData);
router.patch("/update", UpdateData);
router.delete("/:id", DeleteData);

//PROTECTED ROUTES

export default router;
