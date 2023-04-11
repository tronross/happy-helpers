import { useState } from "react"
import axios from "axios";
import Stepper from "./taskForm/Stepper";
import StepperControl from "./taskForm/StepperControl";

import TaskInfoForm from "./taskForm/TaskInfoForm";
import WhereForm from "./taskForm/WhereForm";
import WhenForm from "./taskForm/WhenForm";
import ConfirmForm from "./taskForm/ConfirmForm";

export default function TaskForm({formData, setFormData}) {
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
        return <WhereForm formData={formData} setFormData={setFormData} onChange={onChange}/>
      case 3: 
        return <WhenForm formData={formData} setFormData={setFormData} onChange={onChange} />
      case 4:
        return <ConfirmForm formData={formData} setFormData={setFormData} onChange={onChange}/>

    }
  }
  
  

  return (


    <div className="md:w-1/2 mx-auto shadow-xl rounded-md bg-white border-2 border-teal-600 mt-5 flex flex-col">
      <div className="uppercase font-bold text-teal-600 flex justify-center p-4 mt-3 text-lg">New Task</div>
      <div className="container horizontal mt-5">
        <Stepper 
         steps={steps}
         currentStep={currentStep}
        />
      </div>
      {displayStep(currentStep)}
      <StepperControl currentStep={currentStep} setCurrentStep={setCurrentStep} formData={formData} />
    </div>






    // <div className="flex flex-col">
      /*{ <input type="text" id="name" name="name"placeholder="Name" value={formData.name} onChange={onChange} required />

      <input type="text" id="desc" name="desc" placeholder="Description" value={formData.desc} onChange={onChange} required />

      <input type="text" id="start" name="start"placeholder="Start Date" value={formData.start} onChange={onChange} required />

      <input type="text" id="end" name="end"placeholder="End Date" value={formData.end} onChange={onChange} required />

      <input type="text" id="category" name="category" placeholder="Category" value={formData.category} onChange={onChange} required />

      <input type="number" min="1" step="1" id="nbHelpers" name="nbHelpers"placeholder="Helpers Needed" value={formData.nbHelpers} onChange={onChange} required />

      <input type="text" id="image" name="image"placeholder="Upload Image" value={formData.image} onChange={onChange} required />

      <input type="text" id="address" name="address"placeholder="Address" value={formData.address} onChange={onChange} required />

      <input type="text" id="city" name="city"placeholder="City" value={formData.city}onChange={onChange} required />

      <input type="text" id="postcode" name="postcode"placeholder="Postal Code" value={formData.postcode} onChange={onChange} required />

      <button type="submit" onClick={handleSubmit} className="p-4 bg-purple-600 m-2">Submit</button> }*/
      // </div>
    ////////////////////
//       <form className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-lg shadow-2xl bg-teal-600">
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//         Task Name
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-task-name" type="text" placeholder="Carrying Boxes" />
//       {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
//     </div>
//     <div className="w-full md:w-1/2 px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
//         Last Name
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
//         Password
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
//       <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-2">
//     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
//         City
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
//     </div>
//     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
//         State
//       </label>
//       <div className="relative">
//         <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//           <option>New Mexico</option>
//           <option>Missouri</option>
//           <option>Texas</option>
//         </select>
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//         </div>
//       </div>
//     </div>
//     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
//         Zip
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
//     </div>
//   </div>
// </form>

//////////////////
    
  )
}