"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname();

    const nav = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/About' },
        { name: 'Speakers', path: '/Speakers' },
        { name: 'Sponsors', path: '/Sponsors' },
        { name: 'Contact', path: '/Contact' },
        { name: 'Venue', path: '/Venue' },
        { name: 'Agenda', path: '/Agenda' }
    ]
    return (
        <nav className="glass fixed top-0 z-50 w-full py-4 px-4 md:px-8 lg:px-12 xl:px-16 flex items-center justify-center">
            <div className="container mx-auto flex items-center gap-x-2 md:gap-x-6 overflow-x-auto scrollbar-hide">
                {nav.map((item, index) => (
                    <Link
                        key={index}
                        href={item.path}
                        className={`relative px-3 py-2 text-sm md:text-base whitespace-nowrap transition-all duration-300 hover:text-[#40ffaa] ${
                            pathname === item.path 
                                ? 'text-[#40ffaa] font-medium'
                                : 'text-gray-300'
                        }`}
                    >
                        {pathname === item.path && (
                            <span className="absolute inset-0 bg-[#40ffaa]/10 rounded-md -z-10 backdrop-blur-sm" />
                        )}
                        {item.name}
                        {pathname === item.path && (
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#40ffaa]/40 via-[#40ffaa] to-[#40ffaa]/40" />
                        )}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar