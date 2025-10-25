'use client';

import { Target, TrendingUp, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useOrderModal } from '@/contexts/OrderModalContext';
import { useState } from 'react';

// Компоненты иконок сервисов
const YandexMapsIcon = ({ size = 24 }: { size?: number }) => (
  <div 
    className="inline-flex items-center justify-center rounded-2xl shadow-sm" 
    style={{ 
      width: size, 
      height: size, 
      background: '#F5F5F5',
      border: '1px solid #E0E0E0'
    }}
  >
    <svg 
      width={size * 0.6} 
      height={size * 0.6} 
      viewBox="0 0 24 24" 
      fill="none"
    >
      <path 
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
        fill="#FF3333"
      />
      <circle cx="12" cy="9" r="3" fill="white" />
    </svg>
  </div>
);

const TwoGisIcon = ({ size = 24 }: { size?: number }) => (
  <div 
    className="inline-flex items-center justify-center rounded-2xl shadow-sm" 
    style={{ 
      width: size, 
      height: size, 
      background: '#F5F5F5',
      border: '1px solid #E0E0E0'
    }}
  >
    <svg 
      width={size * 0.6} 
      height={size * 0.6} 
      viewBox="0 0 24 24" 
      fill="none"
    >
      <path 
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
        fill="#00B956"
      />
      <circle cx="12" cy="9" r="3" fill="white" />
    </svg>
  </div>
);

