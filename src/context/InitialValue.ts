import { productProps } from "../utils/Interfaces"

export interface InitialValueProps{
  products: productProps[]
  setProducts: any
}

export const InitialValue = {
  products: [],
  setProducts: () => {},
}