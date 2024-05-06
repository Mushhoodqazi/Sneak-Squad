import newProductModel from "../models/ProductModel.js";

export const deleteSingleProductController = async (req, res) => {
    try {
        await newProductModel.deleteOne({_id: req.params.id});
        res.json("Deleted");
    } catch (error) {
        
    }
}