'use client';

import React, { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // max ±5%
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

    container.style.setProperty('--parallax-x', `${x}px`);
    container.style.setProperty('--parallax-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty('--parallax-x', `0px`);
    container.style.setProperty('--parallax-y', `0px`);
  };

  return (
    <section className="min-h-screen w-full bg-[var(--background)] flex flex-col justify-center items-center px-6 text-center">
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] max-w-4xl leading-tight">
        The World’s Most Helpful AI Mentor
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-lg sm:text-xl text-[var(--muted)] max-w-2xl">
        Set your dream role. Let <span className="font-semibold text-[var(--foreground)]">Ray</span> guide you step-by-step to achieve it — with clarity, progress, and confidence.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="btn-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
          Join the Waitlist
        </button>
        <button className="btn-outline hover:shadow-md hover:scale-105 transition-all duration-200">
          How JobRays Work
        </button>
      </div>

      {/* Glass Box with Parallax Doodle Background */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="mt-16 w-full max-w-3xl h-64 glass-box relative overflow-hidden rounded-xl"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out will-change-transform"
          style={{
            backgroundImage: 'url("/images/doodle-bg.png")',
            transform: `translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0)`,
          }}
        />
      </div>
    </section>
  );
}
