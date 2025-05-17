import { notFound } from "next/navigation";

export default function ReviewPage({ params }: { params: { productId: string; reviewId: string } }) {
    const { productId, reviewId } = params;

    if (!productId || !reviewId) {
        return notFound();
    } else if (Number(reviewId) > 1000) {
        return notFound();
    }
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Review ID: {reviewId}</h1>
            <p className="text-sm text-gray-500">Product ID: {productId}</p>
        </div>
    );
}