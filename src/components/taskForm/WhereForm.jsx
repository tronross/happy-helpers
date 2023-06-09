import { useEffect, useState } from "react"

export default function WhereForm({ formData, onChange, user, setFormData }) {
  const [check, setCheck] = useState(true)

  const handleCheck = async (e) => {
    await setCheck(prev => !prev)
  }

  useEffect(() => {
    check === true ? setFormData(prev => ({ ...prev, address: user.address.address, city: user.address.city, postcode: user.address.postcode })) : setFormData(prev => ({ ...prev, address: "", city: "", postcode: "" }))
  }, [check])

  return (
    <form className="px-8 m-8 pb-0 mb-0 my-4 text-violet-800 font-fredoka">
      <div className="mb-2 flex items-center">
        <input name="addressCheck" type="checkbox" className="w-10 accent-violet-600 ml-[-12px] mr-[-6px] hover:cursor-pointer" checked={check} onChange={(e) => handleCheck(e)}></input>
        <label htmlFor="addressCheck" className="hover:cursor-pointer" onClick={handleCheck}>Same as Home Address</label>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="address">
            Address
          </label>
          <input className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-violet-400" id="address" name="address" type="text" placeholder="" value={formData.address} onChange={e => onChange(e)} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="city">
            City
          </label>
          <input className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-violet-400" id="city" name="city" type="text" placeholder="" value={formData.city} onChange={e => onChange(e)} />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="postcode">
            Postal Code
          </label>
          <input className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-violet-400" id="postcode" name="postcode" type="text" placeholder="" value={formData.postcode} onChange={e => onChange(e)} />
        </div>
      </div>
    </form>
  )
}