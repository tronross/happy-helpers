import { useEffect } from "react"
import FormButton from "./FormButton"

export default function StepperControl({currentStep, setCurrentStep}) {

  const onClick = (name) => {
    if (name === "Next") {
      // console.log(currentStep)

      setCurrentStep((prev) => prev + 1)
      
    } else if (name === "Back") {
      setCurrentStep((prev) => prev - 1)
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
        return <FormButton buttonName="Back" onClick={onClick}/>
      }
  }


  return (  
    <div className="container flex justify-around mt-4 mb-8">
      {buttons(currentStep)}
    </div>
  )
}