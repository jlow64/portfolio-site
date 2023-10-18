'use client';

import styles from './page.module.css';
import { plusJakarta, oswald } from '@/styles/fonts';
import Navbar from '@/components/navbar';
import Animation from '@/components/animation';

export default function Home() {
  return (
    <main
      className={`${styles.main} ${plusJakarta.variable} ${oswald.variable}`}
    >
      <Navbar />
      <Animation />
    </main>
  );
}
