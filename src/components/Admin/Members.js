import { SearchOutlined } from '@mui/icons-material'
import React from 'react'

const Members = () => {
  return (
    <div className='w-full '>
        <div className='relative max-w-md mx-auto p-2 top-[10rem]'>
            <div className='relative'>
            <input type='' className='w-full px-10 py-3 outline-none border-[1px] border-slate-300 font-mono text-sm rounded-xl' placeholder='Search with Name, Skills , Occupation or Location' />
            <SearchOutlined className='absolute left-1 top-2' style={{fontSize:'35px'}} />
            </div>
        </div>

        
    </div>
  )
}

export default Members