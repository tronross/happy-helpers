import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { offerId } = req.query;
    const offer = await prisma.offer.findUnique({
      where: {
        id: parseInt(offerId)
      }
    });
    console.log(offer)
    res.json({ offer })
  } else if (req.method === 'PATCH') {

    const { offerId } = req.query;
    const { newStatus } = req.body;

    const updateOfferStatus = await prisma.offer.update({
      where: {
        id: parseInt(offerId)
      },
      data: {
        status: newStatus
      }
    });

    // console.log('updateOfferStatus: ', updateOfferStatus);
    res.status(200).send('ok');
  }
}