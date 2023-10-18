import gsap from 'gsap';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { animations } from '@/constants';
import styles from './animation.module.css';

export default function Animation() {
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
    <div className={styles.pageContainer}>
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
    </div>
  );
}
