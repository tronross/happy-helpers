import Task from "components/Task";


export default function TaksList(props) {

  const tasks = props.tasks.map(task => {
    return <Task
      key={task.id}
      name={task.name}
      description={task.description}
      category={task.category}
      user={task.user}
      startDate={task.startDate}
      endDate={task.endDate}
      status={task.status}
      nbHelpers={task.nbHelpers}
      distance={task.distance}
    />;
  });

  return (
    <ul>{tasks}</ul>
  );
}