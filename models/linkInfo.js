import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import unique_validator from "mongoose-unique-validator";

const LinkInfoSchema = new mongoose.Schema(
  {
    link: {
      type: String,
    },
    isWebView: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
LinkInfoSchema.plugin(unique_validator);

LinkInfoSchema.plugin(mongoosePaginate);
const LinkInfoModel = mongoose.model("linkInfo", LinkInfoSchema);
export default LinkInfoModel;
