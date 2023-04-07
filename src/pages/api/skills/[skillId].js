import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
 if (req.method === 'GET') {
  const { skillId } = req.query;
  const skill = await prisma.skill.findUnique({
    where: {
      id: parseInt(skillId)
    }
  })
  console.log(skill)
  res.json({skill})
 }
}