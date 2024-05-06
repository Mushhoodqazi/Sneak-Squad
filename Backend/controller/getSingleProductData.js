import newProductModel from "../models/ProductModel.js";

export const getSingleProductData = async (req, res) => {
  try {
    const result = await newProductModel.findById(req.params.id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

// export const editSingleJobController = async (req, res) => {
//   let editUser = req.body;
//   try {
//     await newProductModel.updateOne({ _id: req.params.id }, editUser);
//     res.status(200).json(editUser);
//     // res.json(editedUser);
//     console.log("updated created");
//   } catch (error) {
//     console.log("Product not updated", error);
//   }
// };
