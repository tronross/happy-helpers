import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { addressId } = req.query;
    const address = await prisma.address.findUnique({
      where: {
        id: parseInt(addressId)
      }
    })
    console.log(address)
    res.json({ address })
  } else if (req.method === 'PUT') {
    console.log(req.body)
    const { addressId } = req.query;
    console.log(`You have reached PUT api/addresses/${addressId}`)
    res.status(200).send('ok');
  }
}