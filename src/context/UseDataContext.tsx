import React, { createContext, ReactNode, useContext, useState } from 'react'
import { productProps } from '../utils/Interfaces'
import { InitialValue, InitialValueProps } from './InitialValue'

export const UseContext = createContext<InitialValueProps>(InitialValue)

export const UseDataContextProvider = ({ children }: { children: ReactNode }) => {

  const [products, setProducts] = useState<productProps[]>(InitialValue.products)
  const [productInCart, setProductInCart] = useState<productProps[] >(InitialValue.productInCart)
  const [isCartMenuActivate, setIsCartMenuActivate] = useState<boolean>(InitialValue.isCartMenuActivate)

  console.log(productInCart)

  return (
    <UseContext.Provider value={{
      products,
      setProducts,
      isCartMenuActivate,
      setIsCartMenuActivate,
      productInCart,
      setProductInCart
    }}>
      {children}
    </UseContext.Provider>
  )
}

export const useDataContext = () => useContext(UseContext)