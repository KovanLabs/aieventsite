"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const Navbar = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <nav className="glass fixed top-0 z-50 w-full py-4 px-4 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
            {/* Logo/Brand Name can be added here */}
            <div className="text-[#40ffaa] font-bold text-xl md:hidden">AI Conf</div>
            
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-gray-300 hover:text-[#40ffaa] transition-colors z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex container mx-auto items-center justify-center gap-x-2 md:gap-x-6 overflow-x-auto scrollbar-hide">
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
            
            {/* Mobile Menu - Fullscreen Overlay */}
            <div className={`md:hidden fixed inset-0 glass-menu backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}>
                <div className="flex flex-col items-center gap-y-6 py-8">
                    {nav.map((item, index) => (
                        <Link
                            key={index}
                            href={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`relative px-4 py-3 text-lg font-medium transition-all duration-300 ${
                                pathname === item.path 
                                    ? 'text-[#40ffaa]' 
                                    : 'text-gray-200 hover:text-[#40ffaa]/80'
                            }`}
                        >
                            {pathname === item.path && (
                                <span className="absolute inset-0 bg-[#40ffaa]/10 rounded-lg -z-10" />
                            )}
                            {item.name}
                            {pathname === item.path && (
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#40ffaa] to-transparent" />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar