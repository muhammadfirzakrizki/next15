import '@/app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter', // optional untuk custom property
});

export const metadata = {
    title: 'My Next.js App',
    description: 'This is a simple Next.js application.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>

            <body>
                <header className="bg-blue-600 text-white p-4">
                    <h1 className="text-2xl font-bold text-center">Header</h1>
                </header>
                {children}
                <footer className="bg-blue-600 text-white p-4">
                    <p className="text-center">Footer</p>
                </footer>
            </body>
        </html>
    )
}