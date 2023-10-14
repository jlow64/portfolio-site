import { Plus_Jakarta_Sans, Oswald } from 'next/font/google';
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-plus-jakarta',
});
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200'],
  variable: '--font-oswald',
});
export { plusJakarta, oswald };
