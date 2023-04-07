import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
 if (req.method === 'POST') {
  console.log(req.body)
  res.send('POST api/offers')
 }
}