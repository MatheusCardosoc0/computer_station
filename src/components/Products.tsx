import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { productProps } from '../utils/Interfaces'

const Products = () => {

  const [products, setProducts]= useState<productProps[]>([])

  async function getProductsInServer(){
    try {
      const products = await axios.get('http://localhost:3000/api/hello').then(data => setProducts(data.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductsInServer()
  },[])

  console.log(products)

  return (
    <section>
      {products.map(product => (
        <div>
          {product.price}
        </div>
      ))}
    </section>
  )
}

export default Products