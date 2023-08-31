import { DarkMode,  } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DrawerMenu from './DrawerMenu'

const TopNav = () => {
  const location = useLocation()
  const [NightMode, setNightMode] = useState(false)

   const modeHandler = () =>{
    const mode = setNightMode(!NightMode)
    console.log(mode)
   }
  return (
   <>
   {location.pathname === '/' ? '' :
    <div className='w-full bg-white shadow-2xl p-4 flex justify-between fixed z-50'>
    <Link to='/dashboard' className='font-extrabold text-xl text-slate-700 font-mono'>Sterling <span className='text-[11px] text-purple-900 top-3 relative -left-8'>Agency</span></Link>

    <div className='flex space-x-6'>
    <span className='cursor-pointer ' onClick={modeHandler}><DarkMode /></span>
        <span className='cursor-pointer inline md:hidden'><DrawerMenu /></span>
    </div>

</div>
   }
   </>
  )
}

export default TopNav