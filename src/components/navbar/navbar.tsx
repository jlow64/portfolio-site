'use client';

import gsap from 'gsap';
import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { animations } from '@/constants';
import styles from './navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const app = useRef(null);
  const powerCharge = useRef(null);
  const frenzyCharge = useRef(null);
  const enduranceCharge = useRef(null);

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
          animations.frenzyCharge.a1,
          animations.frenzyCharge.a2,
        )
        .to(frenzyCharge.current, animations.frenzyCharge.a3)
        .to(frenzyCharge.current, animations.frenzyCharge.a4)
        .repeat(-1);
    }, app);

    return () => ctx.revert();
  });
  return (
    <div className={styles.navContainer}>
      <header className={styles.header}>
        <h1 className={styles.headerLabel}>Justin Low</h1>
        <p className={styles.headerSubLabel}>Developer</p>
      </header>
      <li className={styles.menuList}>
        <ul
          className={styles.menuItem}
          onClick={() => router.push('/portfolio')}
        >
          Portfolio
        </ul>
        <ul className={styles.menuItem} onClick={() => router.push('/about')}>
          About
        </ul>
        <ul className={styles.menuItem} onClick={() => router.push('/resume')}>
          Resume
        </ul>
      </li>
      <p className={styles.description}>
        Hi there, I’m a software developer and I like exploring and creating
        cool things on web apps. When I’m not doing that, I’m doing Muay Thai or
        Gym. Currently searching for my next gig
      </p>
      {usePathname() !== '/' ? (
        <section className={styles.miniChargeContainer}>
          <Image
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
        </section>
      ) : null}
      <div className={styles.contactSection}>LinkedIn, Github</div>
    </div>
  );
};

export default Navbar;
