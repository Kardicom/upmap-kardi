'use client';

import { MapPin, Search, TrendingUp, Star, MessageSquare, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import { useOrderModal } from '@/contexts/OrderModalContext';

const ServicesPage = () => {
  const { openModal } = useOrderModal();

  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Продвижение в Яндекс.Картах",
      description: "Комплексная оптимизация карточки организации в Яндекс.Картах для максимальной видимости",
      features: [
        "Создание и оптимизация карточки организации",
        "Работа с категориями и ключевыми словами",
        "Загрузка качественных фотографий",
        "Настройка контактной информации",
        "Работа с отзывами и рейтингом",
        "Продвижение в локальном поиске"
      ],
      price: "от 9 900 руб/мес",
      color: "blue",
      results: "+250% звонков в среднем"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Продвижение в 2ГИС",
      description: "Профессиональная настройка и продвижение бизнеса в крупнейшем городском справочнике",
      features: [
        "Создание детального профиля компании",
        "Оптимизация под поисковые запросы",
        "Добавление товаров и услуг",
        "Настройка рубрик и категорий",
        "Работа с отзывами клиентов",
        "Аналитика и отчетность"
      ],
      price: "от 9 900 руб/мес",
      color: "orange",
      results: "ТОП-3 в категории"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Яндекс.Услуги",
      description: "Настройка профиля в Яндекс.Услугах для привлечения клиентов в сфере услуг",
      features: [
        "Создание профиля специалиста",
        "Настройка услуг и цен",
        "Загрузка портфолио работ",
        "Получение и обработка заявок",
        "Работа с отзывами клиентов",
        "Продвижение в поиске услуг"
      ],
      price: "от 9 900 руб/мес",
      color: "green",
      results: "+300% заявок"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Управление репутацией",
      description: "Профессиональная работа с отзывами для формирования положительного имиджа компании",
      features: [
        "Мониторинг отзывов во всех сервисах",
        "Ответы на отзывы клиентов",
        "Стимулирование положительных отзывов",
        "Работа с негативными отзывами",
        "Повышение общего рейтинга",
        "Еженедельные отчеты"
      ],
      price: "от 20 000 руб/мес",
      color: "red",
      results: "Рейтинг 4.5+ звезд"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Аналитика и отчетность",
      description: "Детальная аналитика эффективности продвижения с регулярными отчетами",
      features: [
        "Отслеживание позиций в картах",
        "Анализ трафика и звонков",
        "Мониторинг конкурентов",
        "Отчеты по отзывам и рейтингу",
        "Конверсии",
        "Рекомендации по улучшению"
      ],
      price: "от 9 900 руб/мес",
      color: "teal",
      results: "Полная прозрачность результатов"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-emerald-100 text-emerald-600", 
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-amber-100 text-amber-600",
      red: "bg-rose-100 text-rose-600",
      teal: "bg-teal-100 text-teal-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white overflow-hidden relative border-b border-slate-800 shadow-xl">
        <div className="absolute inset-0 opacity-30">
          {/* Main blur circles */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-slate-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Service network dots */}
          <div className="absolute top-16 left-24 w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
          <div className="absolute top-24 right-20 w-3 h-3 bg-slate-300 rounded-full opacity-50"></div>
          <div className="absolute bottom-16 left-20 w-3 h-3 bg-indigo-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-20 right-24 w-4 h-4 bg-blue-200 rounded-full opacity-55"></div>
          <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-slate-200 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-indigo-200 rounded-full opacity-50"></div>
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-65"></div>
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-slate-300 rounded-full opacity-55"></div>
          
          {/* Service connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20 text-blue-300" viewBox="0 0 1000 1000">
            <line x1="120" y1="120" x2="300" y2="200" stroke="currentColor" strokeWidth="2"/>
            <line x1="300" y1="200" x2="500" y2="180" stroke="currentColor" strokeWidth="2"/>
            <line x1="500" y1="180" x2="700" y2="280" stroke="currentColor" strokeWidth="2"/>
            <line x1="200" y1="400" x2="600" y2="350" stroke="currentColor" strokeWidth="1"/>
            <line x1="150" y1="700" x2="400" y2="600" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: '1440px' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-lg">Услуги локального продвижения</h1>
            <p className="text-2xl text-blue-100 leading-relaxed mb-2 font-medium">
              Полный спектр услуг по продвижению бизнеса в картах и справочниках. 
              Увеличиваем видимость, привлекаем клиентов, повышаем продажи.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white/95 rounded-3xl shadow-xl border border-slate-200 hover:shadow-blue-400/40 hover:scale-[1.045] hover:border-blue-400 transition-all duration-300 group flex-shrink-0 relative flex flex-col p-10">
                <div className={`w-16 h-16 ${getColorClasses(service.color)} rounded-xl flex items-center justify-center mb-8`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 line-clamp-2">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="mb-8 flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-3 text-base">Что включено:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base text-gray-500">Стоимость</span>
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  </div>
                  <div className="text-green-600 font-semibold text-base">
                    Результат: {service.results}
                  </div>
                </div>
                <button 
                  onClick={() => openModal()}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center shadow-lg mt-auto"
                >
                  Узнать больше <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPMAP Automation Section */}
      <section className="py-24 bg-gray-50 border-b border-slate-100">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Как UPMAP автоматизирует продвижение в геосервисах</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              AI-платформа для комплексного роста локального бизнеса в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mb-12" style={{maxWidth: '1440px'}}>
            {[
              {
                num: '01',
                title: 'SEO-оптимизация карточек организаций',
                desc: 'AI-автоматизация заполнения профилей в Яндекс.Картах, 2ГИС с использованием высокочастотных ключевых слов вашей ниши'
              },
              {
                num: '02',
                title: 'Автоматизация управления отзывами',
                desc: 'Умный бот-помощник собирает положительные отзывы через мессенджеры, генерирует SEO-ответы с помощью ChatGPT-4'
              },
              {
                num: '03',
                title: 'Локальное SEO продвижение на картах',
                desc: 'Комплексное продвижение в локальной выдаче: чекер позиций, контент-планы, автогенерация оптимизированных публикаций'
              },
              {
                num: '04',
                title: 'Аналитика эффективности геомаркетинга',
                desc: 'Глубокий бизнес-анализ показателей: рост рейтинга, увеличение переходов, ROI от вложений в локальное продвижение'
              }
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-blue-400/40 transition-shadow flex flex-col">
                <div className="flex items-start space-x-6 mb-4">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Result Block */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Результат: автоматизация 95% задач по продвижению + рост конверсий в 2 раза
            </h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white border-b border-slate-800">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: '1440px' }}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight drop-shadow-lg">
            Готовы увеличить поток клиентов?
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Получите бесплатный аудит вашего присутствия в картах и персональную стратегию продвижения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openModal()}
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

export default ServicesPage;
