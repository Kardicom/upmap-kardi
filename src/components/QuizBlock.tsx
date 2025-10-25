'use client'

import { useState } from 'react';
import { Eye, User, Star, TrendingDown } from 'lucide-react';
import { useOrderModal } from '../contexts/OrderModalContext';

const quizSections = [
  {
    title: 'Проблемы с видимостью',
    icon: <Eye className="w-6 h-6 text-white" />, 
    options: [
      'Ваша компания не в ТОП-5 по основным запросам',
      'Конкуренты отображаются выше в результатах поиска',
      'Клиенты не находят вас в интернете',
    ],
  },
  {
    title: 'Непрофессиональный профиль',
    icon: <User className="w-6 h-6 text-white" />, 
    options: [
      'Карточка выглядит как любительская работа',
      'Нет отзывов, фотографий, обновлений',
      'Описание не продает, а просто информирует',
    ],
  },
  {
    title: 'Проблемы с отзывами',
    icon: <Star className="w-6 h-6 text-white" />, 
    options: [
      'Последний отзыв был месяц назад',
      'Рейтинг ниже 4.5 балла',
      'Не знаете как получить положительные отзывы',
    ],
  },
  {
    title: 'Падение продаж',
    icon: <TrendingDown className="w-6 h-6 text-white" />, 
    options: [
      'Клиенты стали обращаться реже',
      'Конкуренты перехватывают ваших клиентов',
      'Упускаете потенциал поисковых систем',
    ],
  },
];

const resultLevels = [
  { min: 75, icon: '🔥', title: 'КРИТИЧЕСКОЕ СОСТОЯНИЕ!', desc: 'Ваш бизнес теряет клиентов каждый день! Необходимы срочные меры для исправления ситуации.' },
  { min: 50, icon: '⚠️', title: 'СЕРЬЕЗНЫЕ ПРОБЛЕМЫ!', desc: 'Множественные проблемы мешают развитию вашего бизнеса. Требуется комплексная работа.' },
  { min: 25, icon: '⚡', title: 'ЕСТЬ ПРОБЛЕМЫ!', desc: 'Обнаружены важные проблемы, которые снижают эффективность вашего бизнеса в картах.' },
  { min: 1, icon: '💡', title: 'НЕБОЛЬШИЕ НЕДОЧЕТЫ', desc: 'Есть несколько моментов для улучшения, которые помогут привлечь больше клиентов.' },
  { min: 0, icon: '✅', title: 'ВСЕ ОТЛИЧНО!', desc: 'У вас нет явных проблем, но мы можем помочь оптимизировать еще лучше!' },
];

export default function QuizBlock() {
  const { openModal } = useOrderModal();
  const [checked, setChecked] = useState(Array(12).fill(false));
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ icon: '', title: '', desc: '', percent: 0 });

  const checkedCount = checked.filter(Boolean).length;
  const percent = Math.round((checkedCount / 12) * 100);

  function handleResult() {
    let level = resultLevels.find(l => percent >= l.min) || resultLevels[resultLevels.length - 1];
    setResult({ ...level, percent });
    setShowResult(true);
  }

  return (
    <div className="quiz-block max-w-[1440px] mx-auto">
      <div className="quiz-progress-bar w-full max-w-2xl mx-auto mb-12">
        <div className="relative">
          <div className="h-4 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 overflow-hidden shadow-inner border border-slate-200">
            <div 
              className="h-full md:transition-all md:duration-500 md:ease-out rounded-2xl"
              style={{ 
                width: percent + '%', 
                background: 'linear-gradient(90deg, #3b82f6, #1d4ed8, #1e3a8a)',
                boxShadow: '0 0 20px rgba(59,130,246,0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
              }} 
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-slate-600 font-medium">Прогресс диагностики</span>
            <span className="text-blue-600 font-bold text-lg">{percent}%</span>
          </div>
        </div>
      </div>

      <div className="quiz-grid grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1440px] mx-auto mb-12">
        {quizSections.map((section, sIdx) => (
          <div
            className="quiz-section group bg-white rounded-3xl border border-slate-200 p-8 flex flex-col gap-6 relative md:transition-all md:duration-300 md:hover:shadow-2xl md:hover:border-blue-300 md:hover:-translate-y-1"
            style={{ 
              boxShadow: '0 4px 24px -1px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.04)',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
            }}
            key={sIdx}
          >
            <div className="flex items-center gap-4 pb-2 border-b border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg md:group-hover:scale-110 md:transition-transform md:duration-300">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 md:group-hover:text-blue-600 md:transition-colors">
                {section.title}
              </h3>
            </div>

            <div className="space-y-4">
              {section.options.map((opt, oIdx) => (
                <label
                  className="quiz-checkbox flex items-start gap-4 cursor-pointer p-4 rounded-2xl border border-slate-100 bg-white md:hover:bg-blue-50 md:hover:border-blue-200 md:transition-all md:duration-200 group/option"
                  key={oIdx}
                >
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      checked={checked[sIdx * 3 + oIdx]}
                      onChange={e => {
                        const arr = [...checked];
                        arr[sIdx * 3 + oIdx] = e.target.checked;
                        setChecked(arr);
                      }}
                      className="w-5 h-5 text-blue-600 border-2 border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 md:transition-all md:duration-200"
                    />
                  </div>
                  <span className="text-gray-700 text-base font-medium leading-relaxed md:group-hover/option:text-gray-900 md:transition-colors">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="quiz-button-container text-center mt-12">
        <button
          className="quiz-button bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
          onClick={handleResult}
        >
          Узнать результат
        </button>
      </div>
      
      {showResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setShowResult(false)}>
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 p-8 relative border border-slate-200"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: '0 25px 80px -15px rgba(0,0,0,0.25), 0 10px 40px -10px rgba(0,0,0,0.15)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 transition-all duration-200" 
              onClick={() => setShowResult(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <div className="mb-6">
                <div className="text-6xl mb-4">{result.icon}</div>
                <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                  {result.percent}%
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
                {result.title}
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-md mx-auto">
                {result.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="flex-1 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 py-4 rounded-2xl font-bold shadow-lg md:hover:shadow-xl md:hover:scale-105 md:transition-all md:duration-300 text-lg"
                  onClick={() => { setShowResult(false); openModal(); }}
                  style={{ 
                    boxShadow: '0 8px 30px -8px rgba(59,130,246,0.5)' 
                  }}
                >
                  Устранить проблемы
                </button>
                <button
                  className="flex-1 bg-slate-100 md:hover:bg-slate-200 text-slate-700 md:hover:text-slate-900 px-6 py-4 rounded-2xl font-bold md:transition-all md:duration-300 text-lg border border-slate-200"
                  onClick={() => setShowResult(false)}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
