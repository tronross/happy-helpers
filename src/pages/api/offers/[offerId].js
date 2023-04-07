import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const { offerId } = req.query;
    const offer = await prisma.offer.findUnique({
      where: {
        id: parseInt(offerId)
      }
    })
    console.log(offer)
    res.json({ offer })
  } else if (req.method === 'PUT') {
    console.log(req.body)
    const { offerId } = req.query;
    res.status(200).send('ok');
    console.log(`PUT api/offers/${offerId}`)
  }
}