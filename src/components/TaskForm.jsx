import { useState } from "react"
import StepperControl from "./taskForm/StepperControl";

import TaskInfoForm from "./taskForm/TaskInfoForm";
import WhereForm from "./taskForm/WhereForm";
import WhenForm from "./taskForm/WhenForm";
import ConfirmForm from "./taskForm/ConfirmForm";

export default function TaskForm({formData, setFormData, user}) {
const [currentStep, setCurrentStep] = useState(1)
  const steps = ["Task Info", "Where", "When", "Confirm"];

  const onChange = (e) => {
    setFormData(prev => ({...prev, [`${e.target.name}`]: e.target.value}));
    console.log(formData)
  };


  const displayStep =(step) => {
    switch(step) {
      case 1:
        return <TaskInfoForm formData={formData} setFormData={setFormData} onChange={onChange}/>
      case 2:
        return <WhereForm formData={formData} setFormData={setFormData} onChange={onChange} user={user}/>
      case 3: 
        return <WhenForm formData={formData} setFormData={setFormData} onChange={onChange} />
      case 4:
        return <ConfirmForm formData={formData} setFormData={setFormData} onChange={onChange} user={user}/>

    }
  }
  
  
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-md bg-violet-50 border-2 border-violet-400 mt-5 flex flex-col">
      <div className="uppercase font-semibold text-violet-800 flex justify-center p-2 mt-3 text-lg font-fredoka">New Task</div>
      <div className="container horizontal">

      </div>
      {displayStep(currentStep)}
      <StepperControl currentStep={currentStep} setCurrentStep={setCurrentStep} formData={formData} />
    </div>
  )
}