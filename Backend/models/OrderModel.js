import mongoose from "mongoose";

const OrdersDetail = mongoose.Schema(
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

const OrderModel = mongoose.model("Orders", OrdersDetail);

export default OrderModel;
