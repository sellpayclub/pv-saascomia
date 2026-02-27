import React, { useEffect, useRef } from 'react';

export const MoneyEffect: React.FC = () => {
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

    for (let i = 0; i < columns / 3; i++) {
        drops.push({
            x: Math.random() * width,
            y: Math.random() * height,
            speed: Math.random() * 2 + 1
        });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#22c55e';
      ctx.font = `${fontSize}px monospace`;
      ctx.globalAlpha = 0.2;

      for (let i = 0; i < drops.length; i++) {
        ctx.fillText(symbols[0], drops[i].x, drops[i].y);
        drops[i].y += drops[i].speed;
        if (drops[i].y > height) {
          drops[i].y = -20;
          drops[i].x = Math.random() * width;
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

  return <canvas ref={canvasRef} className="fixed inset-0 block w-full h-full pointer-events-none" style={{ background: 'transparent' }} />;
};