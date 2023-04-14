import getDistance from './get-distance';

export default function addDistanceToTasks(tasks, user) {

  const userLat = user.address.latitude;
  const userLong = user.address.longitude;

  for (const task of tasks) {
    const taskLat = task.address.latitude;
    const taskLong = task.address.longitude;

    const distance = getDistance(userLat, userLong, taskLat, taskLong);

    task.distance = Math.round(distance);
  }
}