import React from 'react'
import { Divider, Steps } from 'antd';
import { useMember } from '../../context/MemberContext';
const { Step } = Steps;
const JobChoiceInformation = () => {
  const {setBasicInfo,setEducationalInfo,setWorkInfo,setJobChoiceInfo, setSummary} = useMember()
  const nextHandler = () =>{
    setBasicInfo(false)
    setEducationalInfo(false)
    setWorkInfo(false)
    setJobChoiceInfo(false)
    setSummary(true)
  }
  const prevHandler = () =>{
    setBasicInfo(false)
    setEducationalInfo(false)
    setWorkInfo(true)
    setJobChoiceInfo(false)
    setSummary(false)
  }
  return (
    <div className='relative top-[3rem]'>
       <div className='p-3 '>
      <div className='bg-white p-3 shadow-2xl w-[95%] md:w-[75%] fixed z-40 '>
      <Steps 
      current={3}
      size='small'
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
      <Divider>Job Choice</Divider>
      <div className='grid sm:grid-cols-2  gap-7'>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>1st Choice</label>
                <input type='text' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>2nd Choice</label>
                <input type='text' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
            </div>
            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>3red Choice</label>
                <input type='text' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
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

export default JobChoiceInformation