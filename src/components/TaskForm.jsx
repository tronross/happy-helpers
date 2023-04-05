import { useState } from "react"

export default function TaskForm() {
  const [formFields, setFields] = useState({
    
  });


  return (
    <form action="/api/form" method="POST" className="flex flex-col text-white caret-black items-center m-4 border-solid border-2 w-[600px]">
      <h1 className="text-[28px]">New Task</h1>
      <label htmlFor="name">Task Name</label>
      <input type="text" id="name" name="name" className="text-teal-800" required />

      <label htmlFor="start">Description</label>
      <input type="text" id="desc" name="desc" className="text-teal-800"  required />

      <label htmlFor="start">Start Date</label>
      <input type="text" id="start" name="start" className="text-teal-800"  required />

      <label htmlFor="end">End Date</label>
      <input type="text" id="end" name="end" className="text-teal-800"  required />

      <label htmlFor="category">Category</label>
      <input type="text" id="category" name="category" className="text-teal-800"  required />

      <label htmlFor="numHelpers">Helpers Needed</label>
      <input type="text" id="numHelpers" name="numHelpers" className="text-teal-800"  required />

      <label htmlFor="image">Upload Photo</label>
      <input type="text" id="image" name="image" className="text-teal-800"  required />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" className="text-teal-800"  required />

      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" className="text-teal-800"  required />

      <label htmlFor="postcode">Postal Code</label>
      <input type="text" id="postcode" name="postcode" className="text-teal-800"  required />

      <button type="submit" onClick={handleSubmit} className="p-4 bg-purple-600 m-2">Submit</button>
    </form>
  )
}


