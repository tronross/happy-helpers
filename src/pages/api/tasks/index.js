import { PrismaClient } from '@prisma/client';

export async function getTasks() {
  const prisma = new PrismaClient();
  const tasks = await prisma.task.findMany()
  return tasks;
}

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const tasks = await prisma.task.findMany()
  res.json(tasks)
}
