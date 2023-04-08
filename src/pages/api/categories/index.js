import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const categories = await prisma.category.findMany()
    console.log(categories)
    res.json({ categories })
  }
}