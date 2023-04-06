import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const tasks = await prisma.task.findMany()
  res.json(tasks)
}
