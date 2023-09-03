import React from 'react';
import { useBearStore } from '@/store/BearStore';

const Zustand = () => {
  const bears = useBearStore((state) => state.bears);

  return (
    <div>
      <section>
        <h1>Hi Zustand</h1>
        <p>bears: {bears}</p>
      </section>
    </div>
  );
};

export default Zustand;
