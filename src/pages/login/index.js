import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
        <h2>Learning Next JS</h2>
      
      <div>
      <h2>login Page</h2>
      </div>


    </main>
  )
}
