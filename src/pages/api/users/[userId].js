import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = req.query;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId)
      }
    })
    console.log(user)
    res.json({ user })

  } if (req.method === 'PUT') {
    
  }

  } if (req.method === 'PATCH') {

    const { userId } = req.query;
    const { field } = req.body;

    if (field === 'stars') {

      const updateStarStatus = await prisma.user.update({
        where: {
          id: parseInt(userId)
        },
        data: {
          stars: { increment: 1 }
        }
      });
      // console.log('updateStarStatus: ', updateStarStatus);
    }

    res.status(200).send('ok');
  }
}

