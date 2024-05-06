import mongoose from "mongoose";

const productsDetail = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productImageUrl: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const newProductModel = mongoose.model("ProductsDetail", productsDetail);

export default newProductModel;
