import { getAllArticles } from '@/lib/articles';
import BlogPageClient from './BlogPageClient';

export const metadata = {
  title: 'Блог о продвижении в картах | Экспертные статьи UPMAP',
  description: 'Практические руководства, кейсы и аналитика о продвижении бизнеса в Яндекс.Картах, 2ГИС и Google Maps. Советы от экспертов локального SEO.',
  keywords: 'блог продвижение карты, статьи seo карты, локальное seo блог, яндекс карты статьи',
};

const BlogPage = () => {
  const articles = getAllArticles(); // Читаем статьи на СЕРВЕРЕ
  
  return <BlogPageClient articles={articles} />; // Передаем в браузер
};

export default BlogPage;
