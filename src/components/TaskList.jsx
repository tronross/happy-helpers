import Task from '../components/Task'

export default function TaskList(props) {

  const tasks = props.tasks.map(task => {
    const startDate = task.startDate || task.start_date
    const startDateString = (new Date(startDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:'2-digit', minute: '2-digit'})); 
    
    return (
      <li key={task.id}><Task
          key={task.id}
          name={task.name}
          description={task.description}
          category={task.category}
          user={task.userId}
          image={task.image}
          status={task.status}
          city={task.city}
          distance={task.distance}
          startDate={startDateString}
          />
        </li>
    )
  })
  return (
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center overflow-auto">{ tasks }</ul>
  );
}