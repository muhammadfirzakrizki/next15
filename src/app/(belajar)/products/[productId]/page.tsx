import { Metadata } from 'next';
import { products } from '@/data/products'; // sesuaikan pathnya

interface ProductsDetailProps {
  params: {
    productId: string;
  };
}

// Menambahkan tipe Metadata untuk validasi yang lebih baik
export async function generateMetadata({ params }: ProductsDetailProps): Promise<Metadata> {
  const { productId } = params;
  const product = products.find(p => p.id === Number(productId));
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }
  return {
    title: `${product.name} - Product Details`,
    description: `Details about ${product.name}.`,
  };
}

export default function ProductsDetail({ params }: ProductsDetailProps) {
  const { productId } = params;
  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-sm text-gray-500">Product ID: {product.id}</p>
    </div>
  );
}
