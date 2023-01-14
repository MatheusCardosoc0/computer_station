import React, { useState } from 'react'
import { useDataContext } from '../context/UseDataContext'
import { EstructurePrice } from '../utils/functions'
import { productProps } from '../utils/Interfaces'

const ProductInCartCard = ({ product }: { product: productProps }) => {

  const [controlButtons, setControlButtons] = useState(false)

  const {addOrRemoveValue} = useDataContext()

  return (
    <button className='flex flex-col bg-gray-400 p-1'
      onClick={() => setControlButtons(!controlButtons)}>
      <div className='flex justify-between'>
        <img src={product.imageUrl}
          className="w-[100px]" />

        <span className='text-yellow-300 drop-shadow-[1px_1px_1px_black] text-start'>
          <p>{product.name}</p>
          <p className='text-green-400 font-bold'>
            R$ {EstructurePrice(product.price)}
          </p>
        </span>
      </div>

      {controlButtons && (
        <button onClick={() => addOrRemoveValue(product, true)}
          className="p-1 bg-red-500 rounded"
        >
          <p className='drop-shadow-[1px_1px_1px_black] text-white'>Remover</p>
        </button>
      )}
    </button>
  )
}

export default ProductInCartCard