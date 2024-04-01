import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className='h-12 border-b border-slate-400 flex justify-end items-center pr-10'>
        <span className='text-md font-sans mr-10'>users</span>
        <span className='text-md font-sans mr-10'>team</span>
    </nav>
    <Outlet/>
    </>
  )
}
