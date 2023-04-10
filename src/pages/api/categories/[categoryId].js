import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const { categoryId } = req.query;
    console.log(categoryId)
    const category = await prisma.category.findUnique({
      where: {
        id: parseInt(categoryId)
      }
    })
    console.log(category)
    res.json({ category })
  }
}