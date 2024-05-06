import newProductModel from "../models/ProductModel.js";

export const postProductDataController = async (req, res) => {
  const { productName, productImageUrl, productPrice, productDescription } =req.body;
  const newProduct = new newProductModel({
    productName: productName,
    productImageUrl: productImageUrlnpm ,
    productDescription: productDescription,
    productPrice: productPrice,
  });

  try {
    await newProduct.save();
    res.json(newProduct);
    console.log("Product created");
  } catch (error) {
    console.log("Product not created" + error);
  }
};
