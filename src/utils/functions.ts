import axios from "axios"
import { BaseUrl } from "./BaseUrl"

export function EstructurePrice(price: number){
  const string = price?.toString()
  const result = string.slice(0, -2) + '.' + string.slice(-2)
  return result
}


export async function getProductsInServer(id?: string){
  const baseUrl = BaseUrl
  try {
    if(id){
      const products = await axios.get(`${baseUrl}/api/product/${id}`)
      return products.data
    } else {
      const products = await axios.get(`${baseUrl}/api/products`)
      return products.data
    }
  } catch (error) {
    console.log(error)
  }
}