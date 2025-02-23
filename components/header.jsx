"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <nav className="relative flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <button 
                onClick={() => setIsNavVisible(!isNavVisible)}
                className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-3 active:scale-95 z-20 ml-4"
                aria-label="Toggle navigation"
            >
                {/* Add your logo here */}
            </button>
        </nav>
    );
}
