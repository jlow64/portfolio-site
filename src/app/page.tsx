'use client';

import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { Loader } from '@react-three/drei';
import Experience from '@/components/Experience';
import styles from './page.module.css';
import { plusJakarta, oswald } from '@/styles/fonts';

export default function Home() {
  return (
    <main
      className={`${styles.main} ${plusJakarta.variable} ${oswald.variable}`}
    >
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
        dpr={[1, 2]}
      >
        <Perf position="top-left" />
        <Experience />
      </Canvas>
      <Loader />
    </main>
  );
}
