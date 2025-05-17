import '@/app/globals.css'

export const metadata = {
    title: 'My Next.js App',
    description: 'This is a simple Next.js application.',
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

            <body>
                {children}
                <footer className="bg-blue-600 text-white p-4">
                    <p className="text-center">Footer Auth</p>
                </footer>
            </body>
        </html>
    )
}