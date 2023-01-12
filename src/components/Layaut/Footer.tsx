import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='mt-20 w-full bg-zinc-800 p-2 flex justify-between bottom-0 '>
      <h2 className='text-2xl text-yellow-500 font-bold font-serif underline decoration-teal-500'>
        Criado por Matheus Cardoso
      </h2>

      <div className='flex text-4xl gap-4'>
        <AiFillGithub className='rounded-full p-1 bg-gradient-to-b from-purple-500 to-green-400' />
        <AiFillLinkedin className='rounded-full p-1 bg-gradient-to-b from-purple-500 to-green-400' />
      </div>
    </footer>
  )
}

export default Footer