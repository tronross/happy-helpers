import DetailedTask from "./DetailedTask";

export default function DetailedTaskRow({selectedTask, selectedUser, userTasks}) {


  const tasks = userTasks.map(task => {
      return <li key={task.id}>
        <DetailedTask
          task={task}
          startDate={task.startDate}
          selectedUser={selectedUser}
        />
        </li>
  })

  return (
    <div className="border-2 w-full mx-10 rounded border-teal-600 flex justify-center list-none overflow-scroll">
      {tasks}
    </div>
  )
};


// selectedTask={selectedTask} selectedUser={selectedUser}