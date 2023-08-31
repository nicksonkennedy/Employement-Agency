import { ConstructionOutlined, DashboardOutlined, GroupOutlined, Groups, LogoutOutlined, PaidOutlined, VerifiedUserOutlined, WorkOutline } from '@mui/icons-material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import React from 'react'
import { Link , useLocation} from 'react-router-dom'

const SideBar = () => {
  const location = useLocation()
  return (
    <div className='top-8 h-screen p-5 bg-white shadow-2xl fixed z-40 w-[20%]'>

       <div className='relative top-10  block space-y-10'>
       <div className={location.pathname==='/dashboard' ? 'hover:scale-105  border-r-4 border-purple-600 ':'hover:scale-105 '}> <Link to='/dashboard' className={location.pathname==='/dashboard'? 'text-blueblue font-extrabold':'text-slate-700 font-semibold'}>{location.pathname==='/dashboard'?<DashboardIcon  style={{color:'#00548e'}}/> :<DashboardOutlined /> }<span className='relative top-1 left-3'>Dashboard</span></Link></div>
       <div className={location.pathname==='/members' ? 'hover:scale-105  border-r-4 border-purple-600 ':'hover:scale-105 '}> <Link to='/members' className={location.pathname==='/members'? 'text-blueblue font-extrabold':'text-slate-700 font-semibold'}>{location.pathname==='/members'? <Groups style={{color:'#00548e'}} />:<GroupOutlined />} <span className='relative top-1 left-3'>Members</span></Link></div>
       <div className='hover:scale-105'> <Link to='' className={location.pathname===''? 'text-slate-700 font-semibold':'text-slate-700 font-semibold'}><PaidOutlined /> <span className='relative top-1 left-3'> Transaction</span></Link></div>
       <div className='hover:scale-105'> <Link to='' className={location.pathname===''? 'text-slate-700 font-semibold':'text-slate-700 font-semibold'}><ConstructionOutlined /> <span className='relative top-1 left-3'>Settings</span></Link></div>
       <div className='hover:scale-105'> <Link to='' className={location.pathname===''? 'text-slate-700 font-semibold':'text-slate-700 font-semibold'}><WorkOutline /> <span className='relative top-1 left-3'>Employers</span></Link></div>
       <div className='hover:scale-105'> <Link to='' className={location.pathname===''? 'text-slate-700 font-semibold':'text-slate-700 font-semibold'}><VerifiedUserOutlined /> <span className='relative top-1 left-3'>Verifications</span></Link></div>
       <div className='hover:scale-105'> <Link to='/' className={location.pathname===''? 'text-slate-700 font-semibold':'text-slate-700 font-semibold'}><LogoutOutlined /> <span className='relative top-1 left-3'>Logout</span></Link></div>

       </div>

    </div>
  )
}

export default SideBar