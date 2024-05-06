import axios from "axios";
const url = "http://localhost:5000";

export const sendProductDataToBackend = (data) => {
  return axios.post(`${url}/admin/addNewProduct`, data);
};
export const getAllProducts = (data) => {
  return axios.get(`${url}/admin/productsList`);
};
export const getSingleProductData = (id) => {
  return axios.get(`${url}/admin/edit/${id}`);
};
export const sendUpdatedProductData = (id, data) => {
  return axios.put(`${url}/admin/edit/${id}`, data);
};
export const deleteProduct = (id, data) => {
  return axios.delete(`${url}/admin/productsList/${id}`);
};
export const deleteOrders = (id, data) => {
  return axios.delete(`${url}/admin/ordersList/${id}`);
};
export const getAllOrders = () => {
  return axios.get(`${url}/admin/ordersList/`);
};
export const getAllData = () => {
  return axios.get(`${url}/`);
};
