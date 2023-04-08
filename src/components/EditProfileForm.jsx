import { useState } from "react";
import axios from "axios";

export default function EditProfileForm({editProfileFormData, setEditProfileFormData}) {


  // HELPER FUNCTIONS
  const onChange = (event) => {
    setEditProfileFormData(prev => ({ ...prev, [`${event.target.name}`]: event.target.value }));
    console.log(editProfileFormData);
  };

  // const handleSubmit = async () => {
  //   await axios.post('http://localhost:3000/api/user')
  // }
  // TEMPLATE
  return (
    <div className="flex flex-col">
      <input type="text" id="firstName" name="firstName" placeholder="first name" value={editProfileFormData.firstName} onChange={onChange} required />
      <input type="text" id="lastName" name="lastName" placeholder="last name" value={editProfileFormData.lastName} onChange={onChange} required />

      <input type="text" id="description" name="description" placeholder="description" value={editProfileFormData.description} onChange={onChange} required />

      <input type="text" id="phone" name="phone" placeholder="phone number" value={editProfileFormData.phone} onChange={onChange} required />

      <input type="text" id="address" name="address" placeholder="address" value={editProfileFormData.address} onChange={onChange} required />

      <input type="text" id="city" name="city" placeholder="city" value={editProfileFormData.city} onChange={onChange} required />

      <input type="text" id="postcode" name="postcode" placeholder="postcode" value={editProfileFormData.city} onChange={onChange} required />

      <input type="text" id="skills" name="skills" placeholder="skills" value={editProfileFormData.skills} onChange={onChange} required />

      <input type="text" id="organizations" name="organizations" placeholder="organizations" value={editProfileFormData.organizations} onChange={onChange} required />

      {/* <button type="submit" className="p-4 bg-purple-600 m-2">Submit</button> */}
    </div>
  );
}