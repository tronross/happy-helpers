import Task from '../components/Task'



export default function TaskList(props) {
  
  const onClick = (id) => {
    window.location = (`/task/${id}`)
  }

  const tasks = props.tasks.map(task => {
    // console.log(task)
    const startDate = task.startDate || task.start_date
    const startDateString = (new Date(startDate).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:'2-digit', minute: '2-digit'})); 

    // Provide more meaningful description for distance, where it is less than 1km (also helps with rounding errors)
    const calcDistanceProp = function (distance) {
      if (distance <= 1) {
        return 'nearby';
      } else {
        return `${distance}km`
      }
    }

    const distanceProp = calcDistanceProp(task.distance);
    // Ternary operator is used below to accomodate differing object structures (nested address object vs flat) returned by Prisma calls
    const city = task.city ? task.city : task.address.city;
    return (
      <li key={task.id}><Task
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
        onClick={onClick}
      />
      </li>
    )
  })
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">{tasks}</ul>
  );
}