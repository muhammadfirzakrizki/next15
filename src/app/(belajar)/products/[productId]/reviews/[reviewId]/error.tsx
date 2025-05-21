'use client';

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();
    const handleReset = () => {
        startTransition(() => {
            router.refresh()
            reset();
        })
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
            <h1 className="text-2xl font-bold mb-2 text-red-600">Something went wrong</h1>
            <p className="mb-6 text-gray-700">{error.message || 'An unexpected error occurred.'}</p>
            <button onClick={handleReset} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Try Again
            </button>
        </div>
    );
}
