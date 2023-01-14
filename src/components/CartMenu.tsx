import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { useDataContext } from '../context/UseDataContext'
import { EstructurePrice } from '../utils/functions'

export const CartIcon = () => {

  const { setIsCartMenuActivate } = useDataContext()

  return (
    <button onClick={() => setIsCartMenuActivate((prev: boolean) => setIsCartMenuActivate(!prev))}>
      <BsFillCartFill />
    </button>
  )
}

export const CartMenu = () => {

  const { isCartMenuActivate, productInCart } = useDataContext()

  if (isCartMenuActivate) {
    return (
      <section className='fixed left-0 mt-[50px] h-[100%] gap-20 w-1/2 md:w-1/3 bg-gradient-to-tr from-black/40 via-black/40 to-purple-500 flex flex-col items-center'>
        <h2 className='mt-10 font-serif text-3xl text-teal-400 font-bold drop-shadow-[1px_1px_1px_black]'>
          Carrinho:
        </h2>

        <div className='flex flex-col gap-2'>
          {productInCart?.map(product => (
            <div key={product.id} className='flex bg-gray-400 justify-between px-1'>
              <img src={product.imageUrl}
                className="w-[100px]" />

              <span className='text-yellow-300 drop-shadow-[1px_1px_1px_black]'>
                <p>{product.name}</p>
                <p className='text-green-400 font-bold'>
                  R$ {EstructurePrice(product.price)}
                </p>
              </span>
            </div>
          ))}
        </div>

        <div>
          <p>
            Valor total:
          </p>
          <button className='relative text-xl text-white p-2 bg-green-500 rounded-lg drop-shadow-[2px_2px_20px_teal]'>
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
