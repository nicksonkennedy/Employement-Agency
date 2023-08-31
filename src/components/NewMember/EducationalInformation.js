import React from 'react'
import { Divider, Steps } from 'antd';
import { LocalLibraryOutlined, SchoolOutlined } from '@mui/icons-material';
import { useMember } from '../../context/MemberContext';
const { Step } = Steps;
const EducationalInformation = () => {
  const {setBasicInfo,setEducationalInfo,setWorkInfo,setJobChoiceInfo,  setSummary} = useMember()
  const nextHandler = () =>{
    setBasicInfo(false)
    setEducationalInfo(false)
    setWorkInfo(true)
    setJobChoiceInfo(false)
    setSummary(false)
  }
  const prevHandler = () =>{
    setBasicInfo(true)
    setEducationalInfo(false)
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
    <div className='relative top-[3rem]'>
       <div className='p-3 '>
      <div className='bg-white p-3 shadow-2xl w-[95%] md:w-[75%] fixed z-40 '>
      <Steps 
      current={1}
      >
    <Step title="Basic Information" className='cursor-pointer' onClick={prevHandler} />
    <Step title="Educational Background" />
    <Step title="Work Experiences" className='cursor-pointer' onClick={workEx} />
    <Step title="Job Choices"  className='cursor-pointer' onClick={Job}/>
    <Step title="Summary" className='cursor-pointer' onClick={Summ}  />
  </Steps>
      </div>
      </div>
     
      <div className='relative top-[15rem] sm:top-[1rem] p-5 sm:p-[5rem]'>
      <Divider></Divider>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
      <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Educational Level</label>
                <select name="Title"  className='w-full p-3 bg-slate-100'>
                <option value="mr">Select</option>
               <option value="mr">University</option>
              <option value="mrs">Polytechnic</option>
              <option value="ms">Vocational / Professional Studies</option>
              <option value="ms">Senior High School</option>
              <option value="ms">Junior High School</option>
              <option value="ms">Others</option>
             </select>
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Qualification</label>
                <select name="Title"  className='w-full p-3 bg-slate-100'>
                <option value="mr">Select</option>
               <option value="mr">PHD</option>
              <option value="mrs">Masters</option>
              <option value="ms">Bachelor Degree</option>
              <option value="ms">HND</option>
              <option value="ms">Diploma</option>
              <option value="ms">WASSCE</option>
              <option value="ms">BECE</option>
              <option value="ms">Professional Certificate</option>
             </select>
            </div>
            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Year Completed</label>
                <input type='text' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <SchoolOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
            </div>

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Course/Program Offered</label>
                <input type='text' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
               
            </div>

            

            <div className='form-group relative block '>
                <label className='text-sm text-slate-900 font-semibold relative left-1' htmlFor='Email'>Name Of Institution</label>
                <input type='text' placeholder='' className='relative w-full rounded-lg px-8 py-3 text-md text-slate-600 font-mono outline-none border-[1px] border-slate-200 bg-slate-100' />
                <LocalLibraryOutlined className='absolute top-[2.45rem] left-1' style={{fontSize:'18px'}} />
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

export default EducationalInformation