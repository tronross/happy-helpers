import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { taskId } = req.query;
    const task = await prisma.task.findUnique({
      where: {
        id: parseInt(taskId)
      }
    })
    res.json({ task })
  } if (req.method === 'PATCH') {

    const { taskId } = req.query;
    const { newStatus } = req.body;
    const { starred } = req.body;

    const updateTaskStatus = await prisma.task.update({
      where: {
        id: parseInt(taskId)
      },
      data: {
        status: newStatus,
        starred: starred
      }
    });

    res.status(200).send('ok');
  }
}