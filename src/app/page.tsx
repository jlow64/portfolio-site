'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { Loader, Environment, ContactShadows } from '@react-three/drei';
import Experience from '@/components/Experience';
import styles from './page.module.css';
import { plusJakarta, oswald } from '@/styles/fonts';

export default function App() {
  return (
    <div
      className={`${styles.domContent} ${plusJakarta.variable} ${oswald.variable}`}
    >
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
        dpr={[1, 2]}
      >
        <Perf position="top-left" />
        <Suspense fallback={null}>
          <Experience />
          <Environment preset="city" />
          <color args={['#241a1a']} attach="background" />
          <ContactShadows
            position-y={-1.6}
            opacity={0.4}
            scale={5}
            blur={2.4}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
    // </div>
  );
}
