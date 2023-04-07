import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
if (req.method === 'PUT') {
  console.log(req.body)
  const { organizationId } = req.query;
  res.send(`api/users/${organizationId}`)
 }
}