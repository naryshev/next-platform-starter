"use client";

import { useState } from 'react';

export default function Page() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Subscribing...');
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            
            if (response.ok) {
                setStatus('Thanks for subscribing!');
                setEmail('');
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('Something went wrong. Please try again.');
        }
    };

    return (
        <main className="fixed inset-0 flex flex-col items-center justify-center p-4 -mt-20 z-0">
            <h1 className="text-4xl font-bold mb-8 text-[#32E6E2] animate-spin-y perspective">
                <span className="inline-block">ONE</span>
                <span className="inline-block">XANIEL</span>
            </h1>
            
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                <div className="relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 bg-transparent border-2 border-[#32E6E2] rounded-lg focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                    />
                    <button 
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#32E6E2] text-black rounded-md hover:bg-white transition-colors"
                    >
                        Subscribe
                    </button>
                </div>
                {status && (
                    <p className={`text-center ${
                        status === 'Thanks for subscribing!' 
                            ? 'text-[#32E6E2]' 
                            : status === 'Subscribing...' 
                                ? 'text-gray-400' 
                                : 'text-red-500'
                    }`}>
                        {status}
                    </p>
                )}
            </form>
        </main>
    );
}
