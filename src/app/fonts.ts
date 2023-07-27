import { Cuprum, Vazirmatn, Amiri } from 'next/font/google';
export const cuprum = Cuprum({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-family-cuprum',
});
export const vazir = Vazirmatn({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-family-vazirmatn',
});

export const amiri = Amiri({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-family-amiri',
});
