
export default function addCoordsToTasks(tasks, addresses) {
  tasks.sort((a, b) => a.id - b.id);
  
  for (const task of tasks) {
    const taskAddress = addresses[task.addressId - 1]
    
    const latitude = taskAddress.latitude;
    const longitude = taskAddress.longitude;
    const city = taskAddress.city
    console.log(latitude, longitude, city)
    
    task.latitude = `${latitude}`;
    task.longitude = `${longitude}`;
    task.city = city;
    // console.log(task)
    console.log(`Task test: Task Name: ${task.name} ID: ${task.id} city ${task.city}`)
  }
}

