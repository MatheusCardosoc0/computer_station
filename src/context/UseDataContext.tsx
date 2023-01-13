import React, { createContext, ReactNode, useContext, useState } from 'react'
import { productProps } from '../utils/Interfaces'
import { InitialValue, InitialValueProps } from './InitialValue'

export const UseContext = createContext<InitialValueProps>(InitialValue)

export const UseDataContextProvider = ({ children }: { children: ReactNode }) => {

  const [products, setProducts] = useState<productProps[]>(InitialValue.products)

  return (
    <UseContext.Provider value={{
      products,
      setProducts
    }}>
      {children}
    </UseContext.Provider>
  )
}

export const useDataContext = () => useContext(UseContext)