import {  Drawer } from 'antd';
import React, { useState } from 'react';
import {  MenuOutlined } from '@mui/icons-material'
import { ConstructionOutlined, DashboardOutlined, GroupOutlined, Groups, LogoutOutlined, PaidOutlined, VerifiedUserOutlined, WorkOutline } from '@mui/icons-material'
import { Link , useLocation} from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';

const DrawerMenu = () => {
    const location = useLocation()
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    }
  return (
    <>
    <MenuOutlined onClick={showDrawer}/>
    <Drawer 
    title={ <Link to='/dashboard' className='font-extrabold text-xl text-slate-700 font-mono'>Sterling <span className='text-[11px] text-purple-900 top-3 relative -left-8'>Agency</span></Link>
  }
    placement="left"
     onClose={onClose}
      open={open}
      visible={open}
      width='300'
     >
      <div className=' p-1 '>

<div className='relative block space-y-12'>
<div onClick={()=>setOpen(false)} className={location.pathname==='/dashboard' ? 'hover:scale-105  border-r-4 border-purple-600 ':'hover:scale-105 '}> <Link to='/dashboard' className={location.pathname==='/dashboard'? 'text-blueblue font-extrabold':'text-slate-700 font-semibold'}>{location.pathname==='/dashboard'?<DashboardIcon  style={{color:'#00548e'}}/> :<DashboardOutlined /> }<span className='relative top-1 left-3'>Dashboard</span></Link></div>
<div onClick={()=>setOpen(false)} className={location.pathname==='/members' ? 'hover:scale-105  border-r-4 border-purple-600 ':'hover:scale-105 '}> <Link to='/members' className={location.pathname==='/members'? 'text-blueblue font-extrabold':'text-slate-700 font-semibold'}>{location.pathname==='/members'? <Groups style={{color:'#00548e'}} />:<GroupOutlined />} <span className='relative top-1 left-3'>Members</span></Link></div>
<div onClick={()=>setOpen(false)} className='hover:scale-105'> <Link to='' className={location.pathname===''? 'text-slate-700 font-semibold':'text-slate-700 font-semibold'}><PaidOutlined /> <span className='relative top-1 left-3'> Transaction</span></Link></div>
<div onClick={()=>setOpen(false)} className='hover:scale-105'> <Link to='' className={location.pathname===''? 'text-slate-700 font-semibold':'text-slate-700 font-semibold'}><ConstructionOutlined /> <span className='relative top-1 left-3'>Settings</span></Link></div>
<div onClick={()=>setOpen(false)} className='hover:scale-105'> <Link to='' className={location.pathname===''? 'text-slate-700 font-semibold':'text-slate-700 font-semibold'}><WorkOutline /> <span className='relative top-1 left-3'>Employers</span></Link></div>
<div onClick={()=>setOpen(false)} className='hover:scale-105'> <Link to='' className={location.pathname===''? 'text-slate-700 font-semibold':'text-slate-700 font-semibold'}><VerifiedUserOutlined /> <span className='relative top-1 left-3'>Verifications</span></Link></div>
<div onClick={()=>setOpen(false)} className='hover:scale-105'> <Link to='/' className={location.pathname===''? 'text-slate-700 font-semibold':'text-slate-700 font-semibold'}><LogoutOutlined /> <span className='relative top-1 left-3'>Logout</span></Link></div>

</div>

</div>
    </Drawer>
  </>
  )
}

export default DrawerMenu