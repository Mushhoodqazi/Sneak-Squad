import newProductModel from "../models/ProductModel.js";

export const getProductsData = async(req, res)=>{
   try {
    const result = await newProductModel.find();
    res.json(result);
   } catch (error) {
    console.log(error)
   }
}