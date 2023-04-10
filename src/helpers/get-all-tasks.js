import axios from "axios";
import { PrismaClient } from "@prisma/client";

export default async function getAllTasks() {

  const tasksCall = await axios.get('http://localhost:3000/api/tasks')
  const addressesCall = await axios.get('http://localhost:3000/api/addresses')

  const tasks = tasksCall.data.tasks;
  const addresses = addressesCall.data.addresses[0];
console.log(`These are the ${addresses}`)
  const allTasks = {

  }
  // console.log(tasks.data.tasks[0])
  return allTasks;
}