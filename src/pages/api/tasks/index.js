import { PrismaClient } from '@prisma/client';

export async function getTasks() {
  
  const tasks = await prisma.task.findMany()
  return tasks;
}

export default async function handler(req, res) {
  const prisma = new PrismaClient();
 if (req.method === 'GET') {
  const tasks = await prisma.task.findMany()
  console.log(tasks)
  res.json({tasks})
 } if (req.method === 'POST') {
  console.log(req.body)
  res.send('hello')
 }
}
