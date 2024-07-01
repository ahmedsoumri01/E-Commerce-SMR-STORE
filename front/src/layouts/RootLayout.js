import React from 'react'
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Outlet} from 'react-router-dom'
export default function RootLayout() {
  return (
    <div>
    
    <ToastContainer />
    <main>
      <Outlet />
    </main>
    
    </div>
  )
}
