import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import DownloadPage from '../download/page'

const Navbar = () => {
    return (
        <nav className='w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5'>
            <Link href={"/"} className='font-bold text-2xl'>Savek<span className='text-primary'>Blog</span></Link>
            <div className='flex items-center justify-between gap-10'>
                <Link className='bg-rose-600 px-3 py-1 rounded-md text-white' href={"/download"}>Download</Link>
                <ModeToggle />
            </div>
        </nav>
    )
}

export default Navbar
