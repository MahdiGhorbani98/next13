'use client';
import React, { useEffect, useState } from 'react';
import { useBearStore } from '@/store/BearStore';

const Zustand = () => {
  const { bears, increasePopulation, removeAllBears } = useBearStore(
    (state) => ({
      bears: state.bears,
      increasePopulation: state.increasePopulation,
      removeAllBears: state.removeAllBears,
    }),
  );
  const [bearsCount, setBearsCount] = useState<number>();
  useEffect(() => {
    setBearsCount(bears);
  }, [bears]);

  return (
    <div>
      <section>
        <h1>Hi Zustand</h1>
        <p>bears: {bearsCount}</p>
        <button
          className="bg-white text-black px-4"
          onClick={increasePopulation}
        >
          Add Bear
        </button>
        <button
          className="bg-white text-black px-4 ms-5"
          onClick={removeAllBears}
        >
          Remove Bears
        </button>
      </section>
    </div>
  );
};

export default Zustand;
