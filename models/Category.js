import { Schema, model, Types } from "mongoose";

let collection = "categories";
let schema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: false },
    hover: { type: String, required: true },
    description: { type: String, required: true },
    cover_photo: { type: String, required: false },
    character_photo: { type: String, required: true },
    admin_id: { type: Types.ObjectId, ref: "users", required: true },
  },
  {
    timestamps: true,
  }
);

let Category = model(collection, schema);
export default Category;
