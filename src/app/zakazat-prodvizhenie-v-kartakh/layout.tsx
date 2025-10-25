import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты UPMAP — продвижение в Яндекс.Картах, 2ГИС',
  description: 'Свяжитесь с командой UPMAP для бесплатного аудита и консультации по продвижению вашего бизнеса в Яндекс.Картах, 2ГИС и Google.',
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
