import { useState } from "react"
import axios from "axios";

export default function TaskForm({formData, setFormData}) {
  
  const onChange = (event) => {
    setFormData(prev => ({...prev, [`${event.target.name}`]: event.target.value}));
    console.log(formData)
  };

  const handleSubmit = async () => {
      await axios.post('http://localhost:3000/api/tasks', formData);
  }

  return (
    <div className="flex flex-col">
      <input type="text" id="name" name="name"placeholder="Name" value={formData.name} onChange={onChange} required />

      <input type="text" id="desc" name="desc" placeholder="Description" value={formData.desc} onChange={onChange} required />

      <input type="text" id="start" name="start"placeholder="Start Date" value={formData.start} onChange={onChange} required />

      <input type="text" id="end" name="end"placeholder="End Date" value={formData.end} onChange={onChange} required />

      <input type="text" id="category" name="category" placeholder="Category" value={formData.category} onChange={onChange} required />

      <input type="number" min="1" step="1" id="nbHelpers" name="nbHelpers"placeholder="Helpers Needed" value={formData.nbHelpers} onChange={onChange} required />

      <input type="text" id="image" name="image"placeholder="Upload Image" value={formData.image} onChange={onChange} required />

      <input type="text" id="address" name="address"placeholder="Address" value={formData.address} onChange={onChange} required />

      <input type="text" id="city" name="city"placeholder="City" value={formData.city}onChange={onChange} required />

      <input type="text" id="postcode" name="postcode"placeholder="Postal Code" value={formData.postcode} onChange={onChange} required />

      <button type="submit" onClick={handleSubmit} className="p-4 bg-purple-600 m-2">Submit</button>
      </div>
  )
}