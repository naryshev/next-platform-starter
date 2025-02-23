import './globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: ''
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="overflow-hidden">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="overflow-hidden">
                <div 
                    className="fixed inset-0 w-full h-full z-0"
                    style={{
                        backgroundImage: "url('/ocean.gif')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.6,
                        filter: 'brightness(0.8)'  // Darkens the image slightly to maintain text readability
                    }}
                />
                <div className="relative z-10">
                    <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                        <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                            <Header />
                            <div className="grow">{children}</div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
