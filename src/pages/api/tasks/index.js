import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const tasks = await prisma.task.findMany()
    // console.log(tasks)
    res.json({ tasks })
  } else if (req.method === 'POST') {
    // console.log(req.body)
    const { name, desc, start, end, category, nbHelpers, image, address, city, postcode } = req.body

    const categoryData = await prisma.category.findUnique({
      where: {
        id: 1
      }
    })

    const userData = await prisma.user.findUnique({
      where: {
        id: 1
      }
    })

    const addressData = await prisma.address.findUnique({
      where: {
        id: 1
      }
    })

    const createdTask = await prisma.task.create({
      data: {
        name,
        description: desc,
        startDate: start,
        endDate: end,
        categoryId: categoryData.id,
        nbHelpers: Number(nbHelpers),
        image: "https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        addressId: addressData.id,
        userId: userData.id
      }
    })

    res.send('POST api/tasks')
  }
}

