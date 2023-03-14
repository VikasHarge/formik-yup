import Head from 'next/head'
import { Inter } from 'next/font/google'
import SampleForm from '@/components/SampleForm'

const inter = Inter({ subsets: ['latin'] })

const Home : React.FC = ()=> {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Font family added --> */}
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
        </style>
      </Head>
      <>
        <SampleForm/>
      </>
    </>
  )
}

export default Home