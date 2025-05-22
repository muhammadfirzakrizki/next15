import Link from "next/link";


export const metadata = {
    title: 'About Us',
    description: 'Learn more about us on this page.',
}

export default function About() {   
    return (
        <div>
            <h1>About Us</h1>
            <Link href="/">Home</Link>
            <p>This is the about page of our Next.js application.</p>
        </div>
    );
}