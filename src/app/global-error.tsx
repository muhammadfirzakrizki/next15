// app/global-error.tsx
'use client';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body className="bg-red-100 text-red-800 p-10 flex flex-col justify-center items-center min-h-screen">
        <h2 className="text-4xl font-bold mb-4">🔥 A Global Error Occurred!</h2>
        <p className="mb-6 text-lg">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
