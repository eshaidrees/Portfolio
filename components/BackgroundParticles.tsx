"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  targetAlpha: number;
  shimmerSpeed: number;
  baseRadius: number;
}

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    // Theme Colors
    const colors = [
      "rgba(212, 175, 55, ",  // Gold
      "rgba(0, 212, 255, ",   // Neon Blue
      "rgba(168, 85, 247, ",  // Neon Purple
      "rgba(255, 255, 255, ", // Star White
    ];

    const getParticleCount = (w: number) => {
      // Scale particles based on screen width for performance
      if (w < 640) return 40;   // Mobile
      if (w < 1024) return 80;  // Tablet
      return 140;               // Desktop
    };

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      particles = [];
      const particleCount = getParticleCount(width);

      for (let i = 0; i < particleCount; i++) {
        const baseRadius = Math.random() * 1.5 + 0.5; // Small stars and glowing dots
        const colorIdx = Math.floor(Math.random() * colors.length);
        const alpha = Math.random() * 0.5 + 0.2; // Start with some visibility

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15, // Ultra slow elegant drift
          vy: (Math.random() - 0.5) * 0.15,
          radius: baseRadius,
          baseRadius,
          color: colors[colorIdx],
          alpha,
          targetAlpha: alpha,
          shimmerSpeed: 0.005 + Math.random() * 0.015,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw neural net/constellation connections first (so they are in background)
      const connectionDistance = 100;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Draw connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.08 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw interactive connection to mouse if active
        if (mouseRef.current.active) {
          const mdx = p1.x - mouseRef.current.x;
          const mdy = p1.y - mouseRef.current.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouseRef.current.radius) {
            const mAlpha = (1 - mdist / mouseRef.current.radius) * 0.12 * p1.alpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            // Light blue-gold connection to mouse
            ctx.strokeStyle = `rgba(0, 212, 255, ${mAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // 2. Update and Draw Particles
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Shimmer effect (slowly fade in/out)
        if (Math.abs(p.alpha - p.targetAlpha) < 0.05) {
          p.targetAlpha = Math.random() * 0.6 + 0.1;
        }
        p.alpha += (p.targetAlpha - p.alpha) * p.shimmerSpeed;

        // Mouse avoidance/interaction (gentle push)
        if (mouseRef.current.active) {
          const mdx = p.x - mouseRef.current.x;
          const mdy = p.y - mouseRef.current.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouseRef.current.radius) {
            const force = (mouseRef.current.radius - mdist) / mouseRef.current.radius;
            // Push direction
            const pushX = (mdx / mdist) * force * 0.4;
            const pushY = (mdy / mdist) * force * 0.4;

            p.x += pushX;
            p.y += pushY;
            // Temporarily enlarge particles slightly near mouse for interactive touch
            p.radius = p.baseRadius + force * 0.8;
          } else {
            p.radius += (p.baseRadius - p.radius) * 0.1;
          }
        } else {
          p.radius += (p.baseRadius - p.radius) * 0.1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        // Create a small radial glow for the gold/neon stars
        if (p.baseRadius > 1.2) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = p.color === colors[0] ? "#d4af37" : p.color === colors[1] ? "#00d4ff" : "#a855f7";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      });

      // Reset shadow blur for other drawing operations
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(draw);
    };

    // Event Listeners
    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    
    // Mobile Touch support
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Initial setup
    init();
    draw();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
