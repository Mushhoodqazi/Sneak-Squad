import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../Navbar';
function AdminHeader() {
  return (
    <header>
    <h1 id="logo">SNEAK SQUAD</h1>
    <nav id="nav">
        <div>
          <Navbar/>
            <ul>
                {/* <li className="headerItem" ><Link to="/dashboard">Dashboard</Link></li> */}
                {/* <li className="headerItem" ><Link to="/">Add New Product</Link></li>
                <li className="headerItem" ><Link to="/">Jobs List</Link></li>
                <li className="headerItem" ><Link to="/setting">Setting</Link></li> */}
            </ul>
        </div>
    </nav>
    <div>
        
    </div>
</header>
  )
}

export default AdminHeader