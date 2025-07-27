'use client';

import { motion, useCycle } from 'framer-motion';

const shapes = {
  circle:
    'M150,75 C200,75 225,100 225,150 C225,200 200,225 150,225 C100,225 75,200 75,150 C75,100 100,75 150,75 Z',
  square:
    'M100,100 C100,100 200,100 200,100 C200,100 200,200 200,200 C200,200 100,200 100,200 C100,200 100,100 100,100 Z',
  diamond:
    'M150,75 C160,100 190,130 225,150 C190,170 160,200 150,225 C140,200 110,170 75,150 C110,130 140,100 150,75 Z',
  hexagon:
    'M150,75 C180,75 210,105 210,135 C210,165 180,195 150,195 C120,195 90,165 90,135 C90,105 120,75 150,75 Z',
  kite:
    'M150,75 C170,110 180,180 150,225 C120,180 130,110 150,75 Z',
  pentagon:
    'M150,75 C180,95 210,140 195,180 C180,215 120,215 105,180 C90,140 120,95 150,75 Z'
};

const shapeKeys = Object.keys(shapes) as (keyof typeof shapes)[];

export default function RayOrb() {
  const [current, cycleShape] = useCycle(...shapeKeys);

  return (
    <svg
      width={200}
      height={200}
      viewBox="0 0 300 300"
      className="z-10"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }}
    >
      <motion.path
        d={shapes[current]}
        fill="#fde047" // Tailwind yellow-300
        animate={{ d: shapes[current] }}
        transition={{ duration: 4, ease: [0.65, 0, 0.35, 1] }}
        onAnimationComplete={() => {
          setTimeout(() => cycleShape(), 800);
        }}
        filter="url(#orb-shadow)"
      />
      <defs>
        <filter id="orb-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="8"
            floodColor="#facc15"
            floodOpacity="0.6"
          />
        </filter>
      </defs>
    </svg>
  );
}
