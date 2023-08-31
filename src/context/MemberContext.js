import React,{useState, createContext} from 'react'
import { useContext } from 'react'

export const MemberContext = createContext()

export const MemberProvider = ({children}) => {
    const [Title, setTitle] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [Surname, setSurname] = useState('')
    const [Gender, setGender] = useState('')
    const [DateOfBirth, setDateOfBirth] = useState('')
    const [HealthStatus, setHealthStatus] = useState('')
    const [Hometown, setHometown] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [HouseNo, setHouseNo] = useState('')
    const [EmergencyContact, setEmergencyContact] = useState('')
    const [EmergencyContactName, setEmergencyContactName] = useState('')
    const [HighestEducation, setHighestEducation] = useState('')
    const [Qualification, setQualification] = useState('')
    const [YearCompleted, setYearCompleted] = useState('')
    const [Course, setCourse] = useState('')
    const [NameOfCompany, setNameOfCompany] = useState('')
    const [JobLocation, setJobLocation] = useState('')
    const [JobPosition, setJobPosition] = useState('')
    const [JobContact, setJobContact] = useState('')
    const [ChoiceOfJobNeeded, setChoiceOfJobNeeded] = useState('')
    const [ChoiceOfJobNeeded1, setChoiceOfJobNeeded1] = useState('')
    const [ChoiceOfJobNeeded2, setChoiceOfJobNeeded2] = useState('')

    //component controller
    const [BasicInfo, setBasicInfo] = useState(true)
    const [EducationalInfo, setEducationalInfo] = useState(false)
    const [WorkInfo, setWorkInfo] = useState(false)
    const [JobChoiceInfo, setJobChoiceInfo] = useState(false)
    const [Summary, setSummary] = useState(false)

    //

  return (
    <MemberContext.Provider value={{
        Title, setTitle , FirstName, setFirstName, Surname, setSurname, DateOfBirth, setDateOfBirth, Gender, setGender,
        HealthStatus, setHealthStatus, Hometown, setHometown, PhoneNumber, setPhoneNumber,HouseNo, setHouseNo ,
        EmergencyContact, setEmergencyContactName,  EmergencyContactName, setEmergencyContact, HighestEducation, setHighestEducation,
        Qualification, setQualification , YearCompleted, setYearCompleted , Course, setCourse, NameOfCompany, setNameOfCompany,
        JobLocation, setJobLocation , JobPosition, setJobPosition, JobContact, setJobContact ,JobChoiceInfo, setJobChoiceInfo,
        ChoiceOfJobNeeded, setChoiceOfJobNeeded, ChoiceOfJobNeeded1, setChoiceOfJobNeeded1, ChoiceOfJobNeeded2, setChoiceOfJobNeeded2,

        BasicInfo ,setBasicInfo , EducationalInfo, setEducationalInfo , WorkInfo, setWorkInfo, Summary, setSummary
    }}>
        {children}

    </MemberContext.Provider>
  )
}

export const useMember = () =>{
    const context = useContext(MemberContext)
    if(context === undefined){
        throw new Error(" must be within context")
    }
    return context
}

 