
export default function addCoordsToTasks(tasks, addresses) {
    for (const task of tasks) {
      const taskAddress = addresses[task.addressId]

      const latitude = taskAddress.latitude;
      const longitude = taskAddress.longitude;
      console.log(latitude, longitude)

      task.latitude = `${latitude}`;
      task.longitude = `${longitude}`;

      console.log(task)
    }

}

