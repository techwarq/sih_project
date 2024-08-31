'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { PersonIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Negotiate', href: '/Negotiate' },
    { name: 'Inventory', href: '/inventory' },
]

const FarmerNavar = () => {
    const path = usePathname()
    return (
        <>
            <nav className='flex w-full mt-2 flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-teal-800 rounded-md'>
                <div className="sticky top-0 flex h-12 items-center justify-between gap-4">
                    <menu className='hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>

                        {
                            links.map((link, index) => (
                                <Link key={index} href={link.href}
                                    className={`
                                ${path === link.href ? 'text-white' : 'text-gray-300 hover:text-white'}
                                `}
                                >
                                    {link.name}
                                </Link>
                            ))
                        }
                    </menu>
                    <div>
                        <Button variant={'link'} size={'icon'}>
                            <Avatar className='bg-white text-center items-center justify-center'>
                                <PersonIcon />
                            </Avatar>
                        </Button>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default FarmerNavar