export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)
    res.status(200).send('ok');
    console.log(`You have reached PUT api/users/`)
  }
}