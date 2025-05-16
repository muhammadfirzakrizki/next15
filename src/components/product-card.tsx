import Link from 'next/link';
import { FaBoxOpen } from 'react-icons/fa';

interface ProductCardProps {
  id: number;
  name: string;
}

export default function ProductCard({ id, name }: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="
        group block
        bg-white/20 backdrop-blur-md
        rounded-2xl border border-white/30
        shadow-lg shadow-black/10
        p-6
        transition-transform duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl hover:border-white/50
        will-change-transform
      "
    >
      <div className="flex items-center space-x-5">
        <div
          className="
            flex items-center justify-center
            w-14 h-14 rounded-full
            bg-gradient-to-tr from-blue-400 to-blue-600
            text-white text-2xl shadow-md
            group-hover:from-blue-500 group-hover:to-blue-700
            transition-colors duration-300
          "
          aria-hidden="true"
        >
          <FaBoxOpen />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-300">
            {name}
          </h2>
          <p className="mt-1 text-sm text-gray/70">Click to view details</p>
        </div>
      </div>
    </Link>
  );
}
