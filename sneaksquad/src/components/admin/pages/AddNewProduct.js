import React from "react";
import "./AddNewProduct.css";
import { useState, useRef } from "react";
import { sendProductDataToBackend } from "../../api";
import Navbar from "../../Navbar";

function AddNewProduct() {
  const formRef = useRef();
  const [productData, setProductData] = useState({
    productName: "",
    productImageUrl: "",
    productPrice: "",
    productDescription: "",
  });

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };
  const sendProductData = async (e) => {
    e.preventDefault();
    const result = await sendProductDataToBackend(productData);
    if(result.status== 200){
      clearFields()
    }
    clearFields()
  };

  const clearFields = () => {
    setProductData({
      productName: "",
      productImageUrl: "",
      productPrice: "",
      productDescription: "",
    });
  };
  return (
    <div>
      <Navbar/>
    <div className="add-new-job-container">
      <h2 className="add-new-job-title">Add New Product</h2>
      <form
        ref={formRef}
        className="form-add-new-job"
        onSubmit={sendProductData}
      >
        <div className="company-name-add-job-con">
          <label className="label-add-new-job">Product Name</label>
          <input
            value={productData.productName}
            className="input-add-new-job"
            name="productName"
            placeholder="Enter product name"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="div-2-add-new-job">
          <div className="div-2-inner">
            <label className="label-add-new-job">Product Url</label>
            <input
              value={productData.productImageUrl}
              className="input-add-new-job"
              name="productImageUrl"
              type={"text"}
              placeholder="product image url"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="div-2-inner">
            <label className="label-add-new-job">Product Price</label>
            <input
              value={productData.productPrice}
              className="input-salary-add-new-job"
              name="productPrice"
              type={"number"}
              placeholder="Enter amount"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="job-description-container-add-new-job">
          <label className="label-add-new-job">Product Description</label>
          <textarea
            value={productData.productDescription}
            className="input-add-new-job-desc"
            name="productDescription"
            type={"text"}
            placeholder="Enter description"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button className="button-add-new-job" type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default AddNewProduct;
