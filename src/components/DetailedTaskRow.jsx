import DetailedTask from "./DetailedTask";
import Task from "./Task";
import RowButton from "./RowButton";
import { useEffect } from "react";

export default function DetailedTaskRow({ selectedId, selectedUser, userTasks, sendOffer, offers, userAddress, rowType, setSelectedId, setScroll }) {

  const scrollboxId = `scrollbox${rowType}`
  const buttonsId = `buttonsId${rowType}`
  const taskId = `scroll-pos-${selectedId}`;


  useEffect(() => {
    setScroll(taskId, rowType)
  }, [selectedId])


  const changeTask = (id) => {
    setSelectedId(id)
  }

  const offerTaskIds = offers.map(offer => (
    offer.taskId
  ))


  const tasks = userTasks.map(task => {

    const startDate = task.startDate || task.start_date
    const endDate = task.endDate || task.end_date
    const startDateString = (new Date(startDate).toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric", hour: '2-digit', minute: '2-digit' }));
    const endDateString = (new Date(endDate).toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric", hour: '2-digit', minute: '2-digit' }));

    const calcDistanceProp = function (distance) {
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
        <DetailedTask
          task={task}
          selectedUser={selectedUser}
          sendOffer={sendOffer}
          offerTaskIds={offerTaskIds}
          startDate={startDateString}
          endDate={endDateString}
          distance={distanceProp}
          userAddress={userAddress}
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
        <RowButton id={buttonsId} svg='prev' onClick={(event) => scrollLeft(event)} />
      </div>
      <div className="absolute right-[40px] z-10 ">
        <RowButton rowType={rowType} id={buttonsId} svg="next" onClick={(event) => scrollRight(event)} />
      </div>
      <div id={scrollboxId} className=".no-scrollbar mx-[8em] rounded flex justify-start list-none overflow-scroll overflow-hidden scroll-smooth scrollbar-hide snap-proximity  snap-x relative ">
        <div className="flex items-center task-container">
          {tasks}
        </div>
      </div>
    </div>
  )
};
