export default function sortTasksByStartTime(tasks) {
  tasks.sort((a, b) => a.startDate - b.startDate);
  console.log(tasks)
  return tasks;
}