interface AnimationsDetails {
  [animations: string]: {
    [animationPhase: string]: GSAPTweenVars;
  };
}

export const animations: AnimationsDetails = {
  powerCharge: {
    a1: {
      x: 0,
      y: 100,
      scale: 0.5,
      opacity: 1,
      webkitFilter: 'brightness(0.8)',
      filter: 'brightness(0.8)',
    },
    a2: {
      y: 300,
      scale: 0.8,
      duration: 1,
      webkitFilter: 'brightness(1.2)',
      filter: 'brightness(1.2)',
      ease: 'power2.out',
    },
    a3: {
      x: 250,
      y: 200,
      scale: 0.65,
      duration: 1,
      webkitFilter: 'brightness(0.95)',
      filter: 'brightness(0.95)',
      ease: 'power2.out',
    },
    a4: {
      x: 0,
      y: 100,
      scale: 0.5,
      duration: 1,
      webkitFilter: 'brightness(0.8)',
      filter: 'brightness(0.8)',
      ease: 'power2.out',
    },
  },
  frenzyCharge: {
    a1: {
      x: -100,
      y: 300,
      scale: 0.8,
      opacity: 1,
      webkitFilter: 'brightness(1.2)',
      filter: 'brightness(1.2)',
    },
    a2: {
      x: 150,
      y: 200,
      scale: 0.65,
      duration: 1,
      webkitFilter: 'brightness(0.95)',
      filter: 'brightness(0.95)',
      ease: 'power2.out',
    },
    a3: {
      x: -100,
      y: 100,
      scale: 0.5,
      duration: 1,
      webkitFilter: 'brightness(0.8)',
      filter: 'brightness(0.8)',
      ease: 'power2.out',
    },
    a4: {
      x: -100,
      y: 300,
      scale: 0.8,
      duration: 1,
      webkitFilter: 'brightness(1.2)',
      filter: 'brightness(1.2)',
      ease: 'power2.out',
    },
  },
  enduranceCharge: {
    a1: {
      x: 350,
      y: 190,
      scale: 0.65,
      opacity: 1,
      webkitFilter: 'brightness(0.95)',
      filter: 'brightness(0.95)',
    },
    a2: {
      x: 100,
      y: 100,
      scale: 0.5,
      duration: 1,
      webkitFilter: 'brightness(0.8)',
      filter: 'brightness(0.8)',
      ease: 'power2.out',
    },
    a3: {
      y: 300,
      scale: 0.8,
      duration: 1,
      webkitFilter: 'brightness(1.2)',
      filter: 'brightness(1.2)',
      ease: 'power2.out',
    },
    a4: {
      x: 350,
      y: 190,
      scale: 0.65,
      duration: 1,
      webkitFilter: 'brightness(0.95)',
      filter: 'brightness(0.95)',
      ease: 'power2.out',
    },
  },
};
