export default function WhereForm({formData, onChange}) {
  return (
    <form className="px-8 m-8 pb-0 mb-0 my-4 text-teal-600">
       <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full md:w-full px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="address">
             Address
           </label>
           <input className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-600" id="address" name="address" type="text" placeholder="Carrying Boxes" value={formData.address} onChange={e => onChange(e)}/>
           {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
         </div>
         
       </div>
       <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="city">
             City
           </label>
           <input className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-600" id="city" name="city" type="text" placeholder="Carrying Boxes" value={formData.city} onChange={e => onChange(e)}/>
           {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="postcode">
            Postal Code
          </label>
          <input className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-600" id="postcode" name="postcode" type="text" placeholder="Carrying Boxes" value={formData.postcode} onChange={e => onChange(e)}/>
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
       </div>
     </form>
    )
}