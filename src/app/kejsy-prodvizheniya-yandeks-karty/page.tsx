'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { X, ZoomIn, MapPin, Calendar, Eye, TrendingUp, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useOrderModal } from '@/contexts/OrderModalContext';
import dynamic from 'next/dynamic';

const AnalyticsGallery = dynamic(() => import('@/components/AnalyticsGallery'), {
  ssr: false,
  loading: () => (
    <div className="py-24 text-center">
      <div className="animate-pulse text-gray-500">Загрузка аналитики...</div>
    </div>
  )
});

const GalleryPage = () => {
  const { openModal: openOrderModal } = useOrderModal();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = (e: any) => setIsMenuOpen(!!e.detail);
    window.addEventListener('upmap-menu-toggle', handler);
    return () => window.removeEventListener('upmap-menu-toggle', handler);
  }, []);

  const categories = [
    { id: 'all', name: 'Все кейсы' },
    { id: 'restaurants', name: 'Рестораны и кафе' },
    { id: 'beauty', name: 'Салоны красоты' },
    { id: 'auto', name: 'Автосервисы' },
    { id: 'medical', name: 'Медицина' },
    { id: 'retail', name: 'Розничная торговля' },
    { id: 'services', name: 'Услуги' }
  ];

  const projects = [
    {
      id: 1,
      title: "Стоматология 'Digital Grin'",
      category: "medical",
      location: "г. Москва, ул. Большая Академическая, 63",
      date: "Февраль 2025",
      beforeImage: "https://upmap.ru/images/Digitalgrin/Digitalgrin1.webp",
      afterImage: "https://upmap.ru/images/Digitalgrin/Digitalgrin2.webp",
      problem: [
        "Нет фирменного визуала и единого стиля оформления.",
        "Истории и услуги не структурированы, отсутствуют понятные иконки и разделы.",
        "Нет акцентных баннеров и визуальных блоков для акций, команды, преимуществ.",
        "Сложно быстро найти нужную информацию: описание, цены, фото, контакты.",
        "Мало вовлекающих элементов для взаимодействия (нет кнопок, призывов, удобной навигации)."
      ],
      solution: [
        "Разработан фирменный стиль и визуальные элементы для карточки.",
        "Добавлены акцентные баннеры, иконки, отдельные блоки для акций, команды, преимуществ.",
        "Внедрена структурированная подача: истории, новости, товары и услуги вынесены в отдельные секции.",
        "Добавлены кнопки для быстрого взаимодействия (запись, звонок, маршрут, сайт).",
        "Обновлены фотографии и описания услуг, добавлены цены и подробности."
      ],
      results: [
        "Карточка стала заметно современнее и удобнее для пользователя.",
        "Появились новые точки входа для клиентов: быстрые действия, акционные предложения, подробные услуги.",
        "Увеличилась вовлечённость: больше просмотров, переходов и обращений (по оценке — рост кликов и взаимодействий на 50-100%)."
      ]
    },
    {
      id: 2,
      title: "Кабинет косметолога Екатерины Коваленко",
      category: "beauty",
      location: "г. Ростов-на-Дону, ул. Социалистическая, 74",
      date: "Февраль 2025",
      beforeImage: "https://upmap.ru/images/EKovalenko/EKovalenko1.webp",
      afterImage: "https://upmap.ru/images/EKovalenko/EKovalenko2.webp",
      problem: [
        "Нет фирменного стиля и привлекательной обложки.",
        "Услуги и акции не структурированы, отсутствуют отдельные разделы и визуальные акценты.",
        "Мало информативных описаний и фотографий, сложно понять преимущества и ассортимент.",
        "Нет удобной навигации по услугам, отсутствуют категории и фильтры.",
        "Недостаточно вовлекающих элементов для клиентов (нет кнопок, акций, историй о специалисте)."
      ],
      solution: [
        "Разработан современный фирменный стиль и баннер для карточки.",
        "Добавлены отдельные блоки для акций, услуг, историй, преимуществ.",
        "Внедрена структурированная подача: услуги разбиты по категориям, добавлены подробные описания и цены.",
        "Обновлены фотографии, добавлены визуальные акценты и иконки.",
        "Добавлены кнопки для быстрого взаимодействия (запись, звонок, маршрут)."
      ],
      results: [
        "Карточка стала более привлекательной и информативной для клиентов.",
        "Появились новые точки входа: акции, подробные услуги, истории, быстрые действия.",
        "Увеличилась вовлечённость: рост просмотров, обращений и записей (по оценке — увеличение активности на 50-100%)."
      ]
    },
    {
      id: 3,
      title: "Косметология 'Meda proff'",
      category: "beauty",
      location: "г. Ростов-на-Дону, ул. Красноармейская, 157",
      date: "Февраль 2025",
      beforeImage: "https://upmap.ru/images/Meda_PROFF_BSK/Meda_PROFF_BSK1.webp",
      afterImage: "https://upmap.ru/images/Meda_PROFF_BSK/Meda_PROFF_BSK2.webp",
      problem: [
        "Нет фирменного визуального стиля и привлекательной обложки.",
        "Отсутствуют информативные и качественные фотографии услуг.",
        "Услуги не структурированы, мало описаний и визуальных акцентов.",
        "Нет акций, историй, новостей и вовлекающего контента.",
        "Сложно понять преимущества компании, низкая вовлечённость пользователей."
      ],
      solution: [
        "Разработан фирменный стиль и создана яркая обложка.",
        "Добавлены качественные фотографии для каждой услуги.",
        "Услуги структурированы, добавлены подробные описания и цены.",
        "Оформлены иконки, акции, истории, новости и визуальные блоки.",
        "Обновлён раздел «О компании», добавлены контактные данные и быстрые действия."
      ],
      results: [
        "Карточка стала современной, информативной и привлекательной.",
        "Появились новые разделы: акции, истории, новости, подробные услуги.",
        "Улучшена видимость и рейтинг, появились отзывы и оценки.",
        "Существенно выросло количество просмотров, переходов и обращений.",
        "Увеличилось количество записей и звонков от клиентов."
      ]
    },
    {
      id: 4,
      title: "Салон красоты 'LaserLove'",
      category: "beauty",
      location: "г. Ростов-на-Дону, просп. Чехова, 51",
      date: "Февраль 2025",
      beforeImage: "https://upmap.ru/images/laserlove/laserlove1.webp",
      afterImage: "https://upmap.ru/images/laserlove/laserlove2.webp",
      problem: [
        "Тексты на обложках историй невозможно было прочитать",
        "Услуги не имели описаний",
        "Не было яркой «обложки»",
        "Особенности компании никак не выделялись",
        "Названия услуг были запутаны и не распознавались алгоритмами Яндекса",
        "В прайсе отсутствовали фотографии"
      ],
      solution: [
        "Составили и отредактировали прайс",
        "Добавили SEO-описания ко всем услугам",
        "Оптимизировали фото",
        "Обновили галерею компании",
        "Написали SEO-новости",
        "Переписали раздел «О компании»",
        "Разработали визуал в фирменном стиле"
      ],
      results: [
        "Появление в ТОП-3 Яндекс.Карт",
        "Переходов на сайт: +757 переходов (+91%)",
        "Просмотры фото: +16 151 просмотров (+1721%)",
        "Клики по телефону: +164 звонков (+80%)"
      ]
    },
    {
      id: 5,
      title: "Клиника Подологии 'Nec Podology'",
      category: "medical",
      location: "г. Челябинск, ул. Коммуны, 106",
      date: "Февраль 2025",
      beforeImage: "https://upmap.ru/images/necpodology/necpodology1.webp",
      afterImage: "https://upmap.ru/images/necpodology/necpodology2.webp",
      problem: [
        "Отсутствие в Яндекс.Услугах",
        "Мало заявок (менее 5 в неделю)",
        "Неполная информация в профиле",
        "Отсутствие четкого прайс-листа",
        "Нет описания преимуществ компании",
        "Фотографии низкого качества",
        "Нет отзывов и рейтинга"
      ],
      solution: [
        "Расширили прайс и структурировали услуги",
        "Написали SEO-описания к каждой услуге",
        "Прошили фото",
        "Написали SEO-новости",
        "Переписали раздел «О компании»",
        "Разработали визуал в фирменном стиле"
      ],
      results: [
        "ТОП-3 в категории 'Салоны красоты'",
        "Переходы из Яндекс.Поиска: +3645 переходов (+19%)",
        "Нажатий позвонить: +75 (15%)",
        "Переходы на сайт: +157 действия (+15%)"
      ]
    },
    {
      id: 6,
      title: "Салон красоты 'YG BY YG'",
      category: "beauty",
      location: "г. Краснодар, Таманская ул., 153, корп. 3",
      date: "Январь 2025",
      beforeImage: "https://upmap.ru/images/ygbyyg/ygbyyg1.webp",
      afterImage: "https://upmap.ru/images/ygbyyg/ygbyyg2.webp",
      problem: [
        "В прайсе было всего 50 услуг",
        "Не было цепляющей обложки и историй",
        "Уникальность компании не раскрыта",
        "Раздел «О компании» был как у всех",
        "Фото в прайсе отсутствовали",
        "Видимость по поисковым запросам была на нуле"
      ],
      solution: [
        "Расширили и отредактировали прайс до 164 услуг",
        "Добавили SEO-описания ко всем услугам",
        "Прошили фото",
        "Загрузили весь контент в аккаунт",
        "Написали SEO-новости",
        "Переписали раздел «О компании»",
        "Разработали визуал в фирменном стиле"
      ],
      results: [
        "Переходы из Яндекс.Карт: +216 переходов (+41%)",
        "Яндекс навигатор: +16 звонков (+14%)",
        "Переходы на сайт: +15 переходов (+150%)"
      ]
    },
    {
      id: 7,
      title: "Караоке клуб 'В Питере — петь'",
      category: "restaurants",
      location: "г. Санкт-Петербург, Гражданский просп., 113, корп. 3, этаж 2",
      date: "Июнь 2025",
      beforeImage: "https://upmap.ru/images/vpiterepet/vpiterepet1.webp",
      afterImage: "https://upmap.ru/images/vpiterepet/vpiterepet2.webp",
      problem: [
        "Услуги не были добавлены вообще — в прайсе было 0 позиций",
        "Отсутствовали обложка, истории и визуальная структура",
        "Не было основного фото, которое цепляет взгляд",
        "В карточке не раскрывались особенности бизнеса",
        "Прайс был без фото — а значит, конверсия в переходы была мизерной"
      ],
      solution: [
        "Составили и отредактировали прайс до 45 услуг",
        "Добавили SEO-описания ко всем услугам",
        "Оптимизировали фото",
        "Загрузили весь контент в аккаунт",
        "Написали SEO-новости",
        "Переписали раздел «О компании»",
        "Разработали визуал в фирменном стиле"
      ],
      results: [
        "Переходы из Яндекс.Поиска: +249 перехода (+93%)",
        "Проложено маршрутов: +24 (+100%)",
        "Переходы из Яндекс.Карт: +128 переходов (+38%)",
        "Нажатий позвонить: +3 действий (+50%)"
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredProjects.length - 1 : selectedImage - 1);
    }
  };

  const getCardWidth = () => {
    if (typeof window === 'undefined') return 400;
    if (window.innerWidth < 768) {
      return window.innerWidth;
    }
    return 400;
  };

  const scrollCarouselLeft = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const containerWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;
      const cardWidth = getCardWidth();
      const scrollAmount = Math.min(containerWidth * 0.8, cardWidth * 2);
      
      const newScrollLeft = Math.max(0, currentScroll - scrollAmount);
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const scrollCarouselRight = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const containerWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - containerWidth;
      const cardWidth = getCardWidth();
      const scrollAmount = Math.min(containerWidth * 0.8, cardWidth * 2);
      
      const newScrollLeft = Math.min(maxScroll, currentScroll + scrollAmount);
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const carouselTouch = useRef({ x: 0, y: 0, dx: 0, dy: 0, active: false });

  const handleCarouselTouchStart = (e: React.TouchEvent) => {
    if (e.touches && e.touches.length === 1) {
      carouselTouch.current.x = e.touches[0].clientX;
      carouselTouch.current.y = e.touches[0].clientY;
      carouselTouch.current.dx = 0;
      carouselTouch.current.dy = 0;
      carouselTouch.current.active = true;
    }
  };

  const handleCarouselTouchMove = (e: React.TouchEvent) => {
    if (!carouselTouch.current.active || !e.touches || e.touches.length !== 1) return;
    
    const dx = e.touches[0].clientX - carouselTouch.current.x;
    const dy = e.touches[0].clientY - carouselTouch.current.y;
    carouselTouch.current.dx = dx;
    carouselTouch.current.dy = dy;
    
    if (Math.abs(dx) > Math.abs(dy)) {
      e.preventDefault();
    }
  };

  const handleCarouselTouchEnd = () => {
    if (!carouselTouch.current.active) return;
    const { dx, dy } = carouselTouch.current;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const minSwipe = 30;
    
    if (absDx > absDy && absDx > minSwipe) {
      if (dx < 0) {
        scrollCarouselRight();
      } else {
        scrollCarouselLeft();
      }
    }
    carouselTouch.current.active = false;
  };

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft < maxScrollLeft - 1);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();

      return () => {
        carousel.removeEventListener('scroll', updateScrollButtons);
      };
    }
  }, [filteredProjects]);

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
  }, [selectedImage, filteredProjects.length]);

  const touch = useRef({ x: 0, y: 0, dx: 0, dy: 0, active: false });

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
    }
    touch.current.active = false;
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-8 md:py-32 bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900 text-white relative border-b border-slate-800 shadow-xl">
        <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-slate-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="absolute top-16 left-16 w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
          <div className="absolute top-16 right-16 w-3 h-3 bg-slate-300 rounded-full opacity-50"></div>
          <div className="absolute bottom-16 left-16 w-3 h-3 bg-indigo-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-16 right-16 w-4 h-4 bg-blue-200 rounded-full opacity-55"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-slate-200 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-200 rounded-full opacity-50"></div>
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-300 rounded-full opacity-65"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-slate-300 rounded-full opacity-55"></div>
          
          <svg className="absolute inset-0 w-full h-full opacity-20 text-blue-300" viewBox="0 0 1000 1000">
            <line x1="100" y1="100" x2="300" y2="200" stroke="currentColor" strokeWidth="2"/>
            <line x1="300" y1="200" x2="700" y2="250" stroke="currentColor" strokeWidth="2"/>
            <line x1="700" y1="250" x2="900" y2="200" stroke="currentColor" strokeWidth="2"/>
            <line x1="180" y1="550" x2="450" y2="480" stroke="currentColor" strokeWidth="1"/>
            <line x1="450" y1="480" x2="720" y2="530" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: '1440px' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-lg">Кейсы и результаты</h1>
            <p className="text-2xl text-slate-200 leading-relaxed mb-2 font-medium">
              Реальные примеры того, как мы помогли бизнесу стать видимым в картах и увеличить поток клиентов.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Каждый кейс — это конкретные цифры и результаты.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className={`hidden md:block py-8 bg-white border-b border-slate-100 shadow-md ${isMenuOpen ? '' : 'sticky top-20 z-40'}`}> 
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-7 py-3 rounded-full font-semibold text-base transition-all duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Carousel */}
      <section className="py-8 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4 md:gap-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              {selectedCategory === 'all' ? 'Все кейсы (до-после)' : categories.find(cat => cat.id === selectedCategory)?.name} 
              <span className="text-lg font-normal text-gray-600 ml-2 align-middle">({filteredProjects.length})</span>
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={scrollCarouselLeft}
                disabled={!canScrollLeft}
                className={`p-2 rounded-full border-2 transition-colors ${
                  canScrollLeft 
                    ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' 
                    : 'border-gray-300 text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollCarouselRight}
                disabled={!canScrollRight}
                className={`p-2 rounded-full border-2 transition-colors ${
                  canScrollRight 
                    ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' 
                    : 'border-gray-300 text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div 
              ref={carouselRef}
              className="overflow-x-auto scrollbar-hide"
              style={{
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-x'
              }}
              onTouchStart={handleCarouselTouchStart}
              onTouchMove={handleCarouselTouchMove}
              onTouchEnd={handleCarouselTouchEnd}
            >
              <div 
                className="flex pb-4" 
                style={{ 
                  width: 'max-content',
                  gap: typeof window !== 'undefined' && window.innerWidth < 768 ? '0px' : '40px'
                }}
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-white/95 rounded-3xl shadow-xl border border-slate-200 hover:shadow-blue-400/40 hover:scale-[1.045] hover:border-blue-400 transition-all duration-300 group flex-shrink-0 relative cursor-pointer"
                    style={{ width: typeof window !== 'undefined' && window.innerWidth < 768 ? '100vw' : '360px', top: 0, transition: 'top 0.3s' }}
                    onClick={(e) => {
                      if ((e.target as HTMLElement).closest('button')) return;
                      openModal(index);
                    }}
                  >
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md z-10 ${
                      project.category === 'restaurants' ? 'bg-red-500' :
                      project.category === 'beauty' ? 'bg-pink-500' :
                      project.category === 'auto' ? 'bg-yellow-500' :
                      project.category === 'medical' ? 'bg-green-600' :
                      project.category === 'retail' ? 'bg-blue-500' :
                      project.category === 'services' ? 'bg-purple-500' : 'bg-slate-400'
                    }`}>
                      {categories.find(c => c.id === project.category)?.name || 'Кейс'}
                    </div>
                    <div className="relative">
                      <div className="grid grid-cols-2 h-48 relative">
                        <div className="relative">
                          <img 
                            src={project.beforeImage} 
                            alt="До продвижения"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                            ДО
                          </div>
                        </div>
                        <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-slate-300 to-green-400 rounded-full opacity-70 z-10"></div>
                        <div className="relative">
                          <img 
                            src={project.afterImage} 
                            alt="После продвижения"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                            ПОСЛЕ
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <button
                          onClick={() => openModal(index)}
                          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors pointer-events-auto"
                          tabIndex={-1}
                        >
                          <ZoomIn className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-7 flex flex-col gap-2" style={{ height: '290px' }}>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>
                      <p className="text-red-600 text-sm mb-2 font-semibold line-clamp-2">
                        Проблема: {Array.isArray(project.problem) ? project.problem[0] : project.problem}
                      </p>
                      <div className="space-y-2 text-sm text-gray-500 mb-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-xl mb-3 flex-grow">
                        <h4 className="font-semibold text-green-800 mb-2 text-base">Результаты:</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          {project.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <TrendingUp className="w-3 h-3 flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(index);
                        }}
                        className="w-full text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center justify-center mt-auto transition-colors duration-150"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Посмотреть детали
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-base italic">
              Прокрутите колесом мыши или используйте стрелки для навигации
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 md:p-4"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="w-full h-full md:max-w-6xl md:w-full bg-white rounded-none md:rounded-xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 overflow-y-auto">
              <div className="relative">
                <div className="flex flex-col gap-4 md:hidden">
                  <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      src={filteredProjects[selectedImage].beforeImage}
                      alt="До продвижения"
                      className="w-full h-auto max-h-[60vh] object-contain mx-auto block"
                      onClick={e => {
                        e.stopPropagation();
                        if (typeof window !== 'undefined') {
                          window.open(filteredProjects[selectedImage].beforeImage, '_blank');
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded font-semibold text-xs">
                      ДО ПРОДВИЖЕНИЯ
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Нажмите для увеличения
                    </div>
                  </div>
                  <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      src={filteredProjects[selectedImage].afterImage}
                      alt="После продвижения"
                      className="w-full h-auto max-h-[60vh] object-contain mx-auto block"
                      onClick={e => {
                        e.stopPropagation();
                        if (typeof window !== 'undefined') {
                          window.open(filteredProjects[selectedImage].afterImage, '_blank');
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded font-semibold text-xs">
                      ПОСЛЕ ПРОДВИЖЕНИЯ
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Нажмите для увеличения
                    </div>
                  </div>
                </div>
                <div className="hidden md:grid md:grid-cols-2 gap-1">
                  <div className="relative bg-gray-100">
                    <img 
                      src={filteredProjects[selectedImage].beforeImage} 
                      alt="До продвижения"
                      className="w-full h-auto max-h-[50vh] object-contain mx-auto block"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-2 rounded font-semibold text-sm">
                      ДО ПРОДВИЖЕНИЯ
                    </div>
                  </div>
                  <div className="relative bg-gray-100">
                    <img 
                      src={filteredProjects[selectedImage].afterImage} 
                      alt="После продвижения"
                      className="w-full h-auto max-h-[50vh] object-contain mx-auto block"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded font-semibold text-sm">
                      ПОСЛЕ ПРОДВИЖЕНИЯ
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 z-20 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-colors border-2 border-white focus:outline-none focus:ring-2 focus:ring-red-400 md:top-4 md:right-4"
                  aria-label="Закрыть галерею"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
                >
                  <X className="w-7 h-7 text-white" />
                </button>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {filteredProjects[selectedImage].title}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-red-600 mb-2 md:mb-3">Проблема</h4>
                      {Array.isArray(filteredProjects[selectedImage].problem) ? (
                        <ul className="space-y-1 md:space-y-2">
                          {filteredProjects[selectedImage].problem.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-gray-700 text-xs md:text-sm leading-relaxed">• {item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                          {filteredProjects[selectedImage].problem}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-blue-600 mb-2 md:mb-3">Решение</h4>
                      {Array.isArray(filteredProjects[selectedImage].solution) ? (
                        <ul className="space-y-1 md:space-y-2">
                          {filteredProjects[selectedImage].solution.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-gray-700 text-xs md:text-sm leading-relaxed">• {item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                          {filteredProjects[selectedImage].solution}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-green-600 mb-2 md:mb-3">Результаты</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {filteredProjects[selectedImage].results.map((result: string, idx: number) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-4 h-4 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-2 h-2 md:w-3 md:h-3 text-green-600" />
                          </div>
                          <span className="text-gray-700 text-xs md:text-sm font-semibold">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm bg-gray-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-600 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Местоположение:</span>
                      <p className="text-gray-600">{filteredProjects[selectedImage].location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-blue-600 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Дата завершения:</span>
                      <p className="text-gray-600">{filteredProjects[selectedImage].date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 border-t bg-gray-50 px-4 md:px-6 py-3 md:py-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={prevImage}
                  className="bg-gray-100 text-gray-700 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-gray-200 transition-colors text-xs md:text-sm"
                >
                  ← Предыдущий
                </button>
                <span className="text-gray-500 text-xs md:text-sm">
                  {selectedImage + 1} из {filteredProjects.length}
                </span>
                <button
                  onClick={nextImage}
                  className="bg-gray-100 text-gray-700 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-gray-200 transition-colors text-xs md:text-sm"
                >
                  Следующий →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Gallery Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <Suspense fallback={
            <div className="py-24 text-center">
              <div className="animate-pulse text-gray-500">Загрузка аналитики...</div>
            </div>
          }>
            <AnalyticsGallery />
          </Suspense>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 border-b border-slate-100">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Общая статистика результатов</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Средние показатели улучшений по всем проектам
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">+280%</div>
              <div className="text-gray-600">Рост звонков в среднем</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.6</div>
              <div className="text-gray-600">Средний рейтинг после работы</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">+350%</div>
              <div className="text-gray-600">Увеличение просмотров</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">ТОП-3</div>
              <div className="text-gray-600">Позиции в картах</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white border-b border-slate-800">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: '1440px' }}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight drop-shadow-lg">
            Хотите такие же результаты?
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Получите бесплатный аудит вашего присутствия в картах и узнайте, как можно увеличить поток клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openOrderModal()}
              className="bg-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Получить аудит бесплатно
            </button>
            <a 
              href="tel:+79635006321" 
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <section className="bg-gray-900">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        <div className="h-4 bg-gradient-to-b from-gray-900 to-slate-900"></div>
      </section>
    </div>
  );
};

export default GalleryPage;
