import React, { createContext, ReactNode, useContext, useState } from 'react'
import { productProps } from '../utils/Interfaces'
import { InitialValue, InitialValueProps } from './InitialValue'

export const UseContext = createContext<InitialValueProps>(InitialValue)

export const UseDataContextProvider = ({ children }: { children: ReactNode }) => {

  const [products, setProducts] = useState<productProps[]>(InitialValue.products)
  const [productInCart, setProductInCart] = useState<productProps[]>(InitialValue.productInCart)
  const [isCartMenuActivate, setIsCartMenuActivate] = useState<boolean>(InitialValue.isCartMenuActivate)
  const [totalValue, setTotalValue] = useState(0)


  function addOrRemoveValue(product: productProps, remove = false) {
    if (remove) {
      productInCart.map(inCart => {
        if (inCart === product) {
          setTotalValue(prev => prev - product.price)

          const Delete = productInCart.filter(prodc => prodc !== product)
          setProductInCart(Delete)
        }
      })


    } else {
      setProductInCart((prev: productProps[]) => [...prev, { ...product }])
      setTotalValue(prev => prev + product.price)
    }
  }



  return (
    <UseContext.Provider value={{
      products,
      setProducts,
      isCartMenuActivate,
      setIsCartMenuActivate,
      productInCart,
      setProductInCart,
      addOrRemoveValue,
      totalValue
    }}>
      {children}
    </UseContext.Provider>
  )
}

export const useDataContext = () => useContext(UseContext)