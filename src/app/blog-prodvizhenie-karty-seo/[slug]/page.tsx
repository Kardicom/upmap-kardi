import { getAllArticles, getArticleBySlug } from '@/lib/articles';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import ArticleClient from '@/components/ArticleClient';
import ArticleContentMDX from '@/components/ArticleContentMDX';
import ScrollToAnchor from '@/components/ScrollToAnchor';
import Script from 'next/script';

const extractJsonLdContent = (raw?: string | null) => {
  if (!raw) {
    return null;
  }

  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }

  const scriptMatch = trimmed.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
  const jsonCandidate = scriptMatch ? scriptMatch[1].trim() : trimmed;

  if (!jsonCandidate) {
    return null;
  }

  try {
    return JSON.stringify(JSON.parse(jsonCandidate));
  } catch (error) {
    return jsonCandidate;
  }
};

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Статья не найдена | UPMAP',
    };
  }

  return {
    title: `${article.title} | UPMAP`,
    description: article.description,
    keywords: article.keywords?.join(', ') || '',
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Проверяем, TinaCMS контент или обычный MDX
  const isTinaContent = typeof article.content === 'object' && article.content !== null;
  const faqJsonLd = extractJsonLdContent(article.faqSchema);
  const articleJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    datePublished: article.date,
    image: article.coverImage,
    publisher: {
      '@type': 'Organization',
      name: 'UPMAP',
      logo: {
        '@type': 'ImageObject',
        url: 'https://upmap.ru/logo.png',
      },
    },
  });

  return (
    <div className="pt-20 min-h-screen bg-white">
      <ScrollToAnchor />
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4" style={{ maxWidth: '1440px' }}>
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Главная</Link>
              <span className="mx-2">/</span>
              <Link href="/blog-prodvizhenie-karty-seo" className="hover:text-blue-600">Блог</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{article.title}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-slate-400 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: '1440px' }}>
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog-prodvizhenie-karty-seo"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться к блогу
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{article.author}</span>
              </div>
              <span className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                {article.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content + CTA */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <ArticleClient 
            article={article}
            mdxContent={!isTinaContent ? <ArticleContentMDX content={article.content} /> : undefined}
          />
        </div>
      </article>

      {/* Schema.org */}
      <Script id={`article-schema-${slug}`} type="application/ld+json" strategy="beforeInteractive">
        {articleJsonLd}
      </Script>
      {faqJsonLd && (
        <Script id={`faq-schema-${slug}`} type="application/ld+json" strategy="beforeInteractive">
          {faqJsonLd}
        </Script>
      )}
    </div>
  );
}
