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
      <div className={styles.pageContainer}>
        Hi there,
        <br />
        <br /> I&apos;m a software developer and I like exploring and creating
        cool things on web apps. Experienced with REST API development, node.js,
        React, Next.js, Typescript and more, I&apos;m always learning and
        adopting new technologies. When I&apos;m not doing that, I&apos;m out
        there doing Muay Thai or Gym. Also a fellow Path of Exile enjoyer!
        <br />
        <br />
        <b>Currently searching for my next gig.</b>
      </div>
    </main>
  );
}
