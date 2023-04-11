import getDistance from './get-distance';

export default function addDistanceToTasks(tasks, user) {
  console.log(user)
  const userLat = user.latitude;
  const userLong = user.longitude;

  for (const task of tasks) {
    const taskLat = task.latitude;
    const taskLong = task.longitude;


    const distance = getDistance(userLat, userLong, taskLat, taskLong);

    task.distance = Math.round(distance);

    console.log(distance)
  }
}