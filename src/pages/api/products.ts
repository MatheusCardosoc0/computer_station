// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

async function getProducts(){
  const products = await prisma.product.findMany()

  return products
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await getProducts()
    res.status(200).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
}
