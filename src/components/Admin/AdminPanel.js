import React from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../NewMember/Home'
import Dashboard from './Dashboard'
import Members from './Members'
import SideBar from './SideBar'

function AdminPanel() {
    const location = useLocation()
  return (
        <div className='relative w-full flex space-x-1'>
        {/**Sidebar navigation */}
        <div className='hidden w-[20%] md:inline-block '>
        <SideBar />
        </div>

        <div  className=' w-full md:w-[80%] relative '>
        {location.pathname==='/dashboard' && <Dashboard />}
        {location.pathname==='/members' && <Members />}
        {location.pathname==='/compose/new_member' && <Home />}
        </div>

    </div>
    
  )
}

export default AdminPanel