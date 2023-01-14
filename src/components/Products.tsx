import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDataContext } from '../context/UseDataContext'
import { getProductsInServer } from '../utils/functions'
import { productProps } from '../utils/Interfaces'
import CardProducts from './CardProducts'
import Loading from './Loading'

interface ProdProps{
  idProduct?: string
}

const Products = ({idProduct} : ProdProps) => {

  const {products, setProducts} = useDataContext()

  async function dispatchProducts(){
      setProducts(await getProductsInServer())
      if(idProduct && products.length > 1){
        return setProducts(products.filter(product => product.id !== idProduct))
      }
  } 

  useEffect(() => {
    dispatchProducts() 
  },[products])

  if(products.length === 0) return <Loading />

  return (
    <section className='flex justify-center gap-5 w-[5rem] md:w-full max-w-[1258px] pb-10'>
      {products?.map(product => (
        <CardProducts key={product.id} product={product} />
      ))}
    </section>
  )
}

export default Products