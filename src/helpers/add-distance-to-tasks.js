import getDistance from './get-distance';

export default function addDistanceToTasks(tasks, user) {

  const userLat = user.latitude ? user.latitude : user.address.latitude;
  const userLong = user.longitude ? user.longitude : user.address.longitude;

  for (const task of tasks) {
    const taskLat = task.latitude ? task.latitude : task.address.latitude;
    const taskLong = task.longitude ? task.longitude : task.address.longitude;

    const distance = getDistance(userLat, userLong, taskLat, taskLong);

    task.distance = Math.round(distance);
  }
}