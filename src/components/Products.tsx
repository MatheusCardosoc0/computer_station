import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getProductsInServer } from '../utils/functions'
import { productProps } from '../utils/Interfaces'
import CardProducts from './CardProducts'
import Loading from './Loading'

const Products = () => {

  const [products, setProducts]= useState<productProps[]>([])

  async function dispatchProducts(){
    setProducts(await getProductsInServer())
  } 

  useEffect(() => {
    dispatchProducts()
  },[])

  if(products.length === 0) return <Loading />

  return (
    <section className='flex justify-center gap-5 mt-16 w-[5rem] md:w-full max-w-[1258px] pb-10'>
      {products?.map(product => (
        <CardProducts product={product} />
      ))}
    </section>
  )
}

export default Products