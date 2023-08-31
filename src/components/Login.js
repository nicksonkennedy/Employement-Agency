import { UserOutlined } from '@ant-design/icons'
import { LockOutlined } from '@ant-design/icons/lib/icons'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handler = (e) =>{
        e.preventDefault()
        navigate('/dashboard')
    }
  return (
    <div className='relative top-8 max-w-full '>
       <div className='relative max-w-[60rem] mx-auto flex justify-between  bg-gray-200 shadow-2xl top-[2rem] p-2 sm:p-5'>
       
        <div className='relative hidden sm:inline-block w-full'>
            <img src='hero.jpeg '  alt='' style={{width:'100%' , height:"30rem"}} className='transition-all delay-200 duration-200 ease-in-out hover:scale-105 object-cover'/>
            
            <div className='absolute bg-transparent p-5 top-[10rem]  w-full rounded-full transition-all delay-200 duration-200 ease-in-out scale-90 hover:scale-100'>
            <div className='grid gap-1 relative top-1'>
            <span className=' text-white  text-xl text-center  font-bold '>Connect you to your preferred Job Opportunities</span>
            <span className=' text-white  text-sm font-mono text-center  font-semibold box'>Always in touch with employers for better offer</span>

            </div>
            </div>
       </div>


       <div className='p-8 relative bg-white shadow-2xl w-full sm:w-[70%] grid gap-6 transition-all delay-200 duration-200 ease-in-out hover:scale-110'>
            <h1 className='text-2xl text-blue-900 font-extrabold '>Login</h1>
            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Email Address</label>
                <input type='text' placeholder='your@example.com' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <UserOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>

            <div className='form-group relative block '>
                <span className='flex justify-between'>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Password</label>
                <Link to='' className='text-[10px] text-blue-900 font-semibold relative '>Forgot Password?</Link>
                </span>
                <input type='text' placeholder='Enter 6 Characters or More' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <LockOutlined className='absolute top-[2.30rem] left-1' style={{fontSize:'18px'}} />
            </div>
            <div className='form-group relative flex space-x-3 '>
                <input type='checkbox' className='p-3' />
                <span className='text-sm text-slate-400 relative top-1'>Remember Me</span>
            </div>

            <div className='relative '><button className='w-full p-3 bg-blueblue font-semibold text-white' onClick={handler}>Login</button></div>

            <div className=''>

            </div>
        </div>
       </div>

       

    </div>
  )
}

export default Login