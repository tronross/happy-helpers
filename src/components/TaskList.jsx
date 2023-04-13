import { useRouter } from 'next/router'
import Task from '../components/Task'



export default function TaskList(props) {
  
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/task/${id}`)
  }

  const tasks = props.tasks.map(task => {
    
    
    return (
      <li key={task.id}><Task
          id={task.id}
          name={task.name}
          description={task.description}
          category={task.category}
          user={task.userId}
          image={task.image}
          status={task.status}
          city={task.city}
          distance={task.distance}
          onClick={onClick}
          />
        </li>
    )
  })
  return (
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center overflow-auto">{ tasks }</ul>
  );
}