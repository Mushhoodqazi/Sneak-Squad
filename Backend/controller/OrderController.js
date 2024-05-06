import OrderModel from "../models/OrderModel.js";

export const OrderController = async (req, res) => {
  try {
    await OrderModel.insertMany(req.body);
    res.status(200).send({ message: "Orders Inserted" });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getOrdersData = async(req, res)=>{
    try {
     const result = await OrderModel.find();
     res.json(result);
    } catch (error) {
     console.log(error)
    }
 }

 export const deleteOrderController = async (req, res) => {
    try {
        await OrderModel.deleteOne({_id: req.params.id});
        res.json("Deleted");
    } catch (error) {
        
    }
}