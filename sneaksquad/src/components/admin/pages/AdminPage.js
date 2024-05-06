import React from 'react'
import { Outlet } from 'react-router-dom'
import Admin from '../Admin'
import Navbar from '../../Navbar'

function AdminPage() {
  return (
    <div>
    <Admin/>
    <Navbar/>
    <Outlet/>
    
    </div>
  )
}

export default AdminPage