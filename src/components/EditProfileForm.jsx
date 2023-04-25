import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"

export default function EditProfileForm({ userId, userAddressId, editProfileFormData, setEditProfileFormData }) {
  const router =useRouter()

  // console.log(userAddressId)
  // HELPER FUNCTIONS
  const onChange = (event) => {
    setEditProfileFormData(prev => ({ ...prev, [`${event.target.name}`]: event.target.value }));
    // console.log(editProfileFormData);
  };

  const handleSubmit = async () => {
    await axios.patch(`http://localhost:3000/api/addresses/${userAddressId}`, editProfileFormData);
    // console.log(userId)
    await axios.put(`http://localhost:3000/api/users/${userId}`, editProfileFormData);
    console.log(editProfileFormData);
    router.refresh();
  };

  // TEMPLATE
  return (
    <div className="flex flex-col items-center mt-3">
      <p className="uppercase font-semibold pb-3">Edit Profile:</p>
      <div className="flex flex-col w-full">
      <input type="text" id="firstName" name="firstName" placeholder="first name" value={editProfileFormData.firstName} onChange={onChange} required className="bg-violet-200 border-b-[1.5px] border-violet-400 mb-3 pb- focus:outline-none"/>

      <input type="text" id="lastName" name="lastName" placeholder="last name" value={editProfileFormData.lastName} onChange={onChange} required className="bg-violet-200 border-b-[1.5px] border-violet-400 mb-3 pb- focus:outline-none" />

      <input type="text" id="phone" name="phone" placeholder="phone number" value={editProfileFormData.phone} onChange={onChange} required className="bg-violet-200 border-b-[1.5px] border-violet-400 mb-3 pb- focus:outline-none" />

      <input type="text" id="address" name="address" placeholder="address" value={editProfileFormData.address} onChange={onChange} required className="bg-violet-200 border-b-[1.5px] border-violet-400 mb-3 pb- focus:outline-none" />

      <input type="text" id="city" name="city" placeholder="city" value={editProfileFormData.city} onChange={onChange} required className="bg-violet-200 border-b-[1.5px] border-violet-400 mb-3 pb- focus:outline-none" />

      <input type="text" id="postcode" name="postcode" placeholder="postcode" value={editProfileFormData.postcode} onChange={onChange} required className="bg-violet-200 border-b-[1.5px] border-violet-400 mb-3 pb- focus:outline-none" />

      <input type="text" id="email" name="email" placeholder="email" value={editProfileFormData.email} onChange={onChange} required className="bg-violet-200 border-b-[1.5px] border-violet-400 mb-3 pb- focus:outline-none" />

      <p className="uppercase text-sm font-semibold">Description:</p>
      <textarea type="text" id="description" name="description" placeholder="description" value={editProfileFormData.description} onChange={onChange} required className="bg-violet-200 border-b-[1.5px] border-violet-400 mb-3 pb- focus:outline-none resize-none  scrollbar form-scroll" />

      <p className="uppercase text-sm font-semibold">Skills:</p>
      <textarea type="text" id="skills" name="skills" placeholder="skills" value={editProfileFormData.skills} onChange={onChange} required  className="bg-violet-200 border-b-[1.5px] border-violet-400 mb-3 pb- focus:outline-none resize-none  scrollbar form-scroll" />

      {/* <input type="text" id="organizations" name="organizations" placeholder="organizations" value={editProfileFormData.organizations} onChange={onChange} required /> */}

      </div>
      <button type="submit" onClick={handleSubmit} className="w-12/3 inline-flex justify-center items-center gap-2 bg-violet-300 hover:bg-violet-400  hover:border-violet-300 hover:text-white active:bg-violet-500 border-[1.5px] border-violet-400 px-7 py-1 rounded-full text-violet-800 mt-3 uppercase font-semibold text-sm">Save</button>
    </div >
  );
}
