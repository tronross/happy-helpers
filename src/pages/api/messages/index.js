import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const message = req.body.params;
    const result = await prisma.message.create({
      data: message
    });

    res.json({ result });
  }
}