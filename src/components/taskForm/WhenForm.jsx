import { useState } from "react"
import Datepicker from "react-tailwindcss-datepicker"
import { useEffect } from "react"


export default function WhenForm({formData, setFormData}) {
  const [startTime, setStartTime] = useState({
    hour: "01",
    minute: "00",
    ampm: "PM"
  })
  const [endTime, setEndTime] = useState({
    hour: "1",
    minute: "00",
    ampm: "PM"
  })

  useEffect(() => {
    const startDate = new Date(`2023-04-29 01:00:00`)
    const endDate = new Date(`2023-04-29 01:00:00`)
    setFormData(prev => ({...prev, startDate}))
    setFormData(prev => ({...prev, endDate}))
  }, [])
  
  
  const updateTime = async (e) => {
    const value = e.target.value;
    const selected = e.target.id;
    const name = e.target.name;

    console.log(value)
    

    if (name === "startTime") {
      setStartTime(prev => ({...prev, [selected]: value}))
    } else if (name === "endTime") {
      setEndTime(prev => ({...prev, [selected]: value}))
    }
    // new Date('2023-04-29 18:00+0500')
    const startDate = new Date(`2023-04-29 ${startTime.hour}:${startTime.minute}:00`)
    const endDate = new Date(`2023-04-29 ${endTime.hour}:${endTime.minute}:00`)

    setFormData(prev => ({...prev, startDate}))
    setFormData(prev => ({...prev, endDate}))
    console.log(startDate, endDate)
  }


  return (
    <form className="px-8 m-8 pb-0 mb-0 my-4 text-teal-600">
       <div className="flex flex-wrap -mx-3 mb-6">
       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="startDate">
             Start Date
           </label>
           <Datepicker asSingle="true" primaryColor={"teal"} className="bg-red"/>



        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
            End Date
          </label>
          <Datepicker asSingle="true" primaryColor={"teal"} className="bg-red"/>
        </div>
         
       </div>
       <div className="flex flex-wrap -mx-3 mb-6">
       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="startTime">
            Start Time
          </label>
          
          
          <div className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-600">
              
                <select
                  name="startTime"
                  id="hour"
                  className="bg-transparent appearance-none outline-none"
                  value={startTime.hour} 
                  onChange={e => updateTime(e)}
                >
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                  <option value="05">5</option>
                  <option value="06">6</option>
                  <option value="07">7</option>
                  <option value="08">8</option>
                  <option value="09">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <span className="mr-2">:</span>
                <select
                name="startTime"
                  id="minute"
                  className="bg-transparent appearance-none outline-none mr-3"
                  value={startTime.minute} 
                  onChange={e => updateTime(e)}>
                  <option value="0">00</option>
                  <option value="30">30</option>
                </select>
                <select
                  name="startTime"
                  id="ampm"
                  className="bg-transparent appearance-none outline-none"
                  value={startTime.ampm} 
                  onChange={e => updateTime(e)}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>

        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="endTime">
            End Time
          </label>
          
          
          <div className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-600">
              
                <select
                  name="endTime"
                  id="hour"
                  className="bg-transparent appearance-none outline-none"
                  value={endTime.hour} 
                  onChange={e => updateTime(e)}
                >
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                  <option value="05">5</option>
                  <option value="06">6</option>
                  <option value="07">7</option>
                  <option value="08">8</option>
                  <option value="09">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <span className="mr-2">:</span>
                <select
                name="endTime"
                  id="minute"
                  className="bg-transparent appearance-none outline-none mr-3"
                  value={endTime.minute} 
                  onChange={e => updateTime(e)}>
                  <option value="0">00</option>
                  <option value="30">30</option>
                </select>
                <select
                  name="endTime"
                  id="ampm"
                  className="bg-transparent appearance-none outline-none"
                  value={endTime.ampm} 
                  onChange={e => updateTime(e)}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>

        </div>
       </div>
     </form>
    )
}