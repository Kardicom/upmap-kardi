'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, ArrowRight} from 'lucide-react';
import { useOrderModal } from '@/contexts/OrderModalContext';

const ContactsPage = () => {
  const { openModal } = useOrderModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: ''
  });
  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAgreeError('');
    if (!agree) {
      setAgreeError('Необходимо согласие с политикой конфиденциальности');
      return;
    }
    // Формируем данные для web3forms
    const submitData = new FormData();
    submitData.append('access_key', 'ad5fc7d8-303d-4d87-8888-f6a09c767709');
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('business', formData.business);
    submitData.append('service', formData.service || 'Не выбрано');
    submitData.append('message', formData.message);
    submitData.append('subject', 'Заявка с формы Контакты UPMAP');
    submitData.append('from_page', 'Контакты');
    submitData.append('site', typeof window !== 'undefined' ? window.location.hostname : '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData
      });
      if (!response.ok) throw new Error('Ошибка отправки');
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        service: '',
        message: ''
      });
      setAgree(false);
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      alert('Произошла ошибка при отправке. Попробуйте еще раз.');
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white relative">
        <div className="absolute inset-0 opacity-30">
          {/* Main blur circles */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-slate-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Grid dots - simpler pattern */}
          <div className="absolute top-16 left-16 w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
          <div className="absolute top-16 right-16 w-3 h-3 bg-slate-300 rounded-full opacity-50"></div>
          <div className="absolute bottom-16 left-16 w-3 h-3 bg-indigo-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-16 right-16 w-4 h-4 bg-blue-200 rounded-full opacity-55"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-slate-200 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-200 rounded-full opacity-50"></div>
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20 text-blue-300" viewBox="0 0 1000 1000">
            <line x1="100" y1="100" x2="300" y2="200" stroke="currentColor" strokeWidth="2"/>
            <line x1="300" y1="200" x2="700" y2="250" stroke="currentColor" strokeWidth="2"/>
            <line x1="700" y1="250" x2="900" y2="200" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: '1440px' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-lg">Контакты</h1>
            <p className="text-2xl text-slate-200 leading-relaxed mb-2 font-medium">
              Получите бесплатный аудит вашего присутствия в картах и персональную стратегию продвижения
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Как с нами связаться</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефоны</h3>
                    <p className="text-gray-600 mb-1">+7 (963) 500-63-21</p>
                    <p className="text-gray-600 mb-1">+7 (912) 657-63-21</p>
                    <p className="text-sm text-gray-500">Звонки принимаем ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Электронная почта</h3>
                    <p className="text-gray-600 mb-1">upmaps@mail.ru</p>
                    <p className="text-sm text-gray-500">Отвечаем на письма в течение 1 часа</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Мессенджеры</h3>
                    <p className="text-gray-600 mb-1">Telegram: @Kardifx</p>
                    <p className="text-gray-600 mb-1">WhatsApp: +7 (912) 657-63-21</p>
                    <p className="text-sm text-gray-500">Быстрая связь в любое время</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">География работы</h3>
                    <p className="text-gray-600 mb-1">Вся территория России</p>
                    <p className="text-sm text-gray-500">Работаем удаленно с любым регионом</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Режим работы</h3>
                    <p className="text-gray-600 mb-1">Понедельник - Воскресенье: 9:00 - 21:00</p>
                    <p className="text-gray-600 mb-1">Техподдержка: 24/7</p>
                    <p className="text-sm text-gray-500">Консультации в удобное для вас время</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-12 bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Что вы получите при обращении:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Бесплатный аудит присутствия в картах</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Анализ конкурентов в вашей нише</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Персональную стратегию продвижения</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Прогноз роста клиентов и выручки</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Получить бесплатный аудит</h2>
                <p className="text-gray-600 mb-8">Заполните форму, и мы проанализируем ваше присутствие в картах</p>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                    <p className="text-gray-600">Мы свяжемся с вами в течение 15 минут</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Как к вам обращаться?"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Ваш email"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                          Телефон *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="business" className="block text-sm font-semibold text-gray-900 mb-2">
                        Название бизнеса *
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        required
                        value={formData.business}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Название вашей компании"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                        Интересующая услуга
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Выберите услугу</option>
                        <option value="yandex-maps">Продвижение в Яндекс.Картах</option>
                        <option value="2gis">Продвижение в 2ГИС</option>
                        <option value="yandex-services">Яндекс.Услуги</option>
                        <option value="reputation">Управление репутацией</option>
                        <option value="complex">Комплексное продвижение</option>
                        <option value="audit">Только аудит</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        Дополнительная информация
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Расскажите о вашем бизнесе, целях, текущих проблемах..."
                      ></textarea>
                    </div>

                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="agree"
                        checked={agree}
                        onChange={e => setAgree(e.target.checked)}
                        className="mr-2"
                        required
                      />
                      <label htmlFor="agree" className="text-sm text-gray-700 select-none">
                        Я соглашаюсь с{' '}
                        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                          политикой конфиденциальности
                        </a>
                      </label>
                    </div>
                    {agreeError && <p className="text-sm text-red-600 mb-2">{agreeError}</p>}
                    <button
                      type="submit"
                      className={`w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center shadow-lg transition-opacity ${(!agree || !formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.business.trim()) ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                      disabled={!(agree && formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.business.trim())}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Получить бесплатный аудит
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Tilda/cases style) */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-white mb-8 leading-tight">Часто задаваемые вопросы</h2>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto mb-0">Ответы на популярные вопросы о локальном продвижении</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="mb-7 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">Сколько времени занимает продвижение в картах?</h3>
                <p className="text-white leading-relaxed text-lg">Первые результаты видны уже через 7-14 дней после начала работ. Полный эффект достигается за 1-2 месяца. Скорость зависит от конкурентности ниши и текущего состояния карточек.</p>
              </div>
            </div>
            <div className="mb-7 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">Гарантируете ли вы результат?</h3>
                <p className="text-white leading-relaxed text-lg">Да, мы даем гарантию результата. Если в течение 3 месяцев не достигнем обещанных показателей — вернем деньги или доработаем бесплатно до получения результата.</p>
              </div>
            </div>
            <div className="mb-7 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">Работаете ли вы с регионами?</h3>
                <p className="text-white leading-relaxed text-lg">Да, мы работаем по всей России. Все процессы автоматизированы, поэтому география не влияет на качество услуг. У нас есть успешные кейсы в более чем 50 городах России.</p>
              </div>
            </div>
            <div className="mb-7 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">Сколько стоят ваши услуги?</h3>
                <p className="text-white leading-relaxed text-lg">Стоимость зависит от объема работ и количества площадок для продвижения. Стартовый пакет — от 15 000 рублей в месяц. Точную стоимость рассчитаем после аудита вашего бизнеса.</p>
              </div>
            </div>
            <div className="mb-7 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">Что включает бесплатный аудит?</h3>
                <p className="text-white leading-relaxed text-lg">Анализ текущего присутствия в картах, оценку конкурентов, выявление проблем и возможностей роста, прогноз увеличения клиентов и персональные рекомендации по продвижению.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Разделительная полоса между FAQ и CTA */}
      <section className="bg-gray-900">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
      </section>

      {/* CTA Section (Tilda/cases style, min spacing) */}
      <section className="pt-6 pb-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: '1440px' }}>
          <h2 className="text-5xl font-extrabold mb-8 leading-tight">Готовы увеличить поток клиентов?</h2>
          <p className="text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">Получите бесплатный аудит вашего присутствия в картах и персональную стратегию продвижения</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => openModal()}
              className="bg-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Получить аудит бесплатно <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* Decorative Separator */}
      <section className="bg-gray-900">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        <div className="h-4 bg-gradient-to-b from-gray-900 to-slate-900"></div>
      </section>
    </div>
  );
};

export default ContactsPage;
