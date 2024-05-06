import express from "express"
import { postProductDataController } from "../controller/AddProductController.js";
import { getProductsData } from "../controller/GetAllProducts.js";
import { getSingleProductData } from "../controller/getSingleProductData.js";
import { updateProductData } from "../controller/UpdateProductData.js";
import { deleteSingleProductController } from "../controller/DeleteProduct.js";
import { Signupcontroller } from "../controller/Createuser.js";
import { Logincontroller } from "../controller/Logincontroller.js";
import { OrderController, deleteOrderController, getOrdersData } from "../controller/OrderController.js";

const router = express.Router();

router.post("/admin/addNewProduct", postProductDataController)
router.get("/admin/productsList", getProductsData)
router.get("/admin/ordersList", getOrdersData)
router.delete("/admin/productsList/:id", deleteSingleProductController)
router.delete("/admin/ordersList/:id", deleteOrderController)
router.get("/", getProductsData)
router.get("/admin/edit/:id", getSingleProductData)
router.put("/admin/edit/:id", updateProductData)
router.post("/Signup", Signupcontroller)
router.post("/Login", Logincontroller)
router.post("/cart", OrderController)

export default router