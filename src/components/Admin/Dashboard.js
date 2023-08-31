import { CheckCircleOutline, CurrencyExchangeOutlined, Group, PendingActionsOutlined, UpcomingOutlined,  WorkOutline } from '@mui/icons-material'
import React from 'react'

const Dashboard = () => {
  return (
    <div >
        

        <div className='relative top-10 w-full p-10'>
        <div className='relative grid sm:grid-cols-3 gap-4'>

            <div className='w-full p-3 bg-blueblue shadow-2xl'>
                <div className='flex justify-between'>
                    <span className='text-white font-bold'>2,300</span>
                    <Group style={{fontSize:'40px', color:'white'}} />
                    </div>
                <div className='relative  mx-auto p-5'><span className='text-sm text-gray-100 font-mono'>Registered Members</span></div>
            </div>

            <div className='w-full p-3 bg-green-700 shadow-2xl'>
                <div className='flex justify-between'>
                    <span className='text-white font-bold'>1,801</span>
                    <CheckCircleOutline style={{fontSize:'40px', color:'white'}} />
                    </div>
                <div className='relative  mx-auto p-5'><span className='text-sm text-gray-100 font-mono'> Active Members</span></div>
            </div>

            <div className='w-full p-3 bg-orange-600 shadow-2xl'>
                <div className='flex justify-between'>
                    <span className='text-white font-bold'>203</span>
                    <PendingActionsOutlined style={{fontSize:'40px', color:'white'}} />
                    </div>
                <div className='relative  mx-auto p-5'><span className='text-sm text-gray-100 font-mono'>Members On Pending</span></div>
            </div>
            <div className='w-full p-3 bg-pink-600 shadow-2xl'>
                <div className='flex justify-between'>
                    <span className='text-white font-bold'>120</span>
                    <WorkOutline style={{fontSize:'40px', color:'white'}} />
                    </div>
                <div className='relative  mx-auto p-5'><span className='text-sm text-gray-100 font-mono'>Employers Registered</span></div>
            </div>

            <div className='w-full p-3 bg-violet-600 shadow-2xl'>
                <div className='flex justify-between'>
                    <span className='text-white font-bold'>12</span>
                    <UpcomingOutlined style={{fontSize:'40px', color:'white'}} />
                    </div>
                <div className='relative  mx-auto p-5'><span className='text-sm text-gray-100 font-mono'>Incoming Request</span></div>
            </div>
            
            <div className='w-full p-3 bg-purple-600 shadow-2xl'>
                <div className='flex justify-between'>
                    <span className='text-white font-bold'>$5,120</span>
                    <CurrencyExchangeOutlined style={{fontSize:'40px', color:'white'}} />
                    </div>
                <div className='relative  mx-auto p-5'><span className='text-sm text-gray-100 font-mono'>Expected Income</span></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard