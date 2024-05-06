import React, { useState } from "react";
import "./Admin.css";
import { FaBars } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import {
  RiAddBoxLine,
  RiFileListLine,
  RiSettings4Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import { BsTruck } from "react-icons/bs";

const Admin = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin",
      name: "Dashboard",
      icon: <RxDashboard />,
    },
    {
      path: "/admin/addNewProduct",
      name: "Add New Product",
      icon: <RiAddBoxLine />,
    },

    {
      path: "/admin/productsList",
      name: "Listed Products",
      icon: <RiFileListLine />,
    },
    {
      path: "/admin/ordersList",
      name: "Listed Orders",
      icon: <BsTruck />,
    },
    {
      path: "/admin/settings",
      name: "Settings",
      icon: <RiSettings4Line />,
    },
    
  ];
  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section-sidebar">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            SNEAKSQUAD
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link-sidebar active">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="sidebar-nextSection">
        {children}
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
