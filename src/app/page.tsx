'use client'

import Link from 'next/link';
import { Suspense, useEffect } from 'react';
import { Users, Award, TrendingUp, Shield, Clock } from 'lucide-react';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import QuizBlock from '@/components/QuizBlock';
import { useOrderModal } from '@/contexts/OrderModalContext';

// Мета-теги определены в layout.tsx

export default function HomePage() {
  const { openModal } = useOrderModal();

  // Автопоказ модалки через 30 секунд (только один раз за сессию)
  useEffect(() => {
    // Проверяем, показывали ли уже модалку в этой сессии
    const hasShownModal = sessionStorage.getItem('autoModalShown');
    
    if (!hasShownModal) {
      const timer = setTimeout(() => {
        openModal();
        // Отмечаем, что модалка показана
        sessionStorage.setItem('autoModalShown', 'true');
      }, 30000); // 30 секунд

      return () => clearTimeout(timer);
    }
  }, [openModal]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO/HEADER с УТП */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white py-8 md:py-20 overflow-hidden w-full">
        <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-slate-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 w-full" style={{ maxWidth: '1440px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-8">
              <h1 className="text-4xl leading-tight sm:text-5xl md:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-lg">
                Продвижение в <span className="text-blue-400">Яндекс Картах</span> и 2ГИС
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-slate-200 leading-snug max-w-2xl">
                Реклама на картах, SEO продвижение и управление отзывами.<br className="hidden md:inline" />
                Рост позиций в локальном поиске. Бесплатный аудит. Результат от 7 дней.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center shadow-lg text-lg"
                >
                  Получить аудит бесплатно
                </button>
                <a
                  href="tel:+79635006321"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors inline-flex items-center justify-center text-lg"
                >
                  Позвонить сейчас
                </a>
              </div>
            </div>
            <img 
              src="/images/mini/phone.webp"
              alt="Команда UPMAP"
              className="hidden sm:block w-full max-w-full object-contain"
              style={{ maxHeight: '45rem', display: 'block', margin: '0 auto' }}
            />
          </div>
        </div>
      </section>

      {/* Цена бездействия в цифрах */}
      <section className="py-[96px] w-full bg-white">
        <div className="container mx-auto px-4 w-full" style={{ maxWidth: '1440px' }}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">Цена бездействия в цифрах</h2>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Каждый день промедления — это потерянные клиенты и упущенная прибыль</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col justify-between items-center bg-blue-50 rounded-2xl p-10 shadow-md h-full transition-shadow duration-200 border border-transparent hover:bg-white hover:border-blue-400 hover:shadow-lg cursor-pointer">
              <AnimatedNumber value={76} suffix="%" className="text-7xl font-extrabold text-blue-600 mb-4" />
              <div className="text-gray-900 font-semibold text-xl mb-2 text-center">россиян ищут услуги через карты</div>
              <div className="text-gray-500 text-base text-center min-h-[56px] md:min-h-[48px] flex items-end">Люди ищут &apos;автосервис рядом&apos; или &apos;кафе на углу&apos; - это клиенты, готовые записаться прямо сейчас</div>
            </div>
            <div className="flex flex-col justify-between items-center bg-blue-50 rounded-2xl p-10 shadow-md h-full transition-shadow duration-200 border border-transparent hover:bg-white hover:border-blue-400 hover:shadow-lg cursor-pointer">
              <AnimatedNumber value={28} suffix="%" className="text-7xl font-extrabold text-blue-600 mb-4" />
              <div className="text-gray-900 font-semibold text-xl mb-2 text-center">запросов = реальные сделки</div>
              <div className="text-gray-500 text-base text-center min-h-[56px] md:min-h-[48px] flex items-end">Высочайшая конверсия среди всех digital-каналов привлечения клиентов</div>
            </div>
            <div className="flex flex-col justify-between items-center bg-blue-50 rounded-2xl p-10 shadow-md h-full transition-shadow duration-200 border border-transparent hover:bg-white hover:border-blue-400 hover:shadow-lg cursor-pointer">
              <AnimatedNumber value={85} suffix="%" className="text-7xl font-extrabold text-blue-600 mb-4" />
              <div className="text-gray-900 font-semibold text-xl mb-2 text-center">выбирают бизнес с рейтингом 4.5+</div>
              <div className="text-gray-500 text-base text-center min-h-[56px] md:min-h-[48px] flex items-end">Без высокого рейтинга ваш бизнес остается невидимым для клиентов</div>
            </div>
            <div className="flex flex-col justify-between items-center bg-blue-50 rounded-2xl p-10 shadow-md h-full transition-shadow duration-200 border border-transparent hover:bg-white hover:border-blue-400 hover:shadow-lg cursor-pointer">
              <AnimatedNumber value={90} suffix="+" postfix="млн" className="text-7xl font-extrabold text-blue-600 mb-4" />
              <div className="text-gray-900 font-semibold text-xl mb-2 text-center">пользователей Яндекс.Карт ежемесячно</div>
              <div className="text-gray-500 text-base text-center min-h-[56px] md:min-h-[48px] flex items-end">Более 80% пользователей ежедневно ищут поблизости стоматологов, кафе и другие услуги</div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full" style={{ height: 0 }}>
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full"></div>
      </div>

      {/* Portfolio Preview (Gallery) */}
      <section className="py-[96px] w-full">
        <div className="container mx-auto px-4 w-full" style={{ maxWidth: '1440px' }}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">Примеры работ</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Портфолио успешных проектов по локальному продвижению
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/laserlove/laserlove3.webp" 
                alt="Косметология, салон красоты" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Салон красоты</h3>
                <p className="text-gray-600 mb-5 text-base">Переходов на сайт с 14 до 91%</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold text-base">+1721% просмотр фото</span>
                  <Link href="/kejsy-prodvizheniya-yandeks-karty" className="text-blue-600 hover:text-blue-700 text-base">Подробнее →</Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/ygbyyg/ygbyyg3.webp" 
                alt="Салон красоты" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Салоны красоты</h3>
                <p className="text-gray-600 mb-5 text-base">+ 41% переходов в карточку компании Яндекс карт</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold text-base">+ 150% переходов на сайт</span>
                  <Link href="/kejsy-prodvizheniya-yandeks-karty" className="text-blue-600 hover:text-blue-700 text-base">Подробнее →</Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/images/vpiterepet/vpiterepet3.webp" 
                alt="Караоке клуб" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Караоке клуб</h3>
                <p className="text-gray-600 mb-5 text-base">+ 93% переходов в карточку компании Яндекс карт</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold text-base">+50% нажатий позвонить</span>
                  <Link href="/kejsy-prodvizheniya-yandeks-karty" className="text-blue-600 hover:text-blue-700 text-base">Подробнее →</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link
              href="/kejsy-prodvizheniya-yandeks-karty"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center text-xl transition-colors"
              style={{ boxShadow: '0 4px 24px 0 rgba(37,99,235,0.15)' }}
            >
              Смотреть все работы <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-[96px] bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white relative overflow-hidden w-full">
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute left-1/4 top-10 w-96 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute right-1/4 bottom-10 w-80 h-32 bg-indigo-400 rounded-full blur-2xl opacity-15"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 w-full" style={{ maxWidth: '1440px' }}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              Наши инструменты — полностью российская разработка без санкционных рисков
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-slate-700/50 backdrop-blur-md rounded-2xl p-10 border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/images/mini/gerb.png" alt="Реестр ПО" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Состоит в реестре российского ПО</h3>
              <p className="text-slate-300 text-base">Сертифицированное решение для локального продвижения</p>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-md rounded-2xl p-10 border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">400+</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">маркетинговых агентств</h3>
              <p className="text-slate-300 text-base">Доверяют решениям по всей России</p>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-md rounded-2xl p-10 border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/images/mini/sk.png" alt="Сколково" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">При поддержке Сколково</h3>
              <p className="text-slate-300 text-base">Резидент инновационного центра</p>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-md rounded-2xl p-10 border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-300 text-center">
              <div className="w-32 h-16 mx-auto rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/images/mini/it.png" alt="Минцифры" className="w-full h-full object-contain m-0 p-0" style={{maxWidth:'100%',maxHeight:'100%'}} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Минцифры</h3>
              <p className="text-slate-300 text-base">Аккредитованы и входят в реестр «Минцифры»</p>
            </div>
          </div>
        </div>
      </section>

      {/* Диагностика (QuizBlock будет добавлен позже) */}
      <section className="py-[96px] w-full bg-white">
        <div className="container mx-auto px-4 w-full" style={{ maxWidth: '1440px' }}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Диагностика вашего бизнеса в картах
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Пройдите экспресс-диагностику за 2 минуты и узнайте, что мешает вашему бизнесу получать больше клиентов из карт
            </p>
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-blue-700 font-medium">Бесплатно • Без регистрации • 12 простых вопросов</span>
              </div>
            </div>
          </div>
          {/* QuizBlock */}
          <Suspense fallback={<div className="text-center py-12">Загрузка теста...</div>}>
            <QuizBlock />
          </Suspense>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-0"></div>

      {/* Команда */}
      <section className="py-[96px] w-full bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="w-full px-0">
          <div className="mx-auto px-4" style={{ maxWidth: '1440px' }}>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">Наша команда</h2>
              <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                Эксперты по локальному продвижению, которые знают все тонкости работы с картами и справочниками
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white rounded-3xl p-12 shadow-xl text-center hover:shadow-2xl transition-all border border-slate-100 flex flex-col items-center group">
                <img 
                  src="/images/mini/dk.webp"
                  alt="Дамир Карамов"
                  className="w-32 h-32 rounded-full mb-8 object-cover shadow-lg group-hover:scale-105 transition-transform border border-slate-200"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Дамир Карамов</h3>
                <div className="text-blue-600 font-semibold mb-3">SEO специалист</div>
                <div className="text-gray-600 text-base leading-relaxed mb-4">8 лет опыта в техническом сопровождении клиентов. Эксперт по локальному SEO и продвижению в картах.</div>
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                  <span className="bg-blue-50 rounded px-2 py-1">Яндекс.Карты</span>
                  <span className="bg-blue-50 rounded px-2 py-1">2ГИС</span>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-12 shadow-xl text-center hover:shadow-2xl transition-all border border-slate-100 flex flex-col items-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-full mb-8 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Алексей Кибардин</h3>
                <div className="text-green-600 font-semibold mb-3">Руководитель отдела продвижения</div>
                <div className="text-gray-600 text-base leading-relaxed mb-4">5 лет опыта в локальном продвижении. Специалист по работе с отзывами и репутационному менеджменту. Ведет 20+ проектов.</div>
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                  <span className="bg-green-50 rounded px-2 py-1">Репутация</span>
                  <span className="bg-green-50 rounded px-2 py-1">Отзывы</span>
                  <span className="bg-green-50 rounded px-2 py-1">Аналитика</span>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-12 shadow-xl text-center hover:shadow-2xl transition-all border border-slate-100 flex flex-col items-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mb-8 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Владимир Скакунов</h3>
                <div className="text-purple-600 font-semibold mb-3">Аналитик</div>
                <div className="text-gray-600 text-base leading-relaxed mb-4">5 лет опыта в разработке и автоматизации.</div>
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                  <span className="bg-purple-50 rounded px-2 py-1">Автоматизация</span>
                  <span className="bg-purple-50 rounded px-2 py-1">API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-0"></div>

      {/* Почему выбирают нас */}
      <section className="py-24 border-b border-slate-100">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Почему выбирают именно нас?</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium mb-2">
              Что отличает нас от других агентств по локальному продвижению
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Гарантия результата
                    </h3>
                    <p className="text-lg text-gray-600">
                      Улучшение уже в первый месяц. Работаем по договору.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Быстрые результаты
                    </h3>
                    <p className="text-lg text-gray-600">
                      Первые улучшения видны уже через 7-14 дней. 
                      Полный эффект достигается за 1-2 месяца работы.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Только белые методы
                    </h3>
                    <p className="text-lg text-gray-600">
                      Используем исключительно легальные методы продвижения, 
                      которые не нарушают правила поисковых систем.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Поддержка 24/7
                    </h3>
                    <p className="text-lg text-gray-600">
                      Всегда на связи для решения любых вопросов. 
                      Еженедельные отчеты и регулярные консультации.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <img 
              src="/images/mini/arrow.webp"
              alt="Команда UPMAP за работой"
              className="hidden lg:block w-full max-w-full object-contain"
              style={{ maxHeight: '32rem', display: 'block', margin: '0 auto' }}
            />
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4 w-full" style={{ maxWidth: '1200px' }}>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Профессиональное продвижение в Яндекс Картах и 2ГИС</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Продвижение в Яндекс Картах</strong> и <strong>2ГИС</strong> — это эффективный способ привлечения целевой аудитории для локального бизнеса. 
              Более 76% россиян ежедневно используют карты для поиска услуг и товаров рядом с ними. 
              <strong>Реклама в Яндекс Картах</strong> позволяет вашему бизнесу быть на виду у потенциальных клиентов в момент, когда они готовы совершить покупку.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Почему важно SEO для карт?</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>SEO для карт</strong> — это комплекс мероприятий, направленных на повышение видимости вашей компании в локальном поиске. 
              <strong>Продвижение на картах</strong> включает оптимизацию карточки организации, работу с отзывами, добавление фотографий, корректное заполнение информации о компании. 
              Правильное <strong>продвижение Яндекс Карты</strong> увеличивает количество показов, кликов и звонков от реальных клиентов.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Комплексное продвижение в 2ГИС и Google Maps</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Мы предлагаем <strong>продвижение в 2ГИС</strong> и <strong>Google Maps</strong> по проверенным методикам. 
              <strong>Реклама на картах</strong> охватывает все популярные геосервисы, что позволяет максимизировать поток клиентов. 
              Наши специалисты работают над улучшением позиций вашей компании, управляют репутацией, настраивают рекламные кампании.
            </p>

            <p className="text-lg text-gray-700 mb-0 leading-relaxed">
              <strong>Локальное SEO</strong> — это не просто размещение информации в справочниках. Это стратегия, которая приносит измеримый результат: 
              рост звонков, увеличение числа посещений, повышение узнаваемости бренда в вашем регионе.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white w-full">
        <div className="container mx-auto px-4 text-center w-full" style={{ maxWidth: '1440px' }}>
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Готовы увеличить поток клиентов?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Получите бесплатный аудит вашего присутствия в картах и персональную стратегию продвижения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              type="button"
              onClick={() => openModal()}
              className="bg-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Получить аудит бесплатно
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
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
      <section className="bg-gray-900 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent w-full"></div>
        <div className="h-4 bg-gradient-to-b from-gray-900 to-slate-900 w-full"></div>
      </section>
    </div>
  );
}
