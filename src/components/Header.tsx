'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useOrderModal } from '@/contexts/OrderModalContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useOrderModal();

  const isActive = (path: string) => pathname === path;

  const handleOrderClick = () => {
    openModal();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('upmap-menu-toggle', { detail: isMenuOpen }));
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" style={{ boxShadow: '0 6px 32px 0 rgba(30, 41, 59, 0.18), 0 1.5px 8px 0 rgba(30, 41, 59, 0.10)' }}>
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-1 md:py-2">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-sm md:text-base font-medium">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 md:space-x-8 space-y-1 sm:space-y-0">
              <div className="flex items-center space-x-1 md:space-x-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-lg">+7 (993) 500-63-21</span>
              </div>
              <div className="flex items-center space-x-1 md:space-x-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-lg">upmaps@mail.ru</span>
              </div>
            </div>
            <div className="text-sm md:text-lg font-normal">
              <span>Работаем ежедневно</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3 md:py-4" style={{ maxWidth: '1440px' }}>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-shrink-0 mr-2 md:mr-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-white font-extrabold text-xl md:text-2xl">U</span>
            </div>
            <div className="min-w-0">
              <div className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight" role="banner">UPMAP</div>
              <p className="text-xs md:text-sm font-semibold text-blue-700 leading-tight hidden sm:block">
                Локальный локомотив<br />Вашего бизнеса
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Link 
              href="/" 
              className={`text-sm xl:text-base px-2 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              О компании
            </Link>
            <Link 
              href="/uslugi-prodvizheniya-v-kartakh" 
              className={`text-sm xl:text-base px-2 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/uslugi-prodvizheniya-v-kartakh') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Услуги
            </Link>
            <Link 
              href="/kejsy-prodvizheniya-yandeks-karty" 
              className={`text-sm xl:text-base px-2 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/kejsy-prodvizheniya-yandeks-karty') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Кейсы
            </Link>
            <Link 
              href="/tarify-prodvizheniya-v-kartakh" 
              className={`text-sm xl:text-base px-2 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/tarify-prodvizheniya-v-kartakh') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Тарифы
            </Link>
            <Link 
              href="/blog-prodvizhenie-karty-seo" 
              className={`text-sm xl:text-base px-2 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/blog-prodvizhenie-karty-seo') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Блог
            </Link>
            <Link 
              href="/zakazat-prodvizhenie-v-kartakh" 
              className={`text-sm xl:text-base px-2 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/zakazat-prodvizhenie-v-kartakh') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Контакты
            </Link>
            <button 
              onClick={handleOrderClick}
              className="bg-amber-500 text-white px-4 py-2 xl:px-6 xl:py-2 rounded-xl font-bold text-sm xl:text-base hover:bg-amber-600 transition-colors shadow-lg ml-1 whitespace-nowrap min-w-[120px]"
            >
              Заказать аудит
            </button>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            <Link 
              href="/" 
              className={`text-xs px-1.5 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              О компании
            </Link>
            <Link 
              href="/uslugi-prodvizheniya-v-kartakh" 
              className={`text-xs px-1.5 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/uslugi-prodvizheniya-v-kartakh') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Услуги
            </Link>
            <Link 
              href="/kejsy-prodvizheniya-yandeks-karty" 
              className={`text-xs px-1.5 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/kejsy-prodvizheniya-yandeks-karty') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Кейсы
            </Link>
            <Link 
              href="/tarify-prodvizheniya-v-kartakh" 
              className={`text-xs px-1.5 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/tarify-prodvizheniya-v-kartakh') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Тарифы
            </Link>
            <Link 
              href="/blog-prodvizhenie-karty-seo" 
              className={`text-xs px-1.5 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/blog-prodvizhenie-karty-seo') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Блог
            </Link>
            <Link 
              href="/zakazat-prodvizhenie-v-kartakh" 
              className={`text-xs px-1.5 py-1 rounded transition-colors font-semibold whitespace-nowrap ${isActive('/zakazat-prodvizhenie-v-kartakh') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
            >
              Контакты
            </Link>
            <button 
              onClick={handleOrderClick}
              className="bg-amber-500 text-white px-2 py-1.5 rounded-lg font-bold text-xs hover:bg-amber-600 transition-colors shadow-lg ml-1 whitespace-nowrap"
            >
              Заказать Аудит
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden ml-2 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t pt-3">
            <div className="flex flex-col space-y-3 items-center text-center">
              <Link 
                href="/" 
                className={`text-gray-700 hover:text-amber-600 transition-colors text-sm ${isActive('/') ? 'text-amber-600 font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                О компании
              </Link>
              <Link 
                href="/uslugi-prodvizheniya-v-kartakh" 
                className={`text-gray-700 hover:text-amber-600 transition-colors text-sm ${isActive('/uslugi-prodvizheniya-v-kartakh') ? 'text-amber-600 font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                href="/kejsy-prodvizheniya-yandeks-karty" 
                className={`text-gray-700 hover:text-amber-600 transition-colors text-sm ${isActive('/kejsy-prodvizheniya-yandeks-karty') ? 'text-amber-600 font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Кейсы
              </Link>
              <Link 
                href="/tarify-prodvizheniya-v-kartakh" 
                className={`text-gray-700 hover:text-amber-600 transition-colors text-sm ${isActive('/tarify-prodvizheniya-v-kartakh') ? 'text-amber-600 font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Тарифы
              </Link>
              <Link 
                href="/blog-prodvizhenie-karty-seo" 
                className={`text-gray-700 hover:text-amber-600 transition-colors text-sm ${isActive('/blog-prodvizhenie-karty-seo') ? 'text-amber-600 font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Блог
              </Link>
              <Link 
                href="/zakazat-prodvizhenie-v-kartakh" 
                className={`text-gray-700 hover:text-amber-600 transition-colors text-sm ${isActive('/zakazat-prodvizhenie-v-kartakh') ? 'text-amber-600 font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <button 
                onClick={handleOrderClick}
                className="bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors shadow-lg w-full max-w-xs text-sm"
              >
                Заказать аудит
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
