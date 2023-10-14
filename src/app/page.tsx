'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { plusJakarta, oswald } from '@/fonts';

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<
    'home' | 'portfolio' | 'about' | 'resume'
  >('home');

  return (
    <main
      className={`${styles.main} ${plusJakarta.variable} ${oswald.variable}`}
    >
      <div className={styles.navContainer}>
        <header className={styles.header}>
          <h1 className={styles.headerLabel}>Justin Low</h1>
          <p className={styles.headerSubLabel}>Developer</p>
        </header>
        <li className={styles.menuList}>
          <ul
            className={styles.menuItem}
            onClick={() => setSelectedPage('portfolio')}
          >
            Portfolio
          </ul>
          <ul
            className={styles.menuItem}
            onClick={() => setSelectedPage('about')}
          >
            About
          </ul>
          <ul
            className={styles.menuItem}
            onClick={() => setSelectedPage('resume')}
          >
            Resume
          </ul>
        </li>
        <p className={styles.description}>
          Hi there, I’m a software developer and I like exploring and creating
          cool things on web apps. When I’m not doing that, I’m doing Muay Thai
          or Gym. Currently searching for my next gig
        </p>
        {selectedPage !== 'home' ? (
          <section className={styles.miniChargeContainer}>mini charges</section>
        ) : null}
      </div>
      <div className={styles.pageContainer}>
        <Image
          src="/images/endurance-charge.svg"
          width={100}
          height={100}
          alt="endurance charge"
        />
        <Image
          src="/images/power-charge.svg"
          width={100}
          height={100}
          alt="power charge"
        />
        <Image
          src="/images/frenzy-charge.svg"
          width={100}
          height={100}
          alt="frenzy charge"
        />
      </div>
    </main>
  );
}
