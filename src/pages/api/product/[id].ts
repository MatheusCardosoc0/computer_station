import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

async function getProducts(id: string){
  const products = await prisma.product.findUnique({
    where: {
      id
    }
  })

  return products
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await getProducts(String(req.query.id))
    res.status(200).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
}