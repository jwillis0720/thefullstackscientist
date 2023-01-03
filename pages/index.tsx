import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/skills'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Fullstack Scientist | Jordan Willis</title>
        <meta name="description" content="The portfolio site for Jordan Willis, PhD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="The Fullstack Scientist | Jordan Willis" />
        <meta property="og:image" content='https://raw.githubusercontent.com/jwillis0720/thefullstackscientist/main/public/logo.svg'></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </>
  )
}
