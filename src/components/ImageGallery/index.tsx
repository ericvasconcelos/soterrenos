import { useEffect, useState } from 'react';

import { Button, Icon, VideoPlayer } from '@/components';

import { IImageGallery } from './types';

export const ImageGallery = ({
  images,
  videoUrl,
  initialIndex,
  close,
}: IImageGallery) => {
  const [tab, setTab] = useState<'images' | 'video'>('images');
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  const prevImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! === 0 ? images.length - 1 : prev! - 1));
    }
  };

  const nextImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! === images.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <button
        className="appearence-none absolute top-3 right-4 flex align-items gap-2 px-4 py-2 rounded-md leading-[1.3] font-medium text-white transition hover:bg-gray-700 cursor-pointer"
        onClick={close}
      >
        Fechar
        <Icon name="x-mark" color="light" size={24} />
      </button>

      {tab === 'images' && (
        <>
          <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white">
            {currentIndex + 1}/{images.length}
          </span>

          <div className="relative max-w-7xl w-full mx-22">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt ?? `Image ${currentIndex + 1}`}
              className="w-full h-auto max-h-[80vh] rounded-md object-contain fade-in"
            />
          </div>

          {currentIndex !== 0 && (
            <button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-transparent p-2 border-2 border-white rounded-full transition hover:opacity-80 cursor-pointer"
              onClick={prevImage}
            >
              <Icon name="arrow-left" size={24} color="light" />
            </button>
          )}

          {currentIndex !== images.length - 1 && (
            <button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-transparent p-2 border-2 border-white rounded-full transition hover:opacity-80 cursor-pointer"
              onClick={nextImage}
            >
              <Icon name="arrow-right" size={24} color="light" />
            </button>
          )}
        </>
      )}

      {tab === 'video' && !!videoUrl && (
        <div className="w-full max-w-[1090px]">
          <VideoPlayer url={videoUrl} />
        </div>
      )}

      {!!videoUrl && (
        <span className="absolute flex justify-center gap-4 bottom-6 left-1/2 transform -translate-x-1/2 text-white">
          <Button
            variant={tab === 'images' ? 'secondary' : 'tertiary'}
            size="small"
            onClick={() => setTab('images')}
          >
            Imagens
          </Button>
          <Button
            variant={tab === 'video' ? 'secondary' : 'tertiary'}
            size="small"
            onClick={() => setTab('video')}
          >
            Vídeo
          </Button>
        </span>
      )}
    </div>
  );
};
