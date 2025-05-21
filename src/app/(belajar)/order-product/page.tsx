"use client";

import { useRouter } from "next/navigation";


export default function OrderProduct() {

    const router = useRouter();
    const handleClick = () => {
        alert("Order placed successfully!")
        router.push("/products");
    };

    return (
        <div>
            <h1>Order Product</h1>
            <p>This is the order product page.</p>
            <button onClick={handleClick} className="bg-blue-600 text-white rounded-xl py-4 px-6 text-center font-semibold text-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300">
                Order Now
            </button>
        </div>
    );
}