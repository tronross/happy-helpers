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
    console.log(req.body)
    const { taskId } = req.query;
    console.log(`You have reached PUT api/tasks/${taskId}`)
    res.status(200).send('ok');
  }
}