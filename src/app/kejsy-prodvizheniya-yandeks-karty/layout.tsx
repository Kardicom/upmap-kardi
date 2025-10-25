import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кейсы и результаты продвижения в Яндекс.Картах, 2ГИС | UPMAP',
  description: 'Посмотрите реальные кейсы и результаты продвижения бизнеса в Яндекс.Картах, 2ГИС от UPMAP.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
