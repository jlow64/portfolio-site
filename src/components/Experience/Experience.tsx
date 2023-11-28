import {
  Text,
  Html,
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  useGLTF,
} from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { Mesh } from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import Macbook from '@/components/Macbook';
import Iphone from '@/components/Iphone';

export default function Experience() {
  const catRef = useRef<Mesh>(null!);

  const cat = useGLTF('./models/Dingus the cat.glb');

  const { viewport } = useThree();
  const isDesktop = viewport.width > 5;

  useFrame(
    ({ clock }) =>
      catRef.current &&
      (catRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 3) * 0.5),
  );

  return (
    <>
      <Environment preset="city" />
      <color args={['#241a1a']} attach="background" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={isDesktop ? [-0.4, 0.2] : [-0.2, 0]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Suspense fallback={null}>
          <Float rotationIntensity={0.4}>
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={65}
              color={'#0f5e9e'}
              rotation={[-0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]}
            />
            {/* Macbook */}
            <Macbook
              visible={isDesktop}
              position-y={-1.2}
              rotation-x={0.13}
              scale={viewport.width / 8}
            />
            {/* iphone */}
            <Iphone
              visible={!isDesktop}
              position-y={-1.2}
              rotation-x={-0.3}
              rotation-y={-0.2}
            />

            {/* Cat */}
            <primitive
              visible={isDesktop}
              ref={catRef}
              object={cat.scene}
              position-x={viewport.width / 3.8}
              position-y={-0.8}
              rotation-y={-0.2}
              scale={viewport.width / 20}
            />

            <Text
              font="./fonts/PlusJakartaSans.ttf"
              fontSize={viewport.width / 15}
              position={
                isDesktop
                  ? [viewport.width / 5, viewport.width / 9, 0.75]
                  : [0, -1.3, 1]
              }
              rotation={isDesktop ? [0, -1, 0] : [-0.3, -0.4, -0.2]}
              maxWidth={isDesktop ? 2 : 1}
              textAlign="center"
            >
              JUSTIN LOW
            </Text>
          </Float>
        </Suspense>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
