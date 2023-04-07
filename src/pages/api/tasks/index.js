import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const tasks = await prisma.task.findMany()
    console.log(tasks)
    res.json({ tasks })
  } else if (req.method === 'POST') {
    console.log(req.body)
    res.send('POST api/tasks')
  }
}