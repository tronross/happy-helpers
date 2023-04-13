export default function sortTasksByStartTime(tasks) {
  // console.log(tasks)
  const sortedTasks = tasks.sort((a, b) => a.startDate ? a.startDate - b.startDate : a.start_date - b.start_date);
  return sortedTasks;
}