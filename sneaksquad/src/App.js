import Navbar from "./components/Navbar";
import Navtab from "./components/Navtab";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Aboutus from "./pages/Aboutus";
import Adidas from "./pages/Adidas";
import Nike from "./pages/Nike";
import Puma from "./pages/Puma";
import Convers from "./pages/Convers";

import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Admin from "../src/components/admin/Admin";
import AddNewProduct from "./components/admin/pages/AddNewProduct";
import ProductsList from "./components/admin/pages/ProductsList";
import EditProduct from "./components/admin/pages/EditProduct";
import Dashboard from "./components/admin/pages/Dashboard";
import Setting from "./components/admin/pages/Setting";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OrdersList from "./components/admin/pages/OrdersList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Help" element={<Help />} />
      <Route path="/Adidas" element={<Adidas />} />
      <Route path="/Nike/:id" element={<Nike />} />
      <Route path="/Convers" element={<Convers />} />
      <Route path="/Puma" element={<Puma />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />}>
           
      
        <Route path="addNewProduct" element={<AddNewProduct />} />
        <Route path="productsList" element={<ProductsList />} />
        <Route path="ordersList" element={<OrdersList />} />
        <Route path="/admin/edit/:id" element={<EditProduct/>} />
        <Route path="settings" element={<Setting/>} />
    
      </Route>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
