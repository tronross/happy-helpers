import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const { organizationId } = req.query;
    const task = await prisma.organization.findUnique({
      where: {
        id: parseInt(organizationId)
      }
    })
    console.log(task)
    res.json({ task })
  } else if (req.method === 'PUT') {
    console.log(req.body)
    const { organizationId } = req.query;
    res.send(`PUT api/users/${organizationId}`)
  }
}