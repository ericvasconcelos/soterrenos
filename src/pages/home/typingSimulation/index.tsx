import { useEffect, useState } from 'react';

export const TypingSimulation = () => {
  const texts = 2;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev < texts - 1 ? prev + 1 : 0));
    }, 6000);

    return () => clearTimeout(timeout);
  }, [currentIndex, texts]);

  return (
    <div className="h-[90px] mb-8">
      <h1
        className={`mb-8 text-4xl font-semibold leading-tight ${currentIndex === 0 ? 'fade-in-up' : 'fade-out-up'}`}
      >
        Encontre o <span className="text-primary-700">terreno</span> dos seus
        <br />
        sonhos em alguns <span className="text-primary-700">minutos</span>
      </h1>
      <h1
        className={`mb-8 text-4xl font-semibold leading-tight ${currentIndex === 1 ? 'fade-in-up' : 'fade-out-up'}`}
      >
        <span className="text-primary-700">Venda</span> seu terreno de
        <br />
        forma <span className="text-primary-700">fácil e gratuita</span>
      </h1>
    </div>
  );
};
