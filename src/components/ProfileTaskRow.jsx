import ProfileTask from "./ProfileTask";
import Task from "./Task";
import RowButton from "./RowButton";
import { useEffect } from "react";

export default function ProfileTaskRow({selectedId, selectedUser, tasks ,userAddress, rowType, setSelectedId, setScroll}) {
  
  const scrollboxId = `scrollbox${rowType}`
  const buttonsId = `buttonsId${rowType}`
  const taskId = `scroll-pos-${selectedId}`;



  useEffect(() => {
    setScroll(taskId, rowType)
  }, [selectedId]) 
  

  

const changeTask = (id) => { 
    setSelectedId(id)
  }


  const infoTasks = tasks.map(task => {

    const startDate = task.startDate || task.start_date
    const endDate = task.endDate || task.end_date
    const startDateString = (new Date(startDate).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:'2-digit', minute: '2-digit'})); 
    const endDateString = (new Date(endDate).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:'2-digit', minute: '2-digit'})); 

    const calcDistanceProp = function(distance) {
      if (distance <= 1) {
        return 'nearby';
      } else {
        return `${distance}km`
      }
    }
  
    const distanceProp = calcDistanceProp(task.distance);
    
    const city = task.city ? task.city : task.address.city;

    if (task.id === selectedId) {
      return <li key={task.id} className="snap-center">
        <ProfileTask
          task={task}
          startDate={startDateString}
          endDate={endDateString}
          distance={distanceProp}
          taskId={taskId}
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
          city={city}
          distance={distanceProp}
          startDate={startDateString}
          onClick={changeTask}
          row={true}
          />
        </li>
    }
  })
  

  const scrollLeft = () => {
    const scrollBox = document.querySelector(`#scrollbox${rowType}`);
    scrollBox.scrollLeft -= 260;
  }

  const scrollRight = () => {
    const scrollBox = document.querySelector(`#scrollbox${rowType}`);
    scrollBox.scrollLeft += 260;
  }
  
  return (
    <div className="flex w-[100%]">
        <div className="z-10 ">
            <RowButton id={buttonsId} svg='prev' onClick={scrollLeft}/> 
        </div>
        <div id={scrollboxId} className=".no-scrollbar rounded flex justify-start list-none overflow-scroll overflow-hidden scroll-smooth scrollbar-hide snap-proximity  snap-x relative ">
        <div className="flex items-center task-container">
          {infoTasks}
        </div>
      </div>
        <div className="z-10 "> 
            <RowButton rowType={rowType} id={buttonsId} svg="next" onClick={scrollRight}/>  
        </div>
    </div>
  )
};
