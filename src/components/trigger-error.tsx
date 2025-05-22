'use client';

import { useState } from 'react';

export default function TriggerError() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("Error yang dipicu oleh tombol!");
  }

  return (
    <button onClick={() => setShouldThrow(true)}>
      Klik untuk menyebabkan error
    </button>
  );
}
