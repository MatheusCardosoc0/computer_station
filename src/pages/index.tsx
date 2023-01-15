import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import Products from '../components/Products'
import Promotion from '../components/Promotion'

const Home: NextPage = () => {
  return (
    <main className="">
     
      <Head>
        <title>PC_Station</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-wrap gap-10'>
        <Promotion image='https://shopinfo.vteximg.com.br/arquivos/ids/1305406-1000-1000/1.png?v=637781462015600000'
          discount={25}>
          <span className='text-2xl'>Pc Gamer Neologic NLI234 intel</span>
          <ul>
            <li>i5-9400F 8gb</li>
            <li>1TB</li>
            <li>GTX 1650 4GB</li>
          </ul>
        </Promotion>
        <Promotion image='https://sndecommerceimage.azureedge.net/content/Images/thumbs/0055359_placa-de-video-geforce-gtx-1060-3gb-gddr5-192-bit-gv-n1060wf2oc-3gd_550.png'
          discount={30} >
          <span className='text-2xl'>Placa de video Nvidia GeForce</span>
        </Promotion>
      </div>

      <div className='overflow-x-scroll w-[70%] mx-auto scrollex mt-16'>
        <Products />
      </div>
    </main>
  )
}

export default Home
