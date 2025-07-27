/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef, useState } from 'react';
import RayOrb from './RayOrb'; // 👈 Make sure RayOrb.tsx is in the same folder

const debug = false;
const careerLines = [
  'Analyzing your career path...',
  'Searching for growth signals...',
  'Mapping hidden opportunities...',
  'Scanning global career ladders...',
  'Coming very soon...'
];

const icons = [
  'ai', 'brain', 'briefcase', 'career-path', 'certificate', 'cloud-computing',
  'compass', 'dashboard', 'electronic', 'face-scan', 'flow-diagram', 'graduation',
  'growing', 'growth', 'idea', 'machine-learning', 'map', 'mesh',
  'neural-network', 'quality', 'radar', 'resume', 'robot',
  'satellite', 'seo', 'target', 'testing', 'group-idea', 'brainstorm', 'bbn',
  'analysis', 'analytics', 'global-network', 'around-the-world', 'learning-curve', 'curve',
  'interview', 'leadership', 'mentoring', 'opportunity', 'motivation', 'self-improvement',
  'self-awareness', 'cognitive', 'performance', 'learning-journey', 'sunshine', 'summer'
];

const iconCount = Math.floor(icons.length * 1.3);
const iconSet = Array.from({ length: iconCount }, (_, i) => icons[i % icons.length]);

export default function RayTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const iconRefs = useRef<(HTMLImageElement | null)[]>([]);
  const velocities = useRef<{ x: number; y: number }[]>([]);
  const iconPositions = useRef<{ x: number; y: number }[]>([]);
  const orbBaseRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 120;

  useEffect(() => {
    velocities.current = iconSet.map(() => ({
      x: (Math.random() - 0.5) * 0.2,
      y: (Math.random() - 0.5) * 0.2
    }));
    iconPositions.current = iconSet.map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
  }, []);

  useEffect(() => {
    let frameId: number;

    const animate = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const orbCenter = {
        x: containerRect.left + containerRect.width / 2,
        y: containerRect.top + containerRect.height / 2
      };

      iconRefs.current.forEach((icon, i) => {
        if (!icon) return;

        const pos = iconPositions.current[i];
        const vel = velocities.current[i];

        pos.x += vel.x;
        pos.y += vel.y;

        if (pos.x < 0 || pos.x > 100) velocities.current[i].x *= -1;
        if (pos.y < 0 || pos.y > 100) velocities.current[i].y *= -1;

        const px = containerRect.left + (pos.x / 100) * containerRect.width;
        const py = containerRect.top + (pos.y / 100) * containerRect.height;

        const dx = px - orbCenter.x;
        const dy = py - orbCenter.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < orbBaseRadius) {
          const factor = (orbBaseRadius - dist) / orbBaseRadius;
          velocities.current[i].x += (dx / dist) * factor * 0.1;
          velocities.current[i].y += (dy / dist) * factor * 0.1;
        }

        icon.style.left = `${pos.x}%`;
        icon.style.top = `${pos.y}%`;
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;
    const typeLine = () => {
      if (charIndex <= careerLines[lineIndex].length) {
        setDisplayedText(careerLines[lineIndex].slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(typeLine, 50);
      } else {
        setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % careerLines.length);
        }, 2000);
      }
    };
    typeLine();
    return () => clearTimeout(timeout);
  }, [lineIndex]);

  return (
    <section className="py-24 px-4 sm:px-6 flex flex-col items-center justify-center text-center bg-[var(--background)]">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-10">
        Your AI Career Mentor is Coming to Life...
      </h2>
      
      <div
        ref={containerRef}
         className="glass-box relative w-full max-w-2xl h-96 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        {/* 🧠 Morphing Orb */}
        <RayOrb />

        {/* 💬 Typing Line Below Orb */}
        <p
          className="absolute w-full text-center text-sm sm:text-base text-[var(--muted)] leading-tight z-20"
          style={{ top: `calc(50% + ${orbBaseRadius / 1.5}px)` }}
        >
          {displayedText}
        </p>

        {/* 🧊 Floating Icons */}
        {iconSet.map((icon, i) => (
          <img
            key={i}
            ref={((el) => {
              iconRefs.current[i] = el;
            }) as React.RefCallback<HTMLImageElement>}
            src={`/images/icons/${icon}.png`}
            alt={icon}
            className="absolute w-5 h-5 sm:w-6 sm:h-6 opacity-90"
            style={{
              top: `${iconPositions.current[i]?.y ?? 0}%`,
              left: `${iconPositions.current[i]?.x ?? 0}%`
            }}
          />
        ))}
      </div>
    </section>
  );
}
