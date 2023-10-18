'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { plusJakarta, oswald } from '@/fonts';
import { animations } from '@/constants';
import gsap from 'gsap';

export default function Home() {
  const app = useRef(null);
  const powerCharge = useRef(null);
  const frenzyCharge = useRef(null);
  const enduranceCharge = useRef(null);

  const [selectedPage, setSelectedPage] = useState<
    'home' | 'portfolio' | 'about' | 'resume'
  >('home');

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          enduranceCharge.current,
          animations.enduranceCharge.a1,
          animations.enduranceCharge.a2,
        )
        .to(enduranceCharge.current, animations.enduranceCharge.a3)
        .to(enduranceCharge.current, animations.enduranceCharge.a4)
        .repeat(-1);
      gsap
        .timeline()
        .fromTo(
          powerCharge.current,
          animations.powerCharge.a1,
          animations.powerCharge.a2,
        )
        .to(powerCharge.current, animations.powerCharge.a3)
        .to(powerCharge.current, animations.powerCharge.a4)
        .repeat(-1);
      gsap
        .timeline()
        .fromTo(
          frenzyCharge.current,
          {
            x: -100,
            y: 300,
            scale: 0.8,
            opacity: 1,
            webkitFilter: 'brightness(1.2)',
            filter: 'brightness(1.2)',
          },
          {
            x: 150,
            y: 200,
            scale: 0.65,
            duration: 1,
            webkitFilter: 'brightness(0.95)',
            filter: 'brightness(0.95)',
            ease: 'power2.out',
          },
        )
        .to(frenzyCharge.current, {
          x: -100,
          y: 100,
          scale: 0.5,
          duration: 1,
          webkitFilter: 'brightness(0.8)',
          filter: 'brightness(0.8)',
          ease: 'power2.out',
        })
        .to(frenzyCharge.current, {
          x: -100,
          y: 300,
          scale: 0.8,
          duration: 1,
          webkitFilter: 'brightness(1.2)',
          filter: 'brightness(1.2)',
          ease: 'power2.out',
        })
        .repeat(-1);
    }, app);

    return () => ctx.revert();
  });

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
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
          className={styles.charges}
          src="/images/endurance-charge.svg"
          ref={enduranceCharge}
          width={100}
          height={100}
          alt="endurance charge"
        />
        <Image
          className={styles.charges}
          src="/images/power-charge.svg"
          ref={powerCharge}
          width={100}
          height={100}
          alt="power charge"
        />
        <Image
          className={styles.charges}
          src="/images/frenzy-charge.svg"
          ref={frenzyCharge}
          width={100}
          height={100}
          alt="frenzy charge"
        />
      </div>
    </main>
  );
}
