import React, { ReactNode } from 'react'

interface PromotionProps{
  image: string
  children: ReactNode
  discount: number
}

const Promotion = ({children, image,discount} : PromotionProps) => {
  return (
    <div className='bg-gradient-to-tr from-stone-700 to-slate-800 rounded-br-[40px] rounded-lg rounded-tl-[40px] flex p-2 mt-10 w-[90%] md:w-[34rem] mx-auto'>
      <img className='w-[14rem] md:w-[20rem] '
       src={image} />

      <div className='flex flex-col gap-4 md:text-xl text-white '>
        {children}

        <b className='text-4xl md:text-8xl mx-auto drop-shadow-[1px_1px_40px_cyan]'>{discount}%</b>
      </div>
    </div>
  )
}

export default Promotion