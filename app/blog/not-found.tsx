import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h1 className='font-bold mb-10'>404 - Page Not Found</h1>
            <div>
                <Link href="/">Return Home</Link>
            </div>
        </div>
    )
}

export default NotFound
