
export default function sortTasksByDistance(tasks) {
  tasks.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
  console.log(tasks)
  return tasks;
}
