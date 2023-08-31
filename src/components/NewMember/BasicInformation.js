import React from 'react'
import { Divider, Steps } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { AccountBoxOutlined, LocalPhoneOutlined, MedicalServicesOutlined, NumbersOutlined, PersonAddAlt1Outlined } from '@mui/icons-material';
import { useMember } from '../../context/MemberContext';
const { Step } = Steps;
const BasicInformation = () => {
  const {setBasicInfo,setEducationalInfo,setWorkInfo,setJobChoiceInfo,  setSummary} = useMember()
  const nextHandler = () =>{
    setBasicInfo(false)
    setEducationalInfo(true)
    setWorkInfo(false)
    setJobChoiceInfo(false)
    setSummary(false)
  }
  const workEx = () =>{
    setBasicInfo(false)
    setEducationalInfo(false)
    setWorkInfo(true)
    setJobChoiceInfo(false)
    setSummary(false)
  }
  const Job = () =>{
    setBasicInfo(false)
    setEducationalInfo(false)
    setWorkInfo(false)
    setJobChoiceInfo(true)
    setSummary(false)
  }
  const Summ = () =>{
    setBasicInfo(false)
    setEducationalInfo(false)
    setWorkInfo(false)
    setJobChoiceInfo(false)
    setSummary(true)
  }
  return (
    <div className='relative top-[2.80rem]'>
      <div className='p-3 '>
      <div className='bg-white p-3 shadow-2xl w-[95%] md:w-[75%] fixed z-40 '>
      <Steps 
      current={0}
      >
    <Step title="Basic Information"  />
    <Step title="Educational Background" className='cursor-pointer' onClick={nextHandler} />
    <Step title="Work Experiences" className='cursor-pointer' onClick={workEx}  />
    <Step title="Job Choices" className='cursor-pointer' onClick={Job} />
    <Step title="Summary" className='cursor-pointer' onClick={Summ} />
  </Steps>
      </div>
      </div>
      <div className='relative top-[15rem] sm:top-[1rem] p-5 sm:p-[5rem]'>
      <Divider></Divider>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
      <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Title</label>
                <select name="Title"  className='w-full p-3 bg-slate-100'>
                <option value="mr">Select</option>
               <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
              <option value="ms">Ms</option>

             </select>
            </div>

      <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>First Name</label>
                <input type='text' placeholder='Name given after birth' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <UserOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>
            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Last Name</label>
                <input type='text' placeholder='Your family name' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <AccountBoxOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Date Of Birth</label>
                <input type='date' placeholder='Name given after birth' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
               
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Health Status</label>
                <select name="Title"  className='w-full p-3 bg-slate-100'>
                <option value="mr">Select</option>
               <option value="mr">Fit</option>
              <option value="mrs">Moderate</option>
              <option value="ms">Sick</option>

             </select>
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Phone Number</label>
                <input type='number' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <LocalPhoneOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>House Number / Landmark</label>
                <input type='text' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <NumbersOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Emergency Contact Name</label>
                <input type='text' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <PersonAddAlt1Outlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Emergency Contact Number</label>
                <input type='text' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <MedicalServicesOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>
      </div>
<Divider></Divider>
      <div className='relative  -top-9 p-14'>
        <button className='px-6 py-2 bg-blueblue text-white' onClick={nextHandler}>Next</button>
      </div>

      </div>
  
    </div>
  )
}

export default BasicInformation