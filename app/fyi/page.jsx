"use client";

import Link from 'next/link';

export default function FYI() {
    return (
        <main className="fixed inset-0 flex flex-col p-4">
            <div className="flex flex-col items-center relative z-20">
                <h1 className="text-4xl font-bold text-[#32E6E2] mt-4 animate-spin-y perspective">
                    FYI
                </h1>
                <Link 
                    href="/" 
                    className="text-[#32E6E2] hover:opacity-80 transition mt-2 text-3xl"
                >
                    <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </Link>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center -mt-20 z-10">
                <p className="text-center text-4xl font-bold text-[#32E6E2]">
                    Work and progress.
                </p>
            </div>
        </main>
    );
} 