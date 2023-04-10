// import axios from "axios";
// import { PrismaClient } from "@prisma/client";



export default function getAllTasks(tasks, addresses) {

  // const prisma = new PrismaClient();
  
  // const tasks = await prisma.task.findMany()
  // const addresses = await prisma.address.findMany()
  
  
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

