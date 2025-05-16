import './globals.css'

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
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}