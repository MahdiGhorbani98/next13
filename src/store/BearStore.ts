import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearStoreType {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useBearStore = create<BearStoreType>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
      }),
      { name: 'bearStore' },
    ),
  ),
);
