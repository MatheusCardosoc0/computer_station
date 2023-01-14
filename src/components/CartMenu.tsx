import React, { useEffect, useState } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { useDataContext } from '../context/UseDataContext'
import { EstructurePrice } from '../utils/functions'
import ProductInCartCard from './ProductInCartCard'

export const CartIcon = () => {

  const { setIsCartMenuActivate } = useDataContext()

  return (
    <button onClick={() => setIsCartMenuActivate((prev: boolean) => setIsCartMenuActivate(!prev))}>
      <BsFillCartFill />
    </button>
  )
}




export const CartMenu = () => {

  const { isCartMenuActivate, productInCart,totalValue } = useDataContext()

  

  

  if (isCartMenuActivate) {
    return (
      <section className='fixed left-0 mt-[50px] h-[100%] gap-10 w-1/2 md:w-1/3 bg-gradient-to-tr from-black/40 via-black/40 to-purple-500 flex flex-col items-center overflow-y-scroll scrollex'>
        <h2 className='mt-10 font-serif text-3xl text-teal-400 font-bold drop-shadow-[1px_1px_1px_black]'>
          Carrinho:
        </h2>

        <div className='flex flex-col gap-2'>
          {productInCart?.map((product, i) => (
            <ProductInCartCard key={i}
            product={product} />
          ))}
        </div>

        <div className='flex flex-col gap-3 text-yellow-400'>
          <p className='text-base flex gap-2'>
            Valor total: 
            <b className='text-green-400 drop-shadow-[1px_1px_1px_black] text-xl'>
            R${EstructurePrice(totalValue)}
            </b>
          </p>
          <button className='text-xl text-white p-2 bg-green-500 rounded-lg drop-shadow-[2px_2px_20px_teal] mb-28'>
            <b className='drop-shadow-[1px_1px_1px_black]'>
              Fechar compra
            </b>
          </button>
        </div>
      </section>
    )
  } else {
    return <div />
  }
}

