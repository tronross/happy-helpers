import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const addresses = await prisma.address.findMany()
    // console.log(addresses)
    res.json({ addresses })
  } else if (req.method === 'POST') {
    console.log(req.body)
    res.status(200).send('ok');
    console.log('You have reached POST api/addresses')
  }
}