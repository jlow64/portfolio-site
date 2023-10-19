'use client';

import gsap from 'gsap';
import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';
import { miniAnimations } from '@/constants';
import styles from './navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const app = useRef(null);
  const powerCharge = useRef(null);
  const frenzyCharge = useRef(null);
  const enduranceCharge = useRef(null);
  const pathName = usePathname();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (pathName !== '/') {
        gsap
          .timeline()
          .fromTo(
            enduranceCharge.current,
            miniAnimations.enduranceCharge.a1,
            miniAnimations.enduranceCharge.a2,
          );
        gsap
          .timeline()
          .fromTo(
            powerCharge.current,
            miniAnimations.powerCharge.a1,
            miniAnimations.powerCharge.a2,
          );
        gsap
          .timeline()
          .fromTo(
            frenzyCharge.current,
            miniAnimations.frenzyCharge.a1,
            miniAnimations.frenzyCharge.a2,
          );
      }
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
          className={`${styles.menuItem} ${
            usePathname() === '/about' && styles.isActive
          }`}
          onClick={() => router.push('/about')}
        >
          About
        </ul>
        <ul
          className={`${styles.menuItem} ${
            usePathname() === '/experience' && styles.isActive
          }`}
          onClick={() => router.push('/experience')}
        >
          Experience
        </ul>
        <ul
          className={`${styles.menuItem} ${
            usePathname() === '/resume' && styles.isActive
          }`}
          onClick={() => router.push('/resume')}
        >
          Resume
        </ul>
      </li>
      {/* <p className={styles.description}>
        Hi there, I’m a software developer and I like exploring and creating
        cool things on web apps. When I’m not doing that, I’m doing Muay Thai or
        Gym. Currently searching for my next gig
      </p> */}
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
      <div className={styles.contactSection}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/justin-low-111724184/"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={'2em'} />
        </a>
        <a
          target="_blank"
          href="https://github.com/jlow64"
          rel="noopener noreferrer"
        >
          <FaGithub size={'2em'} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
