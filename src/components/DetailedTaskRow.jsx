import Button from "./Button";
import DetailedTask from "./DetailedTask";
import Task from "./Task";
import { useEffect, useState } from "react";
import RowButton from "./RowButton";
import { useRouter } from "next/router";

export default function DetailedTaskRow({selectedId, selectedUser, userTasks, sendOffer, offers ,userAddress, rowType}) {
  const [currentTask, setCurrentTask] = useState(selectedId);

  const scrollboxId = `scrollbox${rowType}`
  const buttonsId = `buttonsId${rowType}`
  const changeTask = (id) => { 
    setCurrentTask(id)
  }

  const offerTaskIds = offers.map(offer => (
   offer.taskId 
  ))
console.log(currentTask)
  const router = useRouter();
  const onClick = (id) => {
    setCurrentTask(prev => ({...prev, id}))
    router.push(`/tasks/${id}`)
  }



  const tasks = rowType === "userTasks" ? userTasks.map(task => {
    if (task.id === currentTask) {
      return <li key={task.id} className="snap-center">
        <DetailedTask
          task={task}
          startDate={task.startDate}
          selectedUser={selectedUser}
          sendOffer={sendOffer}
          offerTaskIds={offerTaskIds}
          userAddress={userAddress}
          type="fake"
        />
        </li>
    } else {
      return <li key={task.id} className="snap-center"><Task
          id={task.id}
          name={task.name}
          description={task.description}
          category={task.category}
          user={task.userId}
          image={task.image}
          status={task.status}
          city={task.city}
          distance={task.distance}
          row={true}
          onClick={changeTask}
          />
        </li>
    }
  }) : userTasks.map(task => {
      return <li key={task.id} className="snap-center"><Task
          id={task.id}
          name={task.name}
          description={task.description}
          category={task.category}
          user={task.userId}
          image={task.image}
          status={task.status}
          city={task.city}
          distance={task.distance}
          row={true}
          onClick={onClick}
          />
        </li>
  }) 

 

  

  const scrollLeft = (event) => {
    const scrollBox = document.querySelector(`#scrollbox${rowType}`);
    scrollBox.scrollLeft -= 260;
  }

  const scrollRight = (event) => {
    const scrollBox = document.querySelector(`#scrollbox${rowType}`);
    scrollBox.scrollLeft += 260;
  }
  
  return (
    <div className="w-full">
        <div className="absolute left-[40px] z-10 ">
            <RowButton id={buttonsId} svg='prev' onClick={(event) => scrollLeft(event)}/> 
            </div>
            <div className="absolute right-[40px] z-10 "> 
            <RowButton rowType={rowType} id={buttonsId} svg="next" onClick={(event) => scrollRight(event)}/>  
        </div>
      <div id={scrollboxId} className=".no-scrollbar border-2 mx-10 rounded border-teal-600 flex justify-start list-none overflow-scroll scroll-smooth scrollbar-hide snap-proximity  snap-x relative shadow-xl">
        <div className="flex items-center p-3 task-container">
          {tasks}
        </div>
      </div>
    </div>
  )
};
