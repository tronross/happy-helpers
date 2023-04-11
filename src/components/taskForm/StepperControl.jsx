import { useEffect } from "react"
import FormButton from "./FormButton"
import axios from "axios"
export default function StepperControl({currentStep, setCurrentStep, formData}) {

  const onClick = async (name) => {
    if (name === "Next") {
      // console.log(currentStep)

      setCurrentStep((prev) => prev + 1)
      
    } else if (name === "Back") {
      setCurrentStep((prev) => prev - 1)
    } else if (name === "Add Task") {
      await axios.post('http://localhost:3000/api/tasks', formData);
    }
  }


  useEffect(() => {
  }, [currentStep])


  const buttons = (step) => {
    switch(step) {
      case 1: 
      return <FormButton buttonName="Next" onClick={onClick}/>
      case 2:
        return <>
              <FormButton buttonName="Back" onClick={onClick}/>
              <FormButton buttonName="Next" onClick={onClick}/>
            </>
      case 3:
        return <>
              <FormButton buttonName="Back" onClick={onClick}/>
              <FormButton buttonName="Next" onClick={onClick}/>
            </>
      case 4:
        return <>
        <FormButton buttonName="Back" onClick={onClick}/>
        <FormButton buttonName="Add Task" onClick={onClick}/>
      </>
      }
  }

  const buttonsStyle = (step) => {
    if (step === 1) {
      return "container flex justify-end px-16 my-6 mb-10"
    } else {
      return "container flex justify-start justify-between px-16 my-6"
    }
  }


  return (  
    <div className={buttonsStyle(currentStep)}>
      {buttons(currentStep)}
    </div>
  )
}