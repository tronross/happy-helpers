import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {

  const userId = parseInt(req.query.userId);

  if (req.method === 'GET') {

    if (req.query.type === 'all') {

      const messages = await prisma.message.findMany({
        where: {
          userId: userId,
          active: true
        },
        orderBy: {
          receivedAt: 'desc'
        }
      });
      res.json({ messages });
    }

    if (req.query.type === 'countUnread') {

      const messageCount = await prisma.message.count({
        where: {
          userId: userId,
          active: true,
          markedRead: false
        }
      });
      res.json({ messageCount });
    }
  }

  // Mark all active messages as read when user opens messages
  if (req.method === 'PATCH') {

    const countUpdated = await prisma.message.updateMany({
      where: {
        userId: userId,
        active: true
      },
      data: {
        markedRead: true
      }
    });
    res.json({ countUpdated });
  }

  /**
   *  Set active = false to a message when the user clicks delete
   *  Note the userId being received is actually the message id of the message we want to update
   */
  if (req.method === 'DELETE') {

    const disactivatedMessage = await prisma.message.update({
      where: {
        id: userId
      },
      data: {
        active: false
      }
    });
    res.json({ disactivatedMessage });
  }
}