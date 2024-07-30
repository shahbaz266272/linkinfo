import LinkInfoModel from "../models/linkInfo.js";
 import mongoose from "mongoose";

export const AddData = async (req, res) => {
  const { link, isWebView } = req.body;

  const newLinkInfo = new LinkInfoModel({
    link,
    isWebView,
  });

  if (!link || !isWebView) {
    res.status(400).json({
      message: "Required field/s missing!",
    });
  } else {
    try {
      await newLinkInfo.save();
      res.status(200).json({
        message: "Data Added Successfully!",
        data: newLinkInfo,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  //
};

// GET ALL data
export const GetAllData = async (req, res) => {
  try {
    const allData = await LinkInfoModel.find();

    res.status(200).json({
      status: "success",
      code: 200,
      message: "data retrieved successfully",
      data: {
        docs: allData,
      },
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//UPDATE SPECIFIC Data
export const UpdateData = async (req, res) => {
  const { id, link, isWebView } = req.body;
  const specificData = await LinkInfoModel.findById(id);
  try {
    if (!mongoose.Types.ObjectId.isValid(id) && !specificData)
      return res.status(404).send(`No Data Found!`);

    const updatedData = {
      link,
      isWebView,
      _id: id,
    };
    await LinkInfoModel.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({
      message: "Data Updated SuccessFully!",
      // data: updatedData,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// GET Specific data
export const GetSpecificData = async (req, res) => {
  const { id } = req.params;
  try {
    const linkinfodata = await LinkInfoModel.findById(id);
    if (!linkinfodata) {
      return res.status(404).json({
        status: "success",
        code: 200,
        message: "Data Not found",
      });
    }
    res.status(200).json({
      status: "success",
      code: 200,
      message: "Data retrieved successfully",
      data: linkinfodata,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//DELETE

export const DeleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const dataLinkInfo = await LinkInfoModel.findById(id);
    if (!dataLinkInfo) {
      return res.status(404).json({ error: "Data not found" });
    }
    await LinkInfoModel.findByIdAndDelete(id)
      .then((result) => {
        res.status(200).json({
          status: "success",
          code: 200,
          message: "Data deleted successfully",
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: "error",
          code: 500,
          message: err,
        });
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
