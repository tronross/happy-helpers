
export default function addCoordsToTasks(tasks, addresses) {
  for (const task of tasks) {
    const taskAddress = addresses[task.addressId]

    const latitude = taskAddress.latitude;
    const longitude = taskAddress.longitude;
    const city = taskAddress.city
    console.log(latitude, longitude, city)

    task.latitude = `${latitude}`;
    task.longitude = `${longitude}`;
    // console.log(task)
  }
}

