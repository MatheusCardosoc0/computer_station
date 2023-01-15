import React from 'react'
import { useDataContext } from '../context/UseDataContext'
import { Colors } from '../utils/Constants'
import { EstructurePrice } from '../utils/functions'
import { productProps } from '../utils/Interfaces'

const ProductEmphasis = ({ product }: { product: productProps | null | undefined }) => {

  const { addOrRemoveValue} = useDataContext()

  return (
    <section className='flex flex-col md:flex-row gap-2 justify-center mt-20'>
      <div className='bg-gradient-to-b from-teal-600/0 via-purple-500 to-teal-400 rounded-xl'>
        <img src={product?.imageUrl} className="w-[14rem] md:w-[25rem]" />

        <div className='flex justify-center gap-3 p-2'>
          {Colors.map(color => (
            <button key={color.color} className={`${color.color} w-[50px] rounded-lg h-[50px] block`} />
          ))}
        </div>
      </div>

      <div className='drop-shadow-[1px_1px_1px_black] flex flex-col gap-5 text-white w-[14rem] md:w-[25rem] mx-4'>
        <h2 className='text-2xl font-bold'>{product?.name}</h2>

        <p className='text-sm md:text-base'>
          {product?.description}
        </p>

        <span className='text-3xl text-yellow-500'>
          R$ {EstructurePrice(Number(product?.price))}
        </span>

        <button className='bg-gradient-to-b from-teal-500 to-green-600 rounded-lg md:w-[300px] text-2xl mx-auto drop-shadow-[2px_2px_0px_black] p-2 hover:brightness-150 '
        onClick={() => product && addOrRemoveValue(product)}>
          <b className='drop-shadow-[1px_1px_1px_black]'>
            Adicionar ao carrinho
          </b>
        </button>
      </div>
    </section>
  )
}

export default ProductEmphasis