import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { taskId } = req.query;
    const task = await prisma.task.findUnique({
      where: {
        id: parseInt(taskId)
      }
    })
    console.log(task)
    res.json({ task })
  } if (req.method === 'PUT') {

    const { taskId } = req.query;
    const { newStatus } = req.body;

    const updateTaskStatus = await prisma.task.update({
      where: {
        id: parseInt(taskId)
      },
      data: {
        status: newStatus
      }
    });

    // console.log('updateTaskStatus: ', updateTaskStatus);
    res.status(200).send('ok');
  }
}