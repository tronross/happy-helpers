import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = req.query;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId)
      }
    });
    console.log(user);
    res.json({ user });

  } else if (req.method === 'PUT') {
    console.log(req.body);
    const { userId } = req.query;
    res.status(200).send('ok');
    console.log(`You have reached PUT api/users/${userId}`);
    await prisma.user.update({
      where: {
        id: parseInt(userId)
      },
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        skills: req.body.skills,
        description: req.body.description
      }
    });
  } else if (req.method === 'PATCH') {

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

