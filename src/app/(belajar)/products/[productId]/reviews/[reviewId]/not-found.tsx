"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const productId = pathSegments[1];
  const reviewId = pathSegments[3];   

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 px-4">
      <div className="card-glass p-10 max-w-lg w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-900">
          Review Not Found
        </h1>
        <p className="text-gray-600 text-lg">
          We couldn’t find a review with ID <strong>{reviewId}</strong> for product <strong>{productId}</strong>.
          It might have been removed or the link is incorrect.
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
