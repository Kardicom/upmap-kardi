import { getAllArticles, getArticleBySlug } from '@/lib/articles';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

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
    keywords: article.keywords.join(', '),
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

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4" style={{ maxWidth: '1440px' }}>
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/blog-prodvizhenie-karty-seo" className="hover:text-blue-600">Блог</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.title}</span>
          </nav>
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

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="prose prose-lg max-w-none
            prose-headings:font-bold 
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-gray-900
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-800
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
            prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
            prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded 
            prose-code:text-sm prose-code:text-gray-800
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg
            prose-img:rounded-lg prose-img:shadow-lg
          ">
            <MDXRemote 
              source={article.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готовы начать продвижение?
            </h3>
            <p className="text-gray-700 mb-6">
              Получите бесплатный аудит вашей карточки в Яндекс.Картах и персональную стратегию продвижения
            </p>
            <Link
              href="/zakazat-prodvizhenie-v-kartakh"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Получить бесплатный аудит
            </Link>
          </div>
        </div>
      </article>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </div>
  );
}
