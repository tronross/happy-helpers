import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const organizations = await prisma.organization.findMany()
    console.log(organizations)
    res.json({ organizations })
  }
}