import React, { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import Footer from './Footer'
import Navbar from './Navbar'
import 'react-toastify/dist/ReactToastify.css'

const index = ({ children }: { children: ReactNode }) => {
  return (
    <section className='w-full h-screen bg-zinc-600 overflow-y-scroll overflow-x-hidden'>

      <ToastContainer
        bodyClassName={` text-green-500 font-bold`}
        className=''
        theme={"light"}
        progressStyle={{ backgroundColor: 'green' }}

        autoClose={1500} limit={3} />

      <div className='flex flex-col items-center max-w-[1258px]  mx-auto '>
        <Navbar />


        <div className='mt-[100px]'>
          {children}
        </div>

        <Footer />
      </div>
    </section>
  )
}

export default index