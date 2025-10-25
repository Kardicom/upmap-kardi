import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | UPMAP',
  description: 'Политика конфиденциальности сервиса UPMAP. Узнайте, как мы защищаем ваши данные при продвижении в Яндекс.Картах, 2ГИС',
  robots: 'noindex, nofollow',
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
