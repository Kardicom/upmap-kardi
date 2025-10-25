import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Тарифы продвижения в Яндекс Картах и 2ГИС | Цены - UPMAP',
  description: 'Прозрачные тарифы на продвижение бизнеса в Яндекс.Картах, 2ГИС и Google Maps. Пакеты от 9 900₽. Без скрытых платежей. Гарантия результата.',
  keywords: 'тарифы продвижения в картах, цены яндекс карты, стоимость продвижения 2гис, пакеты продвижения',
};

export default function TariffsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
