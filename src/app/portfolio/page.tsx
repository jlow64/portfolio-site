'use client';

import { plusJakarta, oswald } from '@/styles/fonts';
import Navbar from '@/components/navbar';
import styles from './porfolio.module.css';

export default function Portfolio() {
  return (
    <main
      className={`${styles.main} ${plusJakarta.variable} ${oswald.variable}`}
    >
      <Navbar />
      <div className={styles.pageContainer}>portfolio content goes here</div>
    </main>
  );
}
