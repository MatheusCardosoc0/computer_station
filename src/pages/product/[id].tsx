import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import ProductEmphasis from '../../components/ProductEmphasis'
import Products from '../../components/Products'
import { useDataContext } from '../../context/UseDataContext'
import { getProductsInServer } from '../../utils/functions'
import { productProps } from '../../utils/Interfaces'

const Product = () => {
  

  const id = useRouter()

  const {products} = useDataContext()

  const [productActual, setProductActual] = useState<productProps |null | undefined>(null)

  async function getProduct() {
    const array = products.find(product => product.id === id.query.id)

    setProductActual(array)
  }

  useEffect(() => {
    getProduct()
  },[id])

  if (!products) return <Loading />

  return (
    <section className='flex flex-col justify-center gap-20 items-center'>
      <ProductEmphasis product={productActual} />

      <h3 className='mx-auto text-3xl text-white'>
        Produtos Relacionados:
      </h3>

      <div className='overflow-x-scroll w-[60%] scrollex'>
        <Products idProduct={String(id.query.id)} />
      </div>
    </section>
  )
}

export default Product