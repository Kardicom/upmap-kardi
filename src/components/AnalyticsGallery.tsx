'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface AnalyticsDataItem {
  id: number;
  title: string;
  description: string;
  image: string;
  metrics: {
    calls: string;
    yandexMaps: string;
    siteClicks: string;
    profileViews?: string;
    routes?: string;
  };
  period: string;
  totalViews: string;
  routes: string;
  calls: string;
  siteClicks: string;
}

const analyticsData: AnalyticsDataItem[] = [
  {
    id: 1,
    title: 'Два Доктора',
    description: 'Рост переходов в профиль на 15%, маршрутов на 1%, звонков на 32%, переходов на сайт на 23%',
    image: 'https://upmap.ru/images/YaB/2doc.webp',
    metrics: {
      calls: '+32%',
      yandexMaps: '+15%',
      siteClicks: '+23%'
    },
    period: '19.01.2025 — 19.02.2025',
    totalViews: '23 625',
    routes: '152',
    calls: '212',
    siteClicks: '309'
  },
  {
    id: 2,
    title: 'ЦЭЛТ',
    description: 'Рост переходов в профиль на 4%, маршрутов на 30%, звонков на 36%, переходов на сайт на 33%',
    image: 'https://upmap.ru/images/YaB/celt.webp',
    metrics: {
      calls: '+36%',
      yandexMaps: '+4%',
      siteClicks: '+33%'
    },
    period: '19.01.2025 — 19.02.2025',
    totalViews: '123 402',
    routes: '4 073',
    calls: '1 654',
    siteClicks: '5 115'
  },
  {
    id: 3,
    title: 'Деколь Мебель',
    description: 'Переходы в профиль -44%, маршруты +527%, звонки +149%, переходы на сайт +73%',
    image: 'https://upmap.ru/images/YaB/dmebel.webp',
    metrics: {
      calls: '+149%',
      yandexMaps: '+64%',
      siteClicks: '+73%'
    },
    period: '19.11.2024 — 19.02.2025',
    totalViews: '13 240',
    routes: '2 427',
    calls: '2 297',
    siteClicks: '708'
  },
  {
    id: 4,
    title: 'Медика',
    description: 'Переходы в профиль +132%, маршруты +45%, звонки +47%, переходы на сайт +40%',
    image: 'https://upmap.ru/images/YaB/medica.webp',
    metrics: {
      calls: '+47%',
      yandexMaps: '+31%',
      siteClicks: '+40%'
    },
    period: '19.01.2025 — 19.02.2025',
    totalViews: '37 640',
    routes: '433',
    calls: '291',
    siteClicks: '708'
  },
  {
    id: 5,
    title: 'Наша стоматология',
    description: 'Переходы в профиль +4%, маршруты +36%, звонки +14%, переходы на сайт +55%',
    image: 'https://upmap.ru/images/YaB/nashstomatolog.webp',
    metrics: {
      calls: '+14%',
      yandexMaps: '+1%',
      siteClicks: '+55%'
    },
    period: '19.01.2025 — 19.02.2025',
    totalViews: '54 708',
    routes: '713',
    calls: '407',
    siteClicks: '890'
  },
  {
    id: 6,
    title: 'Студия ортодонтии',
    description: 'Переходы в профиль +297%, маршруты +27%, звонки +20%, переходы на сайт +24%',
    image: 'https://upmap.ru/images/YaB/ortodont.webp',
    metrics: {
      calls: '+20%',
      yandexMaps: '+1534%',
      siteClicks: '+24%'
    },
    period: '19.01.2025 — 19.02.2025',
    totalViews: '24 756',
    routes: '386',
    calls: '208',
    siteClicks: '271'
  },
  {
    id: 7,
    title: 'Городской ветеринарный лечебно-диагностический центр №1',
    description: 'Переходы в профиль +3%, маршруты +12%, звонки +19%, переходы на сайт +23%',
    image: 'https://upmap.ru/images/YaB/vet1.webp',
    metrics: {
      calls: '+19%',
      yandexMaps: '+4%',
      siteClicks: '+23%'
    },
    period: '10.01.2025 — 10.02.2025',
    totalViews: '40 591',
    routes: '1 565',
    calls: '2 308',
    siteClicks: '930'
  }
];

