import Link from 'next/link';

export function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 pb-12 z-10 flex justify-center">
            <p className="text-sm">
                <Link href="/fyi" className="transition text-[#32E6E2] hover:opacity-80 underline underline-offset-4">
                    whats this?
                </Link>
            </p>
        </footer>
    );
};
