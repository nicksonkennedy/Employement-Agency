import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AddButton = () => {
  const location = useLocation()
  return (
    <>
    {location.pathname === '/' || location.pathname==='/compose/new_member'?
    '': <Link to='/compose/new_member' className='fixed bottom-28 bg-midnightblue text-white shadow-2xl p-2 rounded-full right-5'>
    <PlusOutlined className='text-xl relative  h-[2rem] w-[2rem] ' style={{color:'white'}}/>
</Link>}
    </>
  )
}

export default AddButton