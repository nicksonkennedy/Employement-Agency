import React from 'react'
import { Divider, Steps } from 'antd';
import { useMember } from '../../context/MemberContext';
import { KeyboardReturnOutlined, PersonAddAlt1Outlined } from '@mui/icons-material';
const { Step } = Steps;
const InformationSummary = () => {
  const {setBasicInfo,setEducationalInfo,setWorkInfo,setJobChoiceInfo , setSummary} = useMember()
  const prevHandler = () =>{
    setBasicInfo(false)
    setEducationalInfo(false)
    setWorkInfo(false)
    setJobChoiceInfo(true)
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
  const Edu = () =>{
    setBasicInfo(false)
    setEducationalInfo(true)
    setWorkInfo(false)
    setJobChoiceInfo(false)
    setSummary(false)
  }
  return (
    <div className='relative top-[2.80rem]'>
      <div className='p-3 '>
      <div className='bg-white p-3 shadow-2xl w-[95%] md:w-[75%] fixed z-40 '>
      <Steps 
      current={4}
      >
    <Step title="Basic Information"className='cursor-pointer' onClick={prevHandler}/>
    <Step title="Educational Background" className='cursor-pointer' onClick={Edu} />
    <Step title="Work Experiences"  className='cursor-pointer' onClick={workEx}/>
    <Step title="Job Choices"  className='cursor-pointer' onClick={Job}/>
    <Step title="Summary" className='cursor-pointer'  />
  </Steps>
      </div>
      </div>
      <div className='relative top-[15rem] sm:top-[1rem] p-5 sm:p-[5rem]'>
      <Divider></Divider>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
      
      <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Title</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>First Name</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>
            
            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Last Name</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Date Of Birth</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>
            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Health Status</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Phone Number</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>House Number / Landmark</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Emergency Contact Name</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Emergency Contact Number</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>
      </div>

      <div className='relative top-[3rem]'>
      <Divider><div className='p-1 bg-purple-600 text-white text-sm font-mono'>Educational Information</div></Divider>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
      
      <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Educational Level</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Qualification</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>
            
            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Year Completed</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Course / Program Offered</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>
            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Name Of Institution</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

        
      </div>
      </div>

      <div className='relative top-[3rem]'>
      <Divider><div className='p-1 bg-orange-500 text-white text-sm font-mono'>Work Experiences</div></Divider>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
      
      <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Name Of Company</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Location</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>
            
            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Position/Role</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Contact</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>
      </div>
      </div>

      <div className='relative top-[3rem]'>
      <Divider><div className='p-1 bg-blueblue text-white text-sm font-mono'>Job Choices</div></Divider>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
      
      <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>1st Choice</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>2nd Choice</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>
            
            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>3rd Choice</label>
                <input type='text'  
                className='relative w-full rounded-lg px-2 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100'
                disabled
                />
            </div>

           
      </div>
      </div>

      
      <div className='relative   p-14'>
      <Divider></Divider>
       <div className='relative flex justify-between'>
       <div className='px-6 py-2 border-[1px] border-slate-500 text-slate-700 text-sm cursor-pointer' onClick={prevHandler}><KeyboardReturnOutlined /> </div>
       <button className='px-6 py-2 bg-midnightblue text-white'><PersonAddAlt1Outlined /> Add Memmber</button>
       </div>
      </div>

      </div>
  
    </div>
  )
}

export default InformationSummary