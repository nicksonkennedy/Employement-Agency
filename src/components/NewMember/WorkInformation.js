import React from 'react'
import { Divider, Steps } from 'antd';
import { AddBusinessOutlined, AddLocationAltOutlined, BusinessCenterOutlined, CallEndOutlined } from '@mui/icons-material';
import { useMember } from '../../context/MemberContext';
const { Step } = Steps;
const WorkInformation = () => {
  const {setBasicInfo,setEducationalInfo,setWorkInfo,setJobChoiceInfo, setSummary} = useMember()
  const nextHandler = () =>{
    setBasicInfo(false)
    setEducationalInfo(false)
    setWorkInfo(false)
    setJobChoiceInfo(true)
    setSummary(false)
  }
  const prevHandler = () =>{
    setBasicInfo(false)
    setEducationalInfo(true)
    setWorkInfo(false)
    setJobChoiceInfo(false)
    setSummary(false)
  }
  return (
    <div className='relative top-[3rem]'>
       <div className='p-3 '>
      <div className='bg-white p-3 shadow-2xl w-[95%] md:w-[75%] fixed z-40 '>
      <Steps 
      current={2}
      >
    <Step title="Basic Information"  />
    <Step title="Educational Background" />
    <Step title="Work Experiences"  />
    <Step title="Job Choices"  />
    <Step title="Summary"  />
  </Steps>
      </div>
      </div>
     
      <div className='relative top-[15rem] sm:top-[1rem] p-5 sm:p-[5rem]'>
      <Divider></Divider>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Name Of Company</label>
                <input type='text' placeholder='Your previous Institution' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <AddBusinessOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Location</label>
                <input type='text' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <AddLocationAltOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>

            

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Position/Role</label>
                <input type='text' placeholder='Skills, role or position' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <BusinessCenterOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Contact</label>
                <input type='text' placeholder='Email or Phone of your previous institution' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <CallEndOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>

            
      </div>
<Divider></Divider>
      <div className='relative flex justify-around  -top-9 p-14'>
        <div className='px-6 py-2 text-slate-800 cursor-pointer border-[1px] border-slate-400 ' onClick={prevHandler}>Previous</div>
        <button className='px-6 py-2 bg-blueblue text-white' onClick={nextHandler}>Next</button>
      </div>

      </div>
  
    </div>
  )
}

export default WorkInformation