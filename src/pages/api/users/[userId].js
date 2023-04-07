import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const { userId } = req.query;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId)
      }
    })
    console.log(user)
    res.json({ user })
  } if (req.method === 'PUT') {
    console.log(req.body)
    const { userId } = req.query;
    res.status(200).send('ok');
    console.log(`You have reached PUT api/users/${userId}`)
  }
}