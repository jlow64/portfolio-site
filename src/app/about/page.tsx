'use client';

import { plusJakarta, oswald } from '@/styles/fonts';
import Navbar from '@/components/navbar';
import styles from './about.module.css';

export default function About() {
  return (
    <main
      className={`${styles.main} ${plusJakarta.variable} ${oswald.variable}`}
    >
      <Navbar />
      <div className={styles.pageContainer}>about content goes here</div>
    </main>
  );
}
