import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '@/component/button'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let [number, setNumber] = useState (0)
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
        <h2>Learning Next JS</h2>
      
      <div className='mt-4'>
      <Link className='p-2 bg-red-400 m-2 rounded text-white' href='/login'>Login</Link>
      <Link className='p-2 bg-red-400 m-2 rounded text-white' href='/contact'>Contact</Link>
      <Link className='p-2 bg-red-400 m-2 rounded text-white' href='/about'>About</Link>
      </div>

    <h2 className= ' p-10 text-[30px] font-bold'>counter app</h2>
    <div className = 'flex items-center'>
    <Button onclick={()=> {setNumber(number++)}}>+</Button>
        <div className= 'mx-3 text-[50px]'>
          {number}
        </div>
      <Button onclick={()=> {setNumber(number--)}}>-</Button>
    
    </div>



    </main>
  )
}
