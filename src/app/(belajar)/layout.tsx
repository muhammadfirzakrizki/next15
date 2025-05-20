import '@/app/globals.css'

export const metadata = {
    title: {
        default: 'Belajar Next.js',
        template: '%s | Belajar Next.js',
    },
    description: 'This is a simple Next.js application.',
}

export default function BelajarLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

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