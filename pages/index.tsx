import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Fullstack Scientist | Jordan Willis</title>
        <meta name="description" content="The portfolio site for Jordan Willis, PhD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </>
  )
}
