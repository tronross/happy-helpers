import Button from "./Button";
import DetailedTask from "./DetailedTask";
import Task from "./Task";
import { useEffect, useState } from "react";
import RowButton from "./RowButton";

export default function DetailedTaskRow({selectedId, selectedUser, userTasks, sendOffer, offers}) {
  const [currentTask, setCurrentTask] = useState(selectedId);

  const changeTask = (id) => { 
    setCurrentTask(id)
  }

  const offerTaskIds = offers.map(offer => (
   offer.taskId 
  ))



  const tasks = userTasks.map(task => {
    if (task.id === currentTask) {
      return <li key={task.id} className="snap-center">
        <DetailedTask
          task={task}
          startDate={task.startDate}
          selectedUser={selectedUser}
          sendOffer={sendOffer}
          offerTaskIds={offerTaskIds}
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
  })

  const scrollLeft = () => {
    const scrollBox = document.querySelector("#scrollbox");
    scrollBox.scrollLeft -= 260;
  }

  const scrollRight = () => {
    const scrollBox = document.querySelector("#scrollbox");
    scrollBox.scrollLeft += 260;
  }
  
  return (
    <div className="w-full">
        <div className="absolute left-[40px] z-10 ">
            <RowButton svg='prev' onClick={scrollLeft}/> 
            </div>
            <div className="absolute right-[40px] z-10 "> 
            <RowButton svg="next" onClick={scrollRight}/>  
        </div>
      <div id="scrollbox" className=".no-scrollbar border-2 mx-10 rounded border-teal-600 flex justify-start items-center list-none overflow-scroll scroll-smooth scrollbar-hide snap-proximity  snap-x relative shadow-xl">
        <div className="flex p-3 task-container">
          {tasks}
        </div>
      </div>
    </div>
  )
};
