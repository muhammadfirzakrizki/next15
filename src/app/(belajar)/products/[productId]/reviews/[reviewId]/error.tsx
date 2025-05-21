'use client';

export default function ErrorBoundary({ error }: { error: Error; }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-2xl font-bold mb-2 text-red-600">Something went wrong</h1>
      <p className="mb-6 text-gray-700">{error.message || 'An unexpected error occurred.'}</p>
    </div>
  );
}
