import Link from 'next/link'
import React from 'react'
import { EstructurePrice } from '../utils/functions'
import { productProps } from '../utils/Interfaces'

const CardProducts = ({product} : {product: productProps}) => {
  return (
    <Link href={`http://localhost:3000/product/${product.id}`}
     className='bg-gradient-to-tr from-purple-600 to-green-500 rounded-lg w-[16rem] p-2 cursor-pointer hover:brightness-150'>
      <img className='w-[14rem]'
       src={product.imageUrl} />

       <div className='text-xl text-white drop-shadow-[1px_1px_1px_black]'>
        <h3 className='font-bold'>{product.name}</h3>
        <span className='text-2xl text-yellow-400'>
          R${EstructurePrice(product.price)}</span>
       </div>
    </Link>
  )
}

export default CardProducts