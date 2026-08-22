import React, { useEffect, useRef } from 'react';
import { SceneId } from '../types';

interface BackgroundStarsProps {
  currentScene: SceneId;
  isOpened: boolean;
  isSealed: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  speed: number;
  pulseSpeed: number;
  hue: number;
}

interface DustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export const BackgroundStars: React.FC<BackgroundStarsProps> = ({
  currentScene,
  isOpened,
  isSealed,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create starry field
    const starsCount = Math.min(140, Math.floor((width * height) / 8000));
    const stars: Star[] = Array.from({ length: starsCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.5,
      baseAlpha: Math.random() * 0.6 + 0.2,
      alpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.05 + 0.01,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      hue: Math.random() > 0.7 ? 45 : 220, // warm gold or midnight blue
    }));

    // Dust particles
    const dustCount = 28;
    const dust: DustParticle[] = Array.from({ length: dustCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.3 + 0.1,
    }));

    // Light points state (Clint & Maica)
    let clintX = width * 0.25;
    let clintY = height * 0.65;
    let maicaX = width * 0.75;
    let maicaY = height * 0.35;

    let targetClintX = clintX;
    let targetClintY = clintY;
    let targetMaicaX = maicaX;
    let targetMaicaY = maicaY;

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Deep celestial gradient background
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height * 0.4,
        10,
        width / 2,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, '#151624'); // soft navy lavender core
      bgGrad.addColorStop(0.5, '#0e0f18');
      bgGrad.addColorStop(1, '#07070b'); // deep twilight edge
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render subtle background stars
      stars.forEach((star) => {
        star.alpha =
          star.baseAlpha + Math.sin(time * star.pulseSpeed * 20) * 0.25;
        if (star.alpha < 0.1) star.alpha = 0.1;

        ctx.fillStyle = `hsla(${star.hue}, 80%, 90%, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Slow celestial drift
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
      });

      // Render floating warm dust particles
      dust.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;

        ctx.fillStyle = `rgba(224, 196, 138, ${d.alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Position logic based on scenes
      if (isOpened) {
        if (currentScene === 'classmates' || currentScene === 'grade11') {
          // Two separate shy lights floating
          targetClintX = width * 0.28 + Math.sin(time) * 18;
          targetClintY = height * 0.62 + Math.cos(time * 0.8) * 15;
          targetMaicaX = width * 0.72 + Math.cos(time * 0.9) * 18;
          targetMaicaY = height * 0.38 + Math.sin(time * 0.7) * 15;
        } else if (currentScene === 'gap') {
          // The Gap: Clint lower left, Maica higher right
          targetClintX = width * 0.22;
          targetClintY = height * 0.74;
          targetMaicaX = width * 0.78;
          targetMaicaY = height * 0.26;
        } else if (
          currentScene === 'and-yet' ||
          currentScene === 'karon-naa' ||
          currentScene === 'eleven-months' ||
          currentScene === 'everyday' ||
          currentScene === 'treasure' ||
          currentScene === 'prayer' ||
          currentScene === 'finale' ||
          isSealed
        ) {
          // Merged together in center warmth
          targetClintX = width * 0.49 + Math.sin(time * 0.5) * 8;
          targetClintY = height * 0.46 + Math.cos(time * 0.5) * 6;
          targetMaicaX = width * 0.51 + Math.cos(time * 0.5) * 8;
          targetMaicaY = height * 0.46 + Math.sin(time * 0.5) * 6;
        }

        // Smooth interpolation
        clintX += (targetClintX - clintX) * 0.04;
        clintY += (targetClintY - clintY) * 0.04;
        maicaX += (targetMaicaX - maicaX) * 0.04;
        maicaY += (targetMaicaY - maicaY) * 0.04;

        // Draw light connecting filament in 'gap' or merged state
        const dist = Math.hypot(maicaX - clintX, maicaY - clintY);

        if (dist < width * 0.6) {
          ctx.strokeStyle = `rgba(212, 175, 55, ${Math.max(
            0.05,
            1 - dist / (width * 0.6)
          ) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 6]);
          ctx.beginPath();
          ctx.moveTo(clintX, clintY);
          ctx.lineTo(maicaX, maicaY);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Draw Clint's warm star light
        const clintGlow = ctx.createRadialGradient(
          clintX,
          clintY,
          2,
          clintX,
          clintY,
          28
        );
        clintGlow.addColorStop(0, 'rgba(255, 235, 170, 0.9)');
        clintGlow.addColorStop(0.3, 'rgba(212, 175, 55, 0.4)');
        clintGlow.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = clintGlow;
        ctx.beginPath();
        ctx.arc(clintX, clintY, 28, 0, Math.PI * 2);
        ctx.fill();

        // Draw Maica's radiant star light
        const maicaGlow = ctx.createRadialGradient(
          maicaX,
          maicaY,
          2,
          maicaX,
          maicaY,
          32
        );
        maicaGlow.addColorStop(0, 'rgba(255, 248, 220, 0.95)');
        maicaGlow.addColorStop(0.3, 'rgba(224, 180, 240, 0.4)');
        maicaGlow.addColorStop(1, 'rgba(200, 160, 240, 0)');
        ctx.fillStyle = maicaGlow;
        ctx.beginPath();
        ctx.arc(maicaX, maicaY, 32, 0, Math.PI * 2);
        ctx.fill();

        // If merged (after And Yet), draw united halo
        if (dist < 40) {
          const unitedGlow = ctx.createRadialGradient(
            (clintX + maicaX) / 2,
            (clintY + maicaY) / 2,
            10,
            (clintX + maicaX) / 2,
            (clintY + maicaY) / 2,
            120
          );
          unitedGlow.addColorStop(0, 'rgba(255, 225, 150, 0.16)');
          unitedGlow.addColorStop(0.6, 'rgba(212, 175, 55, 0.05)');
          unitedGlow.addColorStop(1, 'rgba(212, 175, 55, 0)');
          ctx.fillStyle = unitedGlow;
          ctx.beginPath();
          ctx.arc(
            (clintX + maicaX) / 2,
            (clintY + maicaY) / 2,
            120,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentScene, isOpened, isSealed]);

  return (
    <canvas
      ref={canvasRef}
      id="celestial-background-canvas"
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
