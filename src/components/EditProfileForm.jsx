import { useState } from "react";
import axios from "axios";

export default function EditProfileForm({ editProfileFormData, setEditProfileFormData }) {


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

    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            First Name
          </label>
          <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
          <p class="text-red text-xs italic">Please fill out this field.</p>
        </div>
        <div class="md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
            Last Name
          </label>
          <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe" />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
            Password
          </label>
          <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************" />
          <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-2">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            City
          </label>
          <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque" />
        </div>
        <div class="md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            State
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
            Zip
          </label>
          <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210" />
        </div>
      </div>
    </div>
  );
}
  // OLD //
  // <div className="flex flex-col">
  //   <input type="text" id="firstName" name="firstName" placeholder="first name" value={editProfileFormData.firstName} onChange={onChange} required />
  //   <input type="text" id="lastName" name="lastName" placeholder="last name" value={editProfileFormData.lastName} onChange={onChange} required />

  //   <input type="text" id="description" name="description" placeholder="description" value={editProfileFormData.description} onChange={onChange} required />

  //   <input type="text" id="phone" name="phone" placeholder="phone number" value={editProfileFormData.phone} onChange={onChange} required />

  //   <input type="text" id="address" name="address" placeholder="address" value={editProfileFormData.address} onChange={onChange} required />

  //   <input type="text" id="city" name="city" placeholder="city" value={editProfileFormData.city} onChange={onChange} required />

  //   <input type="text" id="postcode" name="postcode" placeholder="postcode" value={editProfileFormData.city} onChange={onChange} required />

  //   <input type="text" id="skills" name="skills" placeholder="skills" value={editProfileFormData.skills} onChange={onChange} required />

  //   <input type="text" id="organizations" name="organizations" placeholder="organizations" value={editProfileFormData.organizations} onChange={onChange} required />

  /* <button type="submit" className="p-4 bg-purple-600 m-2">Submit</button> */ 
    // </div >
  
