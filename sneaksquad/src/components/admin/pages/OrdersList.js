import React from "react";
import { useState, useEffect } from "react";

import "./ProductsList.css";

import { Link } from "react-router-dom";
import { deleteOrders, getAllOrders } from "../../api";
import Navbar from "../../Navbar";

function OrdersList() {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    getAllOrder();
  }, []);
  const getAllOrder = async () => {
    const result = await getAllOrders();
    setOrdersList(result.data);
  };

  const handleDelete = async (id) => {
    const result = await deleteOrders(id)
    getAllOrder()
  };

  return (
    <div>
      <Navbar />
      <div className="jobListContainer">
        <h2 className="jobList-header">ORDERS LISTS</h2>
        <table className="job-list-container">
          <thead className="table-head-job">
            <tr>
              <th>ID</th>
              <th>Produt Nam</th>
              <th className="job-name-table">Product Title</th>
              <th>Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {ordersList.map((product, index) => {
              return (
                <tr key={product._id}>
                  <td className="table-data-job-list">{index + 1}</td>
                  <td className="table-data-job-list">{product.productName}</td>
                  <td className="table-data-job-list">
                    {product.productDescription}
                  </td>
                  <td className="table-data-job-list">
                    {product.productPrice}
                  </td>
                  <td className="table-data-job-list">
                   
                    <button
                      className="btn-job-list-sec "
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersList;
