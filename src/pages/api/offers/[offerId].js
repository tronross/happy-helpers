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
    /**
     * Loop through all of the offers in the offer array
     * If the offerArray offer.id === { offerId } it is the chosen offer: set offer status to ACCEPTED
     * If the offerArray offer.id !== { offerId } the offer was rejected: set offer status to DENIED
     */
    const winningOfferId = parseInt(req.query.offerId);
    const offerArray = req.body.offerArray;
    
    for (const offer of offerArray) {

      if (offer.id === winningOfferId) {
        await prisma.offer.update({
          where: {
            id: (offer.id)
          },
          data: {
            status: 'ACCEPTED'
          }
        });

      } else {
        await prisma.offer.update({
          where: {
            id: (offer.id)
          },
          data: {
            status: 'DENIED'
          }
        });
      }
    }
    res.status(200).send('ok');
  }
}