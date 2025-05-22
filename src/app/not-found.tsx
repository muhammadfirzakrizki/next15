export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 px-4">
      <div className="card-glass p-10 max-w-lg w-full text-center space-y-6">
        <div className="text-6xl">🔍</div>
        <h1 className="text-4xl font-bold text-blue-900">Page Not Found</h1>
        <p className="text-gray-600 text-lg">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
