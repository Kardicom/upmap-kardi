'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Eye, TrendingUp, Star, ChevronDown } from 'lucide-react';
import { useOrderModal } from '@/contexts/OrderModalContext';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqItems = [
    {
      question: "Сколько времени нужно для результата?",
      answer: "Первые результаты появляются уже через 14-21 день: улучшение позиций и рост видимости. Стабильные результаты — через 30-60 дней, в зависимости от ниши и уровня конкуренции."
    },
    {
      question: "Что если много негативных отзывов?",
      answer: "У нас есть проверенная система работы с репутацией: фильтруем фейковые отзывы, помогаем получать больше позитивных, обучаем правильно отвечать на критику. Работаем с каждым случаем индивидуально."
    },
    {
      question: "Подходит ли для моей ниши?",
      answer: "Наши решения работают для 95% локальных бизнесов: от салонов красоты до промышленных предприятий. Если у вас есть физический адрес и локальные клиенты — мы поможем."
    },
    {
      question: "Какие гарантии результата?",
      answer: "Мы даем гарантию выполнения всех технических работ и предоставляем детальные отчеты каждую неделю. Если не видите улучшений в течение 60 дней — продлеваем работу бесплатно."
    },
    {
      question: "Какие каналы продвижения используются?",
      answer: "Работаем по всем основным площадкам: Яндекс.Карты, 2ГИС, Яндекс.Справочник. Дополнительно настраиваем интеграции с соц.сетями и системами сбора отзывов."
    },
    {
      question: "Какая поддержка после запуска?",
      answer: "За каждым клиентом закрепляется персональный менеджер. Техническая поддержка работает 24/7. Проводим ежемесячные созвоны для анализа результатов и корректировки стратегии."
    },
    {
      question: "Можно ли подключить автоматический сбор отзывов?",
      answer: "Да! У нас есть собственная платформа и WhatsApp-боты для автоматического запроса отзывов. Система отправляет приглашения в нужный момент и отслеживает результат."
    },
    {
      question: "Работаете ли вы с конкурентными нишами?",
      answer: "Да, специализируемся на высококонкурентных нишах. У нас есть особые методики для ресторанов, салонов красоты, медицинских клиник и других популярных сфер бизнеса."
    },
    {
      question: "Как начать сотрудничество?",
      answer: "Оставьте заявку на бесплатный аудит. Наш специалист проанализирует ваши карточки, покажет точки роста и предложит оптимальную стратегию продвижения уже на первой встрече."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <section ref={faqRef} className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <linearGradient id="faqLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.4}} />
              <stop offset="100%" style={{stopColor: '#1d4ed8', stopOpacity: 0.2}} />
            </linearGradient>
          </defs>
          <pattern id="faqGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#faqGrid)" />
          <path d="M0,200 L200,100 L400,250 L600,150 L800,280 L1000,180 L1200,300" 
                stroke="url(#faqLineGradient)" strokeWidth="1" fill="none" 
                strokeDasharray="5,10" className="animate-pulse" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: '1440px' }}>
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
          <h2 className="text-5xl font-extrabold text-white mb-8 leading-tight">
            Частые вопросы о продвижении на картах
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto mb-0">
            Ответы на самые популярные вопросы от наших клиентов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`mb-7 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${openItems === index ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-8 flex items-center justify-between group"
              >
                <h3 className={`text-2xl font-bold transition-colors leading-snug ${
                  openItems === index ? 'text-blue-400' : 'text-white group-hover:text-blue-300'
                }`}>
                  {item.question}
                </h3>
                <div className={`w-7 h-7 flex items-center justify-center transition-transform duration-300 ${
                  openItems === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown className={`w-6 h-6 ${openItems === index ? 'text-blue-400' : 'text-slate-400'}`} />
                </div>
              </button>
              {openItems === index && (
                <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                  <div className="border-t border-slate-600/50 pt-5">
                    <p className="text-white leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogPage = () => {
  const { openModal: openOrderModal } = useOrderModal();
  
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white relative">
        <div className="absolute inset-0 opacity-30">
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
            <line x1="150" y1="600" x2="400" y2="500" stroke="currentColor" strokeWidth="1"/>
            <line x1="400" y1="500" x2="650" y2="550" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: '1440px' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">Блог нашей команды</h1>
            <p className="text-2xl text-slate-300 leading-relaxed mb-2">
              Коротко о главном
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-8 leading-tight">Общая статистика результатов</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Средние показатели улучшений по всем проектам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-2">+280%</h3>
              <p className="text-lg text-gray-600">Рост звонков в среднем</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-2">4.9</h3>
              <p className="text-lg text-gray-600">Средний рейтинг после работы</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-2">+158%</h3>
              <p className="text-lg text-gray-600">Увеличение просмотров</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-2">ТОП-3</h3>
              <p className="text-lg text-gray-600">Позиции в картах</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <FAQSection />
      </section>

      <section className="bg-gray-900">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
      </section>

      <section className="pt-12 pb-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: '1440px' }}>
          <h2 className="text-5xl font-extrabold mb-8 leading-tight">
            Готовы увеличить поток клиентов?
          </h2>
          <p className="text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Получите бесплатный аудит вашего присутствия в картах и персональную стратегию продвижения
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => openOrderModal()}
              className="bg-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Получить аудит бесплатно
            </button>
            <a 
              href="tel:+79635006321" 
              className="border-2 border-blue-400 text-blue-400 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        <div className="h-4 bg-gradient-to-b from-gray-900 to-slate-900"></div>
      </section>
    </div>
  );
};

export default BlogPage;
