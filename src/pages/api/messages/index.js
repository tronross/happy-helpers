import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // const { offerId } = req.query;
    // const offer = await prisma.offer.findUnique({
    //   where: {
    //     id: parseInt(offerId)
    //   }
    // });
    // console.log(offer);
    // res.json({ offer });

    // res.status(200).send('ok');
  }
}