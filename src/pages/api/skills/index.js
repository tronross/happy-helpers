import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
 if (req.method === 'GET') {
  const skills = await prisma.skill.findMany()
  console.log(skills)
  res.json({skills})
 }
}
