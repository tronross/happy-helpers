import Button from "./Button";
import dayjs from "dayjs";

export default function DetailedTask({selectedTask, selectedUser, task}) {
 
  // const task = selectedTask;
  const user = selectedUser;
  const startDate = new Date(task.startDate);
  const endDate = new Date(task.endDate);
  const buttonName = `Help ${user.firstName}`;

  return (
    <div className=" flex flex-col border-1 shadow-lg m-4 bg-white rounded-lg text-teal-600 w-[40em]">
      <div className="flex p-3"> 
        <div className="">
          {/* <img src={task.image} alt={task.name} className="rounded-lg w-[20em]"></img> */}
        </div>
        <div>
          <section className="px-4">
            <h5 className=" text-xl leading-tight">
            {task.name}
            </h5>
            <p>Helpers Needed: {task.nbHelpers}</p>
            <p className="mb-2 text-base text-teal-700">
            {task.city}
            </p>
            <p className=" text-base">
            {task.description}
            </p>
          </section>
        </div>
      </div>
      <div className="px-5 pb-3 flex justify-between items-end">
        <div>
          <p>Start Date: {startDate.toLocaleDateString(undefined, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})}</p>
          <p>Start Time: {startDate.toLocaleTimeString('en-US')}</p>
          <p>End Date: {endDate.toLocaleDateString(undefined, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})}</p>
          <p>End Time: {startDate.toLocaleTimeString('en-US')}</p>
        </div>  
        <div>
          <div className="text-sm text-gray-700 flex justify-between items-center mb-3">
            <span className="inline-block w-[6em] h-[2em] leading-none bg-teal-200 text-teal-600 rounded-full font-semibold uppercase tracking-wide text-xs text-center flex justify-center items-center mx-4">
            <p>{task.status}</p>
            </span>
            <svg className="h-7 w-7 text-teal-500 hover:fill-current hover:cursor-pointer ml-4"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          </div>
          <div>
            <Button buttonName={buttonName}></Button>
          </div>
        </div>
      </div> 
    </div>
  )
}