const GoogleMapsIcon = ({ size = 24 }: { size?: number }) => (
  <div 
    className="inline-flex items-center justify-center rounded-2xl shadow-sm" 
    style={{ 
      width: size, 
      height: size, 
      background: '#F5F5F5',
      border: '1px solid #E0E0E0'
    }}
  >
    <svg 
      width={size * 0.6} 
      height={size * 0.6} 
      viewBox="0 0 24 24" 
      fill="none"
    >
      {/* Google Maps multicolor pin */}
      <path 
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" 
        fill="url(#googleGradient)"
      />
      <circle cx="12" cy="9" r="3" fill="white" />
      <defs>
        <linearGradient id="googleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="25%" stopColor="#34A853" />
          <stop offset="50%" stopColor="#FBBC05" />
          <stop offset="75%" stopColor="#EA4335" />
          <stop offset="100%" stopColor="#4285F4" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Компонент для отображения платформ
const PlatformIcons = ({ platforms, size = 24 }: { platforms: string[], size?: number }) => (
  <div className="flex items-center gap-2 justify-center flex-wrap">
    {platforms.map((platform, index) => {
      switch (platform) {
        case 'yandex':
          return <YandexMapsIcon key={index} size={size} />;
        case '2gis':
          return <TwoGisIcon key={index} size={size} />;
        case 'google':
          return <GoogleMapsIcon key={index} size={size} />;
        default:
          return null;
      }
    })}
  </div>
);

// Типы для таблицы тарифов
type TariffCol = 'lite' | 'standart' | 'max';
type TariffRow = {
  name: string;
  lite: boolean | string;
  standart: boolean | string;
  max: boolean | string;
};

// Данные для таблицы упаковки агрегаторов
const packagingRows: TariffRow[] = [
  {
    name: 'Анализ поисковой выдачи. Фиксируем текущие позиции в Яндекс поиске',
    lite: true, standart: true, max: true
  },
  {
    name: 'SEO наполнение услуг или товаров до 300. Оптимизируем права для поднятия в списке выдачи',
    lite: true, standart: true, max: true
  },
  {
    name: 'Разработка индивидуального дизайна. До 5 сториc и до 4 слайдов. Всего 20 слайдов на 5 сториc. Дизайн главного фото. Дизайн 10-ти популярных товаров (витрина). Логотип',
    lite: true, standart: true, max: true
  },
  {
    name: 'Подбор фото под услуги до 250 штук',
    lite: true, standart: true, max: true
  },
  {
    name: 'Вшитие SEO-ключей в фото. Добавления в мета данные фотографий ключевых слов',
    lite: true, standart: true, max: true
  },
  {
    name: 'Написание и публикация новостей и акций компании до 4 шт.',
    lite: true, standart: true, max: true
  },
  {
    name: 'Публикация ответов на последние 10 отзывов',
    lite: true, standart: true, max: true
  },
  {
    name: 'Оформление площадок',
    lite: 'yandex-only', standart: 'basic', max: 'full'
  }
];

const tariffRows: TariffRow[] = [
  {
    name: 'Мониторинг ранжирования услуг в Яндекс Картах по ключевым словам',
    lite: true, standart: true, max: true
  },
  {
    name: 'Генерация фотографий либо дизайн фото на услуги до 25 штук в месяц',
    lite: true, standart: true, max: true
  },
  {
    name: 'Ежемесячный контроль модерации с поддержкой агрегаторов',
    lite: true, standart: true, max: true
  },
  {
    name: 'Написание и Публикация новостей и акций компании 2-4 раза в месяц',
    lite: true, standart: true, max: true
  },
  {
    name: 'Мониторинг и ответы на отзывы',
    lite: true, standart: true, max: true
  },
  {
    name: 'Накрутка поведенческих факторов',
    lite: '300-400', standart: '750-1200', max: '750-1200'
  },
  {
    name: 'Публикация SEO отзывов',
    lite: false, standart: '10шт в мес.', max: '25шт в мес.'
  },
  {
    name: 'Введение рекламы на агрегаторах',
    lite: false, standart: true, max: true
  },
  {
    name: 'Удаление отзывов',
    lite: false, standart: true, max: true
  },
  {
    name: 'Ведение площадок',
    lite: 'yandex-only', standart: 'basic', max: 'full'
  }
];

const TariffsPage = () => {
	const { openModal } = useOrderModal();
	const [expandedTariff, setExpandedTariff] = useState<string | null>(null);

	const toggleTariff = (tariff: string) => {
		setExpandedTariff(expandedTariff === tariff ? null : tariff);
	};

	const renderCellValue = (value: boolean | string) => {
		if (typeof value === 'boolean') {
			return value ? (
				<div className="w-7 h-7 bg-amber-500 rounded border-2 border-amber-500 flex items-center justify-center mx-auto">
					<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
						<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
					</svg>
				</div>
			) : (
				<div className="w-7 h-7 bg-gray-200 rounded border-2 border-gray-300 mx-auto"></div>
			);
		}
		
		// Обработка платформ
		if (value === 'none') {
			return (
				<div className="flex justify-center">
					<span className="text-red-500 text-lg">❌</span>
				</div>
			);
		}
		
		if (value === 'yandex-only') {
			return (
				<div className="flex flex-col items-center gap-1">
					<PlatformIcons platforms={['yandex']} size={22} />
				</div>
			);
		}
		
		if (value === 'basic') {
			return (
				<div className="flex flex-col items-center gap-1">
					<PlatformIcons platforms={['yandex', '2gis', 'google']} size={22} />
				</div>
			);
		}
		
		if (value === 'full') {
			return (
				<div className="flex flex-col items-center gap-1">
					<PlatformIcons platforms={['yandex', '2gis', 'google']} size={22} />
					<span className="text-xs text-green-600 font-semibold">+4 доп.</span>
				</div>
			);
		}
		
		return (
			<div className="inline-block px-3 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-200 text-center whitespace-pre-line">
				{value}
			</div>
		);
	};

	return (
		<div className="pt-20">
			{/* Hero Section */}
			<section className="py-8 md:py-32 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white relative border-b border-slate-800 shadow-xl">
				<div className="absolute inset-0 opacity-30">
					{/* Main blur circles */}
					<div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
					<div className="absolute bottom-20 right-20 w-24 h-24 bg-slate-400 rounded-full blur-2xl"></div>
					<div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          
					{/* About network dots */}
					<div className="absolute top-16 left-16 w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
					<div className="absolute top-16 right-16 w-3 h-3 bg-slate-300 rounded-full opacity-50"></div>
					<div className="absolute bottom-16 left-16 w-3 h-3 bg-indigo-300 rounded-full opacity-70"></div>
					<div className="absolute bottom-16 right-16 w-4 h-4 bg-blue-200 rounded-full opacity-55"></div>
					<div className="absolute top-1/3 left-1/4 w-2 h-2 bg-slate-200 rounded-full opacity-60"></div>
					<div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-200 rounded-full opacity-50"></div>
					<div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-300 rounded-full opacity-65"></div>
					<div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-slate-300 rounded-full opacity-55"></div>
          
					{/* About connection lines */}
					<svg className="absolute inset-0 w-full h-full opacity-20 text-blue-300" viewBox="0 0 1000 1000">
						<line x1="100" y1="100" x2="300" y2="200" stroke="currentColor" strokeWidth="2"/>
						<line x1="300" y1="200" x2="700" y2="250" stroke="currentColor" strokeWidth="2"/>
						<line x1="700" y1="250" x2="900" y2="200" stroke="currentColor" strokeWidth="2"/>
						<line x1="200" y1="450" x2="500" y2="400" stroke="currentColor" strokeWidth="1"/>
						<line x1="500" y1="400" x2="800" y2="450" stroke="currentColor" strokeWidth="2"/>
					</svg>
				</div>
				<div className="container mx-auto px-4 relative z-10" style={{ maxWidth: '1440px' }}>
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-lg">Тарифы компании UPMAP</h1>
						<p className="text-2xl text-slate-300 leading-relaxed mb-2 font-medium">
							Итоговая цена зависит от запроса клиента, текущего состояния вашего бизнеса и количества карточек компании.
						</p>
					</div>
				</div>
			</section>

			{/* Packaging Tariffs Table */}
			<section className="py-8 md:py-[96px] bg-white border-b border-slate-100">
				<div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Тарифы на упаковку</h2>
						<p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
							Включенные услуги и стоимость по тарифам
						</p>
					</div>
					
					{/* Desktop Table */}
					<div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
						<div className="overflow-x-auto">
							<table className="min-w-full">
								<thead>
									<tr className="bg-gradient-to-r from-blue-600 to-blue-700">
										<th className="text-left py-6 px-6 text-white text-lg font-semibold w-2/3">
											Включенные услуги
										</th>
										<th className="text-center py-6 px-4 text-white text-lg font-semibold">
											Lite
										</th>
										<th className="text-center py-6 px-4 text-white text-lg font-semibold">
											Standart
										</th>
										<th className="text-center py-6 px-4 text-white text-lg font-semibold">
											Max
										</th>
									</tr>
								</thead>
								<tbody>
									{packagingRows.map((row, index) => (
										<tr key={index} className="bg-white hover:bg-gray-50/50 transition-colors">
											<td className="py-5 px-6 text-lg text-gray-600 font-medium border-r border-gray-200">
												{row.name}
											</td>
											<td className="py-5 px-4 text-center border-r border-gray-200">
												{renderCellValue(row.lite)}
											</td>
											<td className="py-5 px-4 text-center border-r border-gray-200">
												{renderCellValue(row.standart)}
											</td>
											<td className="py-5 px-4 text-center">
												{renderCellValue(row.max)}
											</td>
										</tr>
									))}
									<tr className="bg-gradient-to-r from-blue-600 to-blue-700 border-t-2 border-blue-400">
										<td className="py-6 px-6 text-lg font-bold text-white border-r border-gray-200">
											Стоимость упаковки
										</td>
										<td className="py-6 px-4 text-center text-xl font-bold text-white border-r border-gray-200">
											35 000 ₽
										</td>
										<td className="py-6 px-4 text-center text-xl font-bold text-white border-r border-gray-200">
											50 000 ₽
										</td>
										<td className="py-6 px-4 text-center text-xl font-bold text-white">
											65 000 ₽
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* Mobile Accordion */}
					<div className="md:hidden space-y-4">
						{['lite', 'standart', 'max'].map((tariff) => {
							const tariffNames = {
								lite: 'Lite',
								standart: 'Standart', 
								max: 'Max'
							};
							const tariffPrices = {
								lite: '35 000 ₽',
								standart: '45 000 ₽',
								max: '65 000 ₽'
							};
							
							return (
								<div key={tariff} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
									<button
										onClick={() => toggleTariff(tariff)}
										className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
									>
										<div className="text-left">
											<h3 className="text-xl font-bold">{tariffNames[tariff as keyof typeof tariffNames]}</h3>
											<p className="text-blue-100 text-lg font-semibold">{tariffPrices[tariff as keyof typeof tariffPrices]}</p>
										</div>
										{expandedTariff === tariff ? (
											<ChevronUp className="w-6 h-6" />
										) : (
											<ChevronDown className="w-6 h-6" />
										)}
									</button>
									
									{expandedTariff === tariff && (
										<div className="p-6 space-y-4 bg-white">
											{packagingRows.map((row, index) => (
												<div key={index} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-b-0">
													<div className="flex-1 pr-4">
														<p className="text-gray-700 text-sm font-medium leading-relaxed">{row.name}</p>
													</div>
													<div className="flex-shrink-0">
														{renderCellValue(row[tariff as keyof TariffRow])}
													</div>
												</div>
											))}
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Tariff Details Table */}
			<section className="py-8 md:py-[96px] bg-white border-b border-slate-100">
				<div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Что входит в тарифы сопровождения карточек вашей компании</h2>
						<p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
							Сопровождение производится в последующие месяцы после упаковки карточки
						</p>
					</div>
					
					{/* Desktop Table */}
					<div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
						<div className="overflow-x-auto">
							<table className="min-w-full">
								<thead>
									<tr className="bg-gradient-to-r from-blue-600 to-blue-700">
										<th className="py-6 px-6 text-left text-lg font-semibold text-white"></th>
										<th className="py-6 px-6 text-center text-lg font-semibold text-white">Lite</th>
										<th className="py-6 px-6 text-center text-lg font-semibold text-white">Standart</th>
										<th className="py-6 px-6 text-center text-lg font-semibold text-white">Max</th>
									</tr>
								</thead>
								<tbody>
									{tariffRows.map((row, idx) => (
										<tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
											<td className="py-5 px-6 text-lg text-gray-600 font-medium border-r border-gray-200">{row.name}</td>
											{(['lite', 'standart', 'max'] as TariffCol[]).map((col, index) => {
												const value = row[col];
												return (
													<td key={col} className={`py-5 px-6 text-center ${index < 2 ? 'border-r border-gray-200' : ''}`}>
														{renderCellValue(value)}
													</td>
												);
											})}
										</tr>
									))}
									
									{/* Pricing rows */}
									<tr className="bg-gradient-to-r from-blue-600 to-blue-700 border-t-2 border-blue-200">
										<td className="py-6 px-6 text-lg font-bold text-white border-r border-gray-200">Стоимость сопровождения <span className="text-red-300">1 месяц</span></td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white border-r border-gray-200">20 000 ₽</td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white border-r border-gray-200">35 000 ₽</td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white">50 000 ₽</td>
									</tr>
									<tr className="bg-gradient-to-r from-blue-600 to-blue-700 border-t border-blue-400">
										<td className="py-6 px-6 text-lg font-bold text-white border-r border-gray-200">Стоимость сопровождения <span className="text-red-300">3 месяца</span></td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white border-r border-gray-200">50 500 ₽</td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white border-r border-gray-200">91 000 ₽</td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white">131 500 ₽</td>
									</tr>
									<tr className="bg-gradient-to-r from-blue-600 to-blue-700 border-t border-blue-400">
										<td className="py-6 px-6 text-lg font-bold text-white border-r border-gray-200">Стоимость сопровождения <span className="text-red-300">6 месяцев</span></td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white border-r border-gray-200">96 500 ₽</td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white border-r border-gray-200">173 000 ₽</td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white">249 500 ₽</td>
									</tr>
									<tr className="bg-gradient-to-r from-blue-600 to-blue-700 border-t border-blue-400">
										<td className="py-6 px-6 text-lg font-bold text-white border-r border-gray-200">Стоимость сопровождения <span className="text-red-300">12 месяцев</span></td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white border-r border-gray-200">165 000 ₽</td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white border-r border-gray-200">300 000 ₽</td>
										<td className="py-6 px-6 text-center text-xl font-bold text-white">435 000 ₽</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* Mobile Accordion */}
					<div className="md:hidden space-y-4">
						{['lite', 'standart', 'max'].map((tariff) => {
							const tariffNames = {
								lite: 'Lite',
								standart: 'Standart', 
								max: 'Max'
							};
							const tariffPrices = {
								lite: {
									month1: '20 000 ₽',
									month3: '50 500 ₽',
									month6: '96 500 ₽',
									month12: '165 000 ₽'
								},
								standart: {
									month1: '35 000 ₽',
									month3: '91 000 ₽',
									month6: '173 000 ₽',
									month12: '300 000 ₽'
								},
								max: {
									month1: '50 000 ₽',
									month3: '131 500 ₽',
									month6: '249 500 ₽',
									month12: '435 000 ₽'
								}
							};
							
							return (
								<div key={`support-${tariff}`} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
									<button
										onClick={() => toggleTariff(`support-${tariff}`)}
										className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
									>
										<div className="text-left">
											<h3 className="text-xl font-bold">{tariffNames[tariff as keyof typeof tariffNames]}</h3>
											<p className="text-blue-100 text-sm">от {tariffPrices[tariff as keyof typeof tariffPrices].month1}/мес</p>
										</div>
										{expandedTariff === `support-${tariff}` ? (
											<ChevronUp className="w-6 h-6" />
										) : (
											<ChevronDown className="w-6 h-6" />
										)}
									</button>
									
									{expandedTariff === `support-${tariff}` && (
										<div className="p-6 space-y-4 bg-white">
											{/* Services */}
											{tariffRows.map((row, index) => (
												<div key={index} className="flex items-start justify-between py-3 border-b border-gray-100">
													<div className="flex-1 pr-4">
														<p className="text-gray-700 text-sm font-medium leading-relaxed">{row.name}</p>
													</div>
													<div className="flex-shrink-0">
														{renderCellValue(row[tariff as keyof TariffRow])}
													</div>
												</div>
											))}
											
											{/* Pricing */}
											<div className="mt-6 pt-4 border-t-2 border-blue-200 space-y-3">
												<h4 className="text-lg font-bold text-gray-900 mb-4">Стоимость сопровождения:</h4>
												<div className="grid grid-cols-2 gap-3">
													<div className="bg-orange-50 p-3 rounded-lg">
														<p className="text-sm text-gray-600">1 месяц</p>
														<p className="text-lg font-bold text-gray-900">{tariffPrices[tariff as keyof typeof tariffPrices].month1}</p>
													</div>
													<div className="bg-gray-50 p-3 rounded-lg">
														<p className="text-sm text-gray-600">3 месяца</p>
														<p className="text-lg font-bold text-gray-900">{tariffPrices[tariff as keyof typeof tariffPrices].month3}</p>
													</div>
													<div className="bg-gray-50 p-3 rounded-lg">
														<p className="text-sm text-gray-600">6 месяцев</p>
														<p className="text-lg font-bold text-gray-900">{tariffPrices[tariff as keyof typeof tariffPrices].month6}</p>
													</div>
													<div className="bg-gray-50 p-3 rounded-lg">
														<p className="text-sm text-gray-600">12 месяцев</p>
														<p className="text-lg font-bold text-gray-900">{tariffPrices[tariff as keyof typeof tariffPrices].month12}</p>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Packages Section */}
			<section className="py-8 md:py-[96px] bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-100">
				<div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Готовые пакеты услуг</h2>
						<p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
							Выберите оптимальный пакет для вашего бизнеса
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						<div className="bg-white/95 rounded-3xl shadow-xl border border-slate-200 hover:shadow-blue-400/40 hover:scale-[1.045] hover:border-blue-400 transition-all duration-300 group flex-shrink-0 relative flex flex-col p-10">
							<div className="text-center mb-8">
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Минимальный</h3>
								<p className="text-lg text-gray-600 mb-4">Нейропродвижение</p>
								<div className="text-4xl font-bold text-gray-900 mb-2">от 15 900 ₽</div>
								<p className="text-gray-500">в месяц</p>
							</div>
                    
							<ul className="space-y-3 mb-8 flex-grow">
								<li className="flex items-center space-x-3 text-base">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Яндекс.Карты</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Условие: наличие упакованной карточки</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Ежемесячный отчет</span>
								</li>
							</ul>
                    
							<button 
								onClick={() => openModal('Стартовый пакет (от 9 900 ₽/мес)')}
								className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center mt-auto shadow-lg"
							>
								Выбрать пакет
							</button>
						</div>

						<div className="bg-white/95 rounded-3xl shadow-xl border-2 border-amber-500 relative flex flex-col p-10">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<span className="bg-amber-500 text-white px-4 py-2 rounded-full text-base font-semibold shadow-lg">
									Популярный
								</span>
							</div>
                    
							<div className="text-center mb-8">
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Стандарт</h3>
								<p className="text-lg text-gray-600 mb-4">Для среднего бизнеса</p>
								<div className="text-4xl font-bold text-blue-600 mb-2">от 30 000 ₽</div>
								<p className="text-gray-500">в месяц</p>
							</div>
                    
							<ul className="space-y-3 mb-8 flex-grow">
								<li className="flex items-center space-x-3 text-base">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Упаковка карточки</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Яндекс.Услуги</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Управление репутацией</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Еженедельные отчеты</span>
								</li>
							</ul>
                    
							<button 
								onClick={() => openModal('Профессиональный пакет (от 30 000 ₽/мес)')}
								className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center mt-auto shadow-lg"
							>
								Выбрать пакет
							</button>
						</div>

						<div className="bg-white/95 rounded-3xl shadow-xl border border-slate-200 hover:shadow-blue-400/40 hover:scale-[1.045] hover:border-blue-400 transition-all duration-300 group flex-shrink-0 relative flex flex-col p-10">
							<div className="text-center mb-8">
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Максимальный</h3>
								<p className="text-lg text-gray-600 mb-4">Для крупного бизнеса</p>
								<div className="text-4xl font-bold text-gray-900 mb-2">от 50 000 ₽</div>
								<p className="text-gray-500">в месяц</p>
							</div>
                    
							<ul className="space-y-3 mb-8 flex-grow">
								<li className="flex items-center space-x-3 text-base">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Все услуги включены</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Персональный менеджер</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Детальная аналитика</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Приоритетная поддержка</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-500" />
									<span className="text-gray-600">Консультации по развитию</span>
								</li>
							</ul>
                    
							<button 
								onClick={() => openModal('Максимальный пакет (от 50 000 ₽/мес)')}
								className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center mt-auto shadow-lg"
							>
								Выбрать пакет
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="py-8 md:py-[96px] bg-gray-50 border-b border-slate-100">
				<div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div className="bg-white rounded-3xl p-10 shadow-xl">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<Target className="w-8 h-8 text-blue-600" />
							</div>
							<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Наша миссия</h3>
							<p className="text-lg text-gray-600 leading-relaxed">
								Сделать каждый местный бизнес видимым для своих потенциальных клиентов. 
								Мы верим, что качественные товары и услуги должны находить своего покупателя, 
								а предприниматели — получать справедливое вознаграждение за свой труд.
							</p>
						</div>
            
						<div className="bg-white rounded-3xl p-10 shadow-xl">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
								<TrendingUp className="w-8 h-8 text-green-600" />
							</div>
							<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Наше видение</h3>
							<p className="text-lg text-gray-600 leading-relaxed">
								Мы стремимся стать ведущей компанией в области локального продвижения в России. 
								Наша цель — помочь 10 000 предпринимателей увеличить свою прибыль через 
								эффективное присутствие в картах и справочниках.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-8 md:py-[96px] bg-gray-900 text-white border-b border-slate-800">
				<div className="container mx-auto px-4 text-center" style={{ maxWidth: '1440px' }}>
					<h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight drop-shadow-lg">
						Готовы увеличить поток клиентов?
					</h2>
					<p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
						Получите бесплатный аудит вашего присутствия в картах и персональную стратегию продвижения
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							type="button"
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

export default TariffsPage;
