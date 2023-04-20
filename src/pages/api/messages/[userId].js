import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {

  if (req.method === 'GET') {

    const userId = parseInt(req.query.userId);

    const messages = await prisma.message.findMany({
      where: {
        userId: parseInt(userId)
      }
    });

    res.json({ messages });
  }
}