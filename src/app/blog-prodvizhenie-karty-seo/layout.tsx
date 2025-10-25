import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Блог о продвижении в Яндекс.Картах, 2ГИС | UPMAP',
  description: 'Экспертные статьи о продвижении в Яндекс.Картах, 2ГИС и Google: SEO, отзывы, локальная реклама, кейсы и советы от профессионалов UPMAP.',
  keywords: 'блог продвижение яндекс карты, seo карты, локальное продвижение статьи, 2гис продвижение, отзывы яндекс',
  openGraph: {
    title: 'Блог о продвижении в Яндекс.Картах, 2ГИС | UPMAP',
    description: 'Экспертные статьи о продвижении в Яндекс.Картах, 2ГИС и Google',
    type: 'website',
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
