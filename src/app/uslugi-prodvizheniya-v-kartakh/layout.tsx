import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги продвижения в Яндекс.Картах, 2ГИС | UPMAP',
  description: 'Комплексные услуги по продвижению бизнеса в Яндекс.Картах, 2ГИС. SEO, управление отзывами, локальная реклама.',
  keywords: 'услуги продвижения в картах, SEO Яндекс Карты, оптимизация 2ГИС, управление отзывами',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
