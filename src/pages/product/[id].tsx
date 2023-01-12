import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getProductsInServer } from '../../utils/functions'
import { productProps } from '../../utils/Interfaces'

const Product = () => {
  const[product, setProduct] = useState<productProps | null>(null)

  const id = useRouter()

  async function getProduct(){
    return setProduct(await getProductsInServer(String(id.query.id)))
  }

  useEffect(() => {
    getProduct()
  },[id])

  return (
    <div>{product?.name}</div>
  )
}

export default Product