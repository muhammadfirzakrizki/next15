import { Metadata } from 'next';

import ProductCard from '@/components/product-card';
import { products } from '@/data/products';

// Menambahkan tipe Metadata untuk validasi yang lebih baik
export async function generateMetadata(): Promise<Metadata> {
  const productList = await products;
  return {
    title: 'Products',
    description: `Explore our products. We have ${productList.length} products available.`,
  };
}

export default async function Products() {
  const productList = await products;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">🛒 Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productList.map((product) => (
          <ProductCard key={product.id} id={product.id} name={product.name} />
        ))}
      </div>
    </div>
  );
}
