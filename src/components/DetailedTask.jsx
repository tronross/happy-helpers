import { useState } from "react";
import Button from "./Button";

export default function DetailedTask({selectedUser, task, sendOffer, offerTaskIds, taskId, type, userAddress, distance, startDate, endDate}) {

  const [offerSent, setOfferSent] = useState(offerTaskIds.includes(task.id));
  const user = selectedUser;
  const buttonName =  offerSent ? 'Offer Sent' :`Help ${user.firstName}`;

  const buttonStyle = offerSent ? "bg-gray-500" : "bg-teal-600 bg-teal-600 hover:bg-teal-700 active:bg-teal-800";
  const disabled = offerSent;


  const handleClick = () => {
    if (type === "fake") {
      return
    } else {
        sendOffer(task.id, 2, setOfferSent)
    }
  }

  const getStyle = (status) => {
    switch(status) {
      case 'OPEN':  return "inline-block min-w-[6em] max-w-[8em] h-[2em] leading-none bg-teal-200 text-teal-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
      case 'PENDING': return "inline-block min-w-[6em] max-w-[8em] h-[2em] leading-none bg-violet-200 text-violet-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
      case 'COMPLETE': return "inline-block min-w-[6em] max-w-[8em] h-[2em] leading-none bg-amber-200 text-amber-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center";
    }
  }
  
  const statusColor = getStyle(task.status)


  return (
    <div className=" flex flex-col justify-between border-1 shadow-lg m-4 bg-white rounded-lg text-teal-600 w-[40em] h-[20em] border-2 border-teal-600" id={taskId}>
      <div className="flex p-3"> 
        <div className="max-w-[16em] w-2/7">
          <img src={task.image} alt={task.name} className="rounded-lg w-[20em]"></img>
        </div>
        <div className="flex flex-col  pl-5 w-5/6 mt-3">
            <h5 className=" text-xl leading-tight mb-1">
            {task.name}
            </h5>
            <p className="mb-2 text-base text-teal-700">
            {task.city}
            </p>
            <p className=" text-base">
            {task.description || task.desc}
            </p>
        </div>
      </div>
      <div>
      <div className="px-5 pb-3 flex justify-between items-end">
        <div>
          <p>Start: {startDate}</p>
          <p>End: {endDate}</p>
        </div> 
        <div className="flex flex-col items-center mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <div className="flex flex-col items-center">

          <p>{task.address.city || userAddress.city}</p>
          <p>{task.address.postcode || userAddress.postcode}</p>
        </div>
        </div> 
      </div> 
      <div className="flex mx-4 mb-4 justify-between items-center" >
        <div className="flex items-center">
            <span className={statusColor}>
            <p>{task.status}</p>
            </span>
            <div className="flex items-center">
      <p className="text-teal-600 pl-4">{distance}</p>
      </div>
          </div>
            <Button disabled={disabled} buttonName={buttonName} buttonStyle={buttonStyle} onClick={handleClick}></Button>          
        </div>
    </div>
    </div>
  )
}