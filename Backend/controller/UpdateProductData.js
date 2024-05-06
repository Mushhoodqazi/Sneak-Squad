import newProductModel from "../models/ProductModel.js";

export const updateProductData = async (req, res) => {
  const { productName, productImgUrl, productPrice, productDescription } =
    req.body;
  const { id } = req.params;
  try {
    await newProductModel.updateOne({ _id: id }, {
        productName: productName,
        productImageUrl: productImgUrl,
        productDescription: productDescription,
        productPrice: productPrice,
    });
    res.status(200)
    console.log("Product updated");
  } catch (error) {
    console.log("Product not updated", error);
  }
};
