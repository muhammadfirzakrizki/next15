import { products } from '@/data/products'; // sesuaikan pathnya

interface ProductsDetailProps {
  params: {
    productId: string;
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
