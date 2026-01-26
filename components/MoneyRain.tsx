import React, { useEffect, useRef } from 'react';

export const MoneyRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const symbols = ['$'];
    const fontSize = 20;
    const columns = width / fontSize;
    const drops: { x: number; y: number; speed: number }[] = [];

    // Initialize fewer drops for a subtle effect
    for (let i = 0; i < columns / 3; i++) {
        drops.push({
            x: Math.random() * width,
            y: Math.random() * height,
            speed: Math.random() * 2 + 1
        });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = '#22c55e'; // Green money color
      ctx.font = `${fontSize}px monospace`;
      ctx.globalAlpha = 0.3; // Make it subtle

      for (let i = 0; i < drops.length; i++) {
        const text = symbols[0];
        ctx.fillText(text, drops[i].x, drops[i].y);

        drops[i].y += drops[i].speed;

        if (drops[i].y > height) {
          drops[i].y = 0 - Math.random() * 50;
          drops[i].x = Math.random() * width;
          drops[i].speed = Math.random() * 2 + 1;
        }
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="block w-full h-full" />;
};