export default function AnalyticsGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<AnalyticsDataItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const touch = useRef({ x: 0, y: 0, dx: 0, dy: 0, active: false });

  const scrollGalleryLeft = () => {
    if (galleryRef.current) {
      const container = galleryRef.current;
      const containerWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;
      const scrollAmount = Math.min(containerWidth * 0.8, 820);
      
      const newScrollLeft = Math.max(0, currentScroll - scrollAmount);
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const scrollGalleryRight = () => {
    if (galleryRef.current) {
      const container = galleryRef.current;
      const containerWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - containerWidth;
      const scrollAmount = Math.min(containerWidth * 0.8, 820);
      
      const newScrollLeft = Math.min(maxScroll, currentScroll + scrollAmount);
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const updateScrollButtons = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft < maxScrollLeft - 1);
    }
  };

  function handleTouchStart(e: React.TouchEvent) {
    if (e.touches && e.touches.length === 1) {
      touch.current.x = e.touches[0].clientX;
      touch.current.y = e.touches[0].clientY;
      touch.current.dx = 0;
      touch.current.dy = 0;
      touch.current.active = true;
    }
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!touch.current.active || !e.touches || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - touch.current.x;
    const dy = e.touches[0].clientY - touch.current.y;
    touch.current.dx = dx;
    touch.current.dy = dy;
  }

  function handleTouchEnd() {
    if (!touch.current.active) return;
    const { dx, dy } = touch.current;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const minSwipe = 50;
    if (absDx > absDy && absDx > minSwipe) {
      if (dx < 0) {
        nextImage();
      } else {
        prevImage();
      }
    } else if (absDy > absDx && absDy > minSwipe) {
      closeModal();
    }
    touch.current.active = false;
  }

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    
    el.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();
    
    const onWheel = (e: WheelEvent) => {
      if (el && el.scrollWidth > el.clientWidth) {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY * 2.5;
        }
      }
    };
    
    el.addEventListener('wheel', onWheel, { passive: false });
    
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    
    (window as any).analyticsModalOpen = true;
    
    function blockWheelEvents(e: WheelEvent) {
      const target = e.target as Element;
      const isInsideModal = target.closest('.modal-overlay, .modal-content');
      
      if (!isInsideModal) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
    
    const body = document.body;
    const html = document.documentElement;
    const originalBodyOverflow = body.style.overflow;
    const originalHtmlOverflow = html.style.overflow;
    
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    
    document.addEventListener('wheel', blockWheelEvents, { passive: false, capture: true });
    window.addEventListener('wheel', blockWheelEvents, { passive: false, capture: true });
    
    return () => {
      (window as any).analyticsModalOpen = false;
      
      document.removeEventListener('wheel', blockWheelEvents, { capture: true });
      window.removeEventListener('wheel', blockWheelEvents, { capture: true });
      
      body.style.overflow = originalBodyOverflow;
      html.style.overflow = originalHtmlOverflow;
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextImage();
          break;
        case 'Escape':
          event.preventDefault();
          closeModal();
          break;
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, analyticsData.length]);

  const openModal = (image: AnalyticsDataItem, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % analyticsData.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(analyticsData[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + analyticsData.length) % analyticsData.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(analyticsData[prevIndex]);
  };

  return (
    <>
      <div className="mt-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight font-sans">
            Детальная аналитика наших кейсов
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light font-sans">
            Реальные скриншоты из Яндекс.Бизнеса наших клиентов с подтвержденными результатами
          </p>
        </div>

        <div className="relative">
          <button
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 border border-gray-200 ${
              canScrollLeft 
                ? 'bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            onClick={scrollGalleryLeft}
            disabled={!canScrollLeft}
            aria-label="Прокрутить влево"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
            ref={galleryRef}
          >
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {analyticsData.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
                  style={{ width: '400px', flexShrink: 0 }}
                  onClick={() => openModal(item, index)}
                >
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 font-sans">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-base mb-4 line-clamp-2 font-light font-sans">
                      {item.description}
                    </p>
                    <div className="flex justify-between text-base font-medium">
                      <div className="text-center">
                        <div className="text-blue-600 font-bold text-lg">{item.metrics.calls}</div>
                        <div className="text-gray-500 text-xs">Нажатий "Позвонить"</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-600 font-bold text-lg">{item.metrics.yandexMaps}</div>
                        <div className="text-gray-500 text-xs">Яндекс Карты</div>
                      </div>
                      <div className="text-center">
                        <div className="text-orange-600 font-bold text-lg">{item.metrics.siteClicks}</div>
                        <div className="text-gray-500 text-xs">Переходы на сайт</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 border border-gray-200 ${
              canScrollRight 
                ? 'bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            onClick={scrollGalleryRight}
            disabled={!canScrollRight}
            aria-label="Прокрутить вправо"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex justify-center items-center p-4 overflow-y-auto max-h-screen modal-overlay"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={e => e.stopPropagation()}
          style={{ cursor: 'pointer', pointerEvents: 'auto' }}
        >
          <div
            className="relative flex flex-col items-center w-full max-w-6xl mx-auto modal-content"
            onClick={e => e.stopPropagation()}
            style={{ cursor: 'default', pointerEvents: 'auto' }}
          >
            <button
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-colors border-2 border-white focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={e => { e.stopPropagation(); closeModal(); }}
              aria-label="Закрыть"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
            >
              <X className="w-7 h-7 text-white" />
            </button>

            {analyticsData.length > 1 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                onClick={e => { e.stopPropagation(); prevImage(); }}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
            )}

            {analyticsData.length > 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                onClick={e => { e.stopPropagation(); nextImage(); }}
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            )}

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-w-6xl max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white max-w-4xl">
              <h3 className="text-3xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 mb-2 text-lg">{selectedImage.description}</p>
              <p className="text-gray-400 mb-6 text-sm">Период: {selectedImage.period}</p>
              {analyticsData.length > 1 && (
                <div className="mt-4 text-gray-400 text-sm">
                  {currentIndex + 1} из {analyticsData.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
