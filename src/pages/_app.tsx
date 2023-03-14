import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
        <>
          <Navbar/>
          <div className='h-screen w-full overflow-scroll bg-pink' >
            <div className='w-full bg-pink mt-24 mb-12 flex justify-center items-center ' >
            <Component {...pageProps} />
            </div>
          </div>
      </>
  </>
}
