import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export interface ArticleMetadata {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  keywords: string[];
  coverImage: string;
  faqSchema?: string;
}

export interface Article extends ArticleMetadata {
  content: string | any; // Может быть строкой (MDX) или объектом (TinaCMS rich-text)
}

// Получить все статьи
export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Проверяем, есть ли body в TinaCMS формате (rich-text)
      let finalContent = content;
      if (data.body) {
        // Если body - это объект (TinaCMS rich-text), используем его напрямую
        finalContent = data.body;
      }

      return {
        content: finalContent,
        ...(data as ArticleMetadata),
        slug,
      };
    });

  // Сортировка по дате (новые первыми)
  return articles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Получить одну статью по slug
export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Проверяем, есть ли body в TinaCMS формате (rich-text)
    let finalContent = content;
    if (data.body) {
      // Если body - это объект (TinaCMS rich-text), используем его напрямую
      finalContent = data.body;
    }

    return {
      content: finalContent,
      ...(data as ArticleMetadata),
      slug,
    };
  } catch (error) {
    return null;
  }
}

// Получить все slug для generateStaticParams
export function getAllArticleSlugs(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}
