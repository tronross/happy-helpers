import { useState } from "react"
import Datepicker from "react-tailwindcss-datepicker"
import { useEffect } from "react"


export default function WhenForm({ formData, setFormData }) {
  const [startTime, setStartTime] = useState({
    hour: formData.startTime.hour,
    minute: formData.startTime.minute,
    ampm: formData.startTime.ampm
  })
  const [endTime, setEndTime] = useState({
    hour: formData.endTime.hour,
    minute: formData.endTime.minute,
    ampm: formData.endTime.ampm
  })

  const [startDate, setStartDate] = useState({
    startDate: undefined
  });

  const [endDate, setEndDate] = useState({
    endDate: undefined
  });

  const [check, setCheck] = useState(false);


  const handleStartDate = (newDate) => {
    console.log("newValue:", newDate.startDate);

    if (!check) {
      setStartDate(newDate);
      setEndDate(newDate)
    } else {
      setStartDate(newDate);
    }
  }

  const handleEndDate = (newDate) => {
    console.log("newValue:", newDate.endDate);
    setEndDate(newDate);
  }

  const updateTime = (e) => {
    const value = e.target.value;
    const selected = e.target.id;
    const name = e.target.name;

    if (name === "startTime") {
      setStartTime(prev => ({ ...prev, [selected]: value }))
    } else {
      setEndTime(prev => ({ ...prev, [selected]: value }))
    }
  }

  useEffect(() => {
    console.log(startDate,)
    const AMPM = (hour, ampm) => {
      if (ampm === "AM") {
        return hour
      } else {
        switch (hour) {
          case "1": return "13"
          case "2": return "14"
          case "3": return "15"
          case "4": return "16"
          case "5": return "17"
          case "6": return "18"
          case "7": return "19"
          case "8": return "20"
          case "9": return "21"
          case "10": return "22"
          case "11": return "23"
          case "12": return "24"
        }
      }
    }


    const newStartDate = new Date(`${startDate.startDate} ${AMPM(startTime.hour, startTime.ampm)}:${startTime.minute}:00`)

    const newEndDate = new Date(`${endDate.endDate} ${AMPM(endTime.hour, endTime.ampm)}:${endTime.minute}:00`)

    setFormData(prev => ({ ...prev, startDate: newStartDate }))
    setFormData(prev => ({ ...prev, endDate: newEndDate }))
  }, [startTime, endTime, startDate, endDate])




  const currentEndDate = check === true ? endDate : startDate;
  console.log("CHECK CHECK:", check)

  const handleCheck = async () => {
    await setCheck(prev => !prev)
  }


  useEffect(() => {
    console.log("use effect:", check)
    console.log(formData)
    check === !true ? setFormData(prev => ({ ...prev, endDate: startDate })) : setFormData(prev => ({ ...prev, endDate: endDate }))
  }, [check])

  return (
    <form className="px-8 m-8 pb-0 mb-0 my-4 text-violet-800 font-fredoka">
      <div className="mb-2 flex items-center">
        <input name="addressCheck" type="checkbox" className="w-10 accent-violet-600 ml-[-12px] mr-[-6px] hover:cursor-pointer" checked={check} onChange={(e) => handleCheck(e)}></input>
        <label htmlFor="addressCheck" className="hover:cursor-pointer" onClick={(e) => handleCheck(e)}>Multi-Day</label>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="startDate">
            Start Date
          </label>
          <div className="appearance-none block w-full bg-white border border-gray-200 rounded leading-tight">
            <Datepicker asSingle="true" primaryColor="violet" value={startDate}
              onChange={handleStartDate} inputClassName="text-violet-800 font-normal focus:outline-none active:outline-none p-[12px]" useRange={false} />
          </div>



        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="grid-first-name">
            End Date
          </label>
          <div className="appearance-none block w-full  border border-gray-200 rounded leading-tight bg-white">
            <Datepicker asSingle="true" primaryColor={"violet"} value={currentEndDate}
              onChange={handleEndDate} inputClassName="text-violet-800 font-normal active:outline-none focus:outline-none active:outline-none p-[12px]" disabled={!check} useRange={false} />
          </div>
        </div>

      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="startTime">
            Start Time
          </label>


          <div className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-600 bg-white">

            <select
              name="startTime"
              id="hour"
              className="bg-transparent appearance-none outline-none"
              value={startTime.hour}
              onChange={e => updateTime(e)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
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
          <label className="block uppercase tracking-wide text-xs font-semibold mb-2" htmlFor="endTime">
            End Time
          </label>


          <div className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-600 bg-white">

            <select
              name="endTime"
              id="hour"
              className="bg-transparent appearance-none outline-none"
              value={endTime.hour}
              onChange={e => updateTime(e)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
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