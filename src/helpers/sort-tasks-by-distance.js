export default function sortTasksByDistance(tasks) {
  const sortedTasks = tasks.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
  return sortedTasks;
}
