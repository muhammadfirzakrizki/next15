"use client";

import { notFound, useParams, redirect} from "next/navigation";

export default function ReviewPage() {
    const params = useParams();
    const {productId, reviewId }= params as { productId: string, reviewId: string };

    if (!productId || !reviewId) {
        return notFound();
    } else if (Number(reviewId) > 1000) {
        redirect("/products");
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Review ID: {reviewId}</h1>
            <p className="text-sm text-gray-500">Product ID: {productId}</p>
        </div>
    );
}