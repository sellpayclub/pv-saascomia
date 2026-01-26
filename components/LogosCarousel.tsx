import React from 'react';

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lovable_Logo_%2B_Wordmark_Black.png/901px-Lovable_Logo_%2B_Wordmark_Black.png",
  "https://www.freelogovectors.net/wp-content/uploads/2025/06/cursor-logo-freelogovectors.net_.png",
  "https://developers.google.com/static/focus/images/antigravity-icon.png?hl=pt-br",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1280px-Google_Gemini_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vercel_logo_2025.svg",
  "https://rupturaviral.ai/wp-content/uploads/2025/03/Prancheta-4.webp",
  "https://rupturaviral.ai/wp-content/uploads/2025/03/Prancheta-5-copiar.webp",
  "https://rupturaviral.ai/wp-content/uploads/2025/03/Prancheta-2.webp",
  "https://rupturaviral.ai/wp-content/uploads/2025/03/Prancheta-5.webp",
  "https://rupturaviral.ai/wp-content/uploads/2025/03/Prancheta-3.webp",
  "https://rupturaviral.ai/wp-content/uploads/2025/03/Prancheta-1.webp"
];

export const LogosCarousel: React.FC = () => {
  return (
    <section className="py-10 bg-black border-y border-slate-900 overflow-hidden relative z-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black z-10"></div>
      <div className="flex w-max animate-scroll gap-16 items-center">
        {/* Double the logos for infinite scroll effect */}
        {[...logos, ...logos].map((logo, index) => (
           <img 
             key={index} 
             src={logo} 
             alt="Tool Logo" 
             className="h-8 md:h-12 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
           />
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};