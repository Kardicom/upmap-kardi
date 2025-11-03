"use client";

import React from "react";

const CtaBlock = () => (
  <div className="mt-16 max-w-4xl mx-auto p-10 bg-blue-50 rounded-2xl border border-blue-200 text-center">
    <h3 className="text-3xl font-bold text-gray-900 mb-4">
      Готовы увеличить поток клиентов?
    </h3>
    <p className="text-lg text-gray-700 mb-8">
      Получите бесплатный аудит вашей карточки в Яндекс.Картах и персональную стратегию продвижения
    </p>
    <div className="flex flex-col sm:flex-row gap-5 justify-center">
      <button 
        type="button"
        onClick={() => {
          if (typeof window !== 'undefined') {
            const event = new CustomEvent('upmap-order-modal');
            window.dispatchEvent(event);
          }
        }}
        className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center shadow-lg"
      >
        Получить аудит бесплатно
      </button>
      <a 
        href="tel:+79935006321" 
        className="border-2 border-blue-400 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-white transition-colors inline-flex items-center justify-center"
      >
        Связаться
      </a>
    </div>
  </div>
);

export default CtaBlock;
