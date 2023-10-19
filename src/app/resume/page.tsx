'use client';

import { plusJakarta, oswald } from '@/styles/fonts';
import Navbar from '@/components/navbar';
import styles from './resume.module.css';

export default function Resume() {
  return (
    <main
      className={`${styles.main} ${plusJakarta.variable} ${oswald.variable}`}
    >
      <Navbar />
      <div className={styles.pageContainer}>
        <embed
          src="JustinLowPublicCV.pdf"
          type="application/pdf"
          height="100%"
          width="100%"
        />
      </div>
    </main>
  );
}
