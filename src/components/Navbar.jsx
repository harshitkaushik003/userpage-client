import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className='h-12 border-b border-slate-400 flex justify-end items-center pr-10'>
        <Link to='/'>
          <span className='text-md font-sans mr-10'>users</span>
        </Link>
        
        <Link to='/team'>
          <span className='text-md font-sans mr-10'>team</span>
        </Link>
    </nav>
    <Outlet/>
    </>
  )
}
