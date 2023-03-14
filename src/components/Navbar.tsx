import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-white top-0 fixed flex justify-center items-center ' >
        <nav className='w-4/5 h-16 p-8x rounded-pm flex flex-row justify-center items-center list-none gap-6'  >
            <Link className='bg-lightBlue p-4x px-8x rounded-pm ' href='/' ><li>user</li></Link>
            <Link className='bg-lightBlue p-4x px-8x rounded-pm ' href='/job-application' ><li>job</li></Link>
            <Link className='bg-lightBlue p-4x px-8x rounded-pm ' href='/visit-form' ><li>visit</li></Link>
        </nav>
    </div>
  )
}

export default Navbar