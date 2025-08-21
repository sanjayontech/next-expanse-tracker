'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className='sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b broder-gray-200/50 dark:border-gray-600/50 shadow-gray-900/5 drak:shadow-black/30'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-14 sm:h-16'>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <Link
                            href='/'
                            className='flex items-center gap-2 sm:gap-3 flex-shrink-0 group transition-all duration-300 hover:scale-105'
                            onClick={closeMobileMenu}
                        >
                            <div className='w-7 h-7 sm:w-8 sm:h-8 md-w-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3'>
                                <span className='text-white text-xs sm:text-sm md:text-lg font-bold'>
                                    💰
                                </span>
                            </div>
                            <span className='text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
                                <span className='hidden sm:inline'>ExpenseTracker AI</span>
                                <span className='sm:hidden'>ExpanseTracker</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className='hidden md:flex items-center space-x-1'>
                        <Link 
                            href='/'
                            className='relative text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-amber-50/50 dark:hover:bg-emerald-900/20 group'
                            >
                                <span className='relative z-10'>Home</span>
                                <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>

                        </Link>
                        <Link 
                            href='/about'
                            className='relative text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-amber-50/50 dark:hover:bg-emerald-900/20 group'
                            >
                                <span className='relative z-10'>About</span>
                                <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>

                        </Link>

                        <Link 
                            href='/contact'
                            className='relative text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-amber-50/50 dark:hover:bg-emerald-900/20 group'
                            >
                                <span className='relative z-10'>Contact</span>
                                <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>

                        </Link>
                    </div>
                    {/* Right Section */}
                    <div className='flex items-center space-x-1 sm:space-x-2'>
                        {/* ThemeToggle */}
                        <div className='p-0.5 sm:p-1'>
                            <ThemeToggle />
                        </div>

                        {/* Authentication - Desktop */}
                        <div className='hidden sm:block'>
                            <SignedOut>
                                <button className='relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95'></button>
                            </SignedOut>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}