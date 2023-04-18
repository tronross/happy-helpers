import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  console.log('user api');

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

    const userDataObj = req.body
    console.log(userDataObj)
    for (let key in req.body) {
      if(!req.body[key]){
        delete userDataObj[key]
      }
    }

    await prisma.user.update({
      where: {
        id: parseInt(userId)
      },
      data: {
        firstName: userDataObj.firstName,
        lastName: userDataObj.lastName,
        email: userDataObj.email,
        phone: userDataObj.phone,
        skills: userDataObj.skills,
        description: userDataObj.description
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
