'use client'

import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div 
        className="mx-auto py-12" 
        style={{ 
          maxWidth: '1440px', 
          paddingLeft: '16px', 
          paddingRight: '16px',
          width: '100%'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 w-full items-start md:items-center gap-x-12" style={{ width: '100%' }}>
          {/* Company Info */}
          <div className="col-span-1 text-left">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <div className="text-xl font-bold" role="contentinfo">UPMAP</div>
                <p className="text-sm text-gray-400">Локальное продвижение бизнеса</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Профессиональные услуги для бизнеса. 
            </p>
          </div>

          {/* Services */}
          <div className="col-span-1 text-left">
            <h4 className="text-lg font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/uslugi-prodvizheniya-v-kartakh" className="text-gray-400 hover:text-white transition-colors">Продвижение в Яндекс Картах</Link></li>
              <li><Link href="/uslugi-prodvizheniya-v-kartakh" className="text-gray-400 hover:text-white transition-colors">Реклама в 2ГИС</Link></li>
              <li><Link href="/uslugi-prodvizheniya-v-kartakh" className="text-gray-400 hover:text-white transition-colors">SEO для карт</Link></li>
              <li><Link href="/uslugi-prodvizheniya-v-kartakh" className="text-gray-400 hover:text-white transition-colors">Управление отзывами</Link></li>
              <li><Link href="/uslugi-prodvizheniya-v-kartakh" className="text-gray-400 hover:text-white transition-colors">Локальная реклама</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 text-left">
            <h4 className="text-lg font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">О компании</Link></li>
              <li><Link href="/tarify-prodvizheniya-v-kartakh" className="text-gray-400 hover:text-white transition-colors">Тарифы продвижения</Link></li>
              <li><Link href="/uslugi-prodvizheniya-v-kartakh" className="text-gray-400 hover:text-white transition-colors">Услуги</Link></li>
              <li><Link href="/kejsy-prodvizheniya-yandeks-karty" className="text-gray-400 hover:text-white transition-colors">Кейсы</Link></li>
              <li><Link href="/zakazat-prodvizhenie-v-kartakh" className="text-gray-400 hover:text-white transition-colors">Заказать</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 text-right">
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <div className="space-y-4 text-sm text-right">
              <div className="flex items-start space-x-3 justify-end">
                <div className="text-right">
                  <p className="text-white">+7 (993) 500-63-21</p>
                  <p className="text-gray-400">Основной номер</p>
                </div>
                <Phone className="w-4 h-4 mt-1 text-blue-400" />
              </div>
              <div className="flex items-start space-x-3 justify-end">
                <div className="text-right">
                  <p className="text-white">upmaps@mail.ru</p>
                  <p className="text-gray-400">Электронная почта</p>
                </div>
                <Mail className="w-4 h-4 mt-1 text-blue-400" />
              </div>
              <div className="flex items-start space-x-3 justify-end">
                <div className="text-right">
                  <p className="text-white">Пн-Вс: 9:00 - 21:00</p>
                  <p className="text-gray-400">Режим работы</p>
                </div>
                <Clock className="w-4 h-4 mt-1 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center" style={{ width: '100%' }}>
            <p className="text-gray-400 text-sm">
              © 2025 UPMAP. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
