'use client';
import React from 'react';
import { useBearStore } from '@/store/BearStore';

const Zustand = () => {
  const { bears, increasePopulation, removeAllBears } = useBearStore(
    (state) => ({
      bears: state.bears,
      increasePopulation: state.increasePopulation,
      removeAllBears: state.removeAllBears,
    }),
  );

  return (
    <div>
      <section>
        <h1>Hi Zustand</h1>
        <p>bears: {bears}</p>
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
