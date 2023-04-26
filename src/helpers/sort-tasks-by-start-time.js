export default function sortTasksByStartTime(tasks) {
  const sortedTasks = tasks.sort((a, b) => a.startDate ? a.startDate - b.startDate : a.start_date - b.start_date);
  return sortedTasks;
}