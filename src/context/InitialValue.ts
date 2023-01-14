import { productProps } from "../utils/Interfaces"

export interface InitialValueProps{
  products: productProps[]
  setProducts: any
  isCartMenuActivate: boolean
  setIsCartMenuActivate: any
  productInCart: productProps[] | null | undefined
  setProductInCart: any
  addOrRemoveValue: (product: productProps, remove?: boolean) => void
  totalValue: number
}

export const InitialValue = {
  products: [],
  setProducts: () => {},
  isCartMenuActivate: false,
  setIsCartMenuActivate: () => {},
  productInCart: [],
  setProductInCart: () => {},
  addOrRemoveValue: () => {},
  totalValue: 0
}