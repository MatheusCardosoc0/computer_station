import { productProps } from "../utils/Interfaces"

export interface InitialValueProps{
  products: productProps[]
  setProducts: any
  isCartMenuActivate: boolean
  setIsCartMenuActivate: any
  productInCart: productProps[] | null | undefined
  setProductInCart: any
}

export const InitialValue = {
  products: [],
  setProducts: () => {},
  isCartMenuActivate: false,
  setIsCartMenuActivate: () => {},
  productInCart: [],
  setProductInCart: () => {},
}