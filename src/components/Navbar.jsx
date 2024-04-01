import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className='bg-blue-600 h-20 w-full flex'>
        <div className='w-1/2 h-full pl-8 flex items-center'>
            <span className='font-sans text-2xl tracking-widest text-white font-semibold'>
                Profiles
            </span>
        </div>
        <div className= 'w-1/2 h-full flex justify-end items-center pr-12 text-xl'>
            <span className='font-sans mr-10 tracking-widest text-slate-200'>Users</span>
            <span className='font-sans tracking-widest text-white'>Team</span>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}
