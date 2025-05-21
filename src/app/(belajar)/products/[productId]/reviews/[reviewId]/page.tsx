import { notFound, redirect } from "next/navigation";

interface ReviewPageProps {
  params: {
    productId: string;
    reviewId: string;
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { productId, reviewId } = await params;

  if (!productId || !reviewId) {
    notFound();
  }

  const numericReviewId = Number(reviewId);

  if (numericReviewId > 1000) {
    redirect("/products");
  }

  if (numericReviewId === 1) {
    // Simulate an error
    throw new Error("Simulated error for review ID 1");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Review ID: {reviewId}</h1>
      <p className="text-sm text-gray-500">Product ID: {productId}</p>
    </div>
  );
}
