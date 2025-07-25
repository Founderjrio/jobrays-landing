'use client';
import { useEffect, useState, useRef } from 'react';

const careerLines = [
  "Analyzing your career path...",
  "Searching for growth signals...",
  "Mapping hidden opportunities...",
  "Scanning global career ladders...",
  "Coming very soon..."
];

const icons = [
  "ai", "brain", "briefcase", "career-path", "certificate", "cloud-computing",
  "compass", "dashboard", "electronic", "face-scan", "flow-diagram", "graduation",
  "graduation-hat", "growing", "growth", "idea", "machine-learning", "map",
  "mesh", "neural-network", "quality", "radar", "resume", "robot",
  "satellite", "seo", "target", "testing", "group-idea", "brainstorm", "bbn",
  "analysis", "analytics", "global-network", "around-the-world", "learning-curve", "curve",
  "interview", "leadership", "mentoring", "opportunity", "motivation", "self-improvement",
  "self-awareness", "cognitive", "performance", "learning-journey", "sunshine", "summer"
];

// 🔧 Generate safe icon positions only once
const generateIconPositions = () => {
  const centerBuffer = typeof window !== "undefined" && window.innerWidth < 768 ? 35 : 25;

  return Array.from({ length: icons.length * 2 }, () => {
    let top, left, distance;
    do {
      top = Math.random() * 100;
      left = Math.random() * 100;
      const dx = top - 50;
      const dy = left - 50;
      distance = Math.sqrt(dx * dx + dy * dy);
    } while (distance < centerBuffer);

    const isNearText = distance < 38;
    return {
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: `${Math.random() * 12}s`,
      pushClass: isNearText ? 'icon-nudge' : ''
    };
  });
};

export default function RayTeaser() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const iconStyles = useRef(generateIconPositions());

  // ⌨️ Typewriter effect
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
        Meet Your New Career Mentor
      </h2>

      <div className="glass-box w-full max-w-2xl h-80 sm:h-96 relative flex flex-col items-center justify-center animate-float shadow-lg overflow-hidden rounded-xl">

        {/* 🔁 Render floating icons (locked position) */}
        {Array.from({ length: 2 }).flatMap((_, repeatIndex) =>
          icons.map((icon, i) => {
            const idx = i + repeatIndex * icons.length;
            const { top, left, animationDelay, pushClass } = iconStyles.current[idx];

            return (
              <img
                key={`${icon}-${repeatIndex}`}
                src={`/images/icons/${icon}.png`}
                alt={icon}
                className={`floating-icon w-5 h-5 sm:w-6 sm:h-6 ${pushClass}`}
                style={{ top, left, animationDelay }}
              />
            );
          })
        )}

        {/* ☀️ Orb */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-400 animate-orbPulse z-10" />

        {/* ✍️ Typing text */}
        <p className="italic mt-4 text-[var(--muted)] z-10 text-sm sm:text-base px-2 sm:px-0 leading-tight">
          {displayedText}
        </p>

        {/* ✨ Glow */}
        <div className="absolute inset-0 bg-yellow-200 opacity-5 rounded-xl pointer-events-none animate-glowPulse" />
      </div>
    </section>
  );
}
