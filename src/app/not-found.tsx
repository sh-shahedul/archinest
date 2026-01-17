'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Text */}
                <div className="mb-8">
                    <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-gradient-to-r from-[#FF900E] to-[#FFB95C] bg-clip-text mb-4">
                        404
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-[#FF900E] to-[#FFB95C] mx-auto rounded-full"></div>
                </div>

                {/* Main Message */}
                <div className="mb-8 space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131313]">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-base sm:text-lg text-[#727272] max-w-lg mx-auto leading-relaxed">
                        Sorry, the page you are looking for does not exist or has been moved. Lets get you back on track!
                    </p>
                </div>

                {/* Illustration */}
                <div className="mb-12 relative">
                    <div className="inline-block">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#FF900E]/10 flex items-center justify-center border-2 border-[#FF900E]/20">
                            <Search className="w-16 h-16 sm:w-20 sm:h-20 text-[#FF900E] opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link href="/">
                        <Button className="w-full sm:w-auto bg-gradient-to-r from-[#FF900E] to-[#FFB95C] hover:from-[#FFB95C] hover:to-[#FF900E] text-white font-semibold px-8 py-3 text-base shadow-lg shadow-[#FF900E]/30 hover:shadow-[#FFB95C]/40 transition-all duration-300 flex items-center justify-center gap-2">
                            <Home className="h-5 w-5" />
                            <span>Back to Home</span>
                        </Button>
                    </Link>
                    <button 
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-8  border-2 border-[#FF900E] text-[#FF900E] font-semibold rounded-lg hover:bg-[#FF900E]/10 transition-all duration-300 flex items-center justify-center gap-2 text-base"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span>Go Back</span>
                    </button>
                </div>

                {/* Quick Links */}
                <div className="bg-white/50 backdrop-blur-sm border border-[#FF900E]/20 rounded-xl p-6 sm:p-8">
                    <p className="text-sm text-[#727272] mb-4">Quick Links:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        <Link href="/" className="text-[#FF900E] hover:text-[#FFB95C] transition-colors text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/services" className="text-[#FF900E] hover:text-[#FFB95C] transition-colors text-sm font-medium">
                            Services
                        </Link>
                        <Link href="/about" className="text-[#FF900E] hover:text-[#FFB95C] transition-colors text-sm font-medium">
                            About
                        </Link>
                        <Link href="/blog" className="text-[#FF900E] hover:text-[#FFB95C] transition-colors text-sm font-medium">
                            Blog
                        </Link>
                        <Link href="/contact" className="text-[#FF900E] hover:text-[#FFB95C] transition-colors text-sm font-medium">
                            Contact
                        </Link>
                        <Link href="/dashboard/allService" className="text-[#FF900E] hover:text-[#FFB95C] transition-colors text-sm font-medium">
                            Dashboard
                        </Link>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="mt-8 text-xs sm:text-sm text-[#727272]">
                    Need help? <Link href="/contact" className="text-[#FF900E] hover:text-[#FFB95C] font-semibold transition-colors">Contact us</Link>
                </p>
            </div>
        </div>
    );
};

export default NotFound;