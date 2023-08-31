import React from 'react'
import { useMember } from '../../context/MemberContext'
import BasicInformation from './BasicInformation'
import EducationalInformation from './EducationalInformation'
import InformationSummary from './InformationSummary'
import JobChoiceInformation from './JobChoiceInformation'
import WorkInformation from './WorkInformation'

const Home = () => {
    const {BasicInfo,EducationalInfo,WorkInfo,JobChoiceInfo, Summary} = useMember()
  return (
    <>
    {BasicInfo && <BasicInformation />}
    {EducationalInfo && <EducationalInformation />}
    {WorkInfo && <WorkInformation />}
    {JobChoiceInfo && <JobChoiceInformation />}
    {Summary && <InformationSummary />}
    </>
  )
}

export default Home