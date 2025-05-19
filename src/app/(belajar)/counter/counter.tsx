'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-md mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-6">🔢 Counter Page</h1>
      
      <div className="text-6xl font-bold mb-6">{count}</div>

      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        +
      </button>
    </div>
  );
}
