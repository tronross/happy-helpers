import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const organizations = await prisma.organization.findMany()
    console.log(organizations)
    res.json({ organizations })
  }
}