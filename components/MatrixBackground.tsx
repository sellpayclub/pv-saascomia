import React, { useEffect, useRef } from 'react';

export const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateSize();

    const letters = '01SAASIA01$$$CodeDev'.split('');
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      if (!ctx) return;
      
      // Efeito de trail (rastro) suave
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(14, 165, 233, 0.4)'; // Azul Cyan futurista
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        
        // Letra brilhante na ponta
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#fff';
        } else {
          ctx.fillStyle = 'rgba(14, 165, 233, 0.5)';
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // 30fps aprox

    const handleResize = () => {
      updateSize();
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none" 
      style={{ background: 'transparent', zIndex: -1 }} 
    />
  );
};