import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Условия использования | UPMAP',
  description: 'Условия использования сервиса UPMAP для продвижения бизнеса в Яндекс.Картах, 2ГИС.',
  robots: 'noindex, nofollow',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
