export default function addCoordsToTasks(tasks, addresses) {
  addresses.sort((a, b) => a.id - b.id);

  for (const task of tasks) {
    const taskAddress = addresses.filter(address => address.id === task.addressId)[0];

    const latitude = taskAddress.latitude;
    const longitude = taskAddress.longitude;
    const city = taskAddress.city

    task.latitude = `${latitude}`;
    task.longitude = `${longitude}`;
    task.city = city;
  }
}

