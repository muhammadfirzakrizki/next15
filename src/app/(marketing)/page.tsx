import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center space-y-8">
      <h1 className="text-5xl font-bold text-blue-900 text-center">
        Welcome to Belajar Next.js
      </h1>
      <p className="text-gray-600 text-center max-w-xl">
        Ini adalah homepage sederhana dengan link navigasi yang cantik. Jelajahi halaman lain!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {[
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/products", label: "Products" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block bg-blue-600 text-white rounded-xl py-4 px-6 text-center font-semibold text-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300"
          >
            {item.label}
          </Link>
        ))}
        <Link className="block bg-blue-600 text-white rounded-xl py-4 px-6 text-center font-semibold text-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300" href={`/articles/breaking-news-123?lang=en`}>Reading Arctiles in English</Link>
        <Link className="block bg-blue-600 text-white rounded-xl py-4 px-6 text-center font-semibold text-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300" href={`/articles/breaking-news-123?lang=fr`}>Reading Arctiles in France</Link>

      </div>
    </div>
  );
}
