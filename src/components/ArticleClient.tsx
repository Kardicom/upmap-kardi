"use client";

import React from "react";
import CtaBlock from "./CtaBlock";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// Функция для создания ID из текста (якоря)
const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
};

const getHeadingText = (children: React.ReactNode): string => {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string") return child;
      if (typeof child === "number") return child.toString();
      if (React.isValidElement(child)) {
        return getHeadingText((child.props as { children?: React.ReactNode }).children);
      }
      return "";
    })
    .join(" ");
};

// Компоненты для TinaMarkdown с теми же стилями что и в article-content.css
const tinaComponents = {
  h1: (props: any) => {
    const text = getHeadingText(props.children);
    const id = text ? createSlug(text) : undefined;
    return <h1 id={id} className="text-4xl font-extrabold mt-8 mb-4 text-gray-900 scroll-mt-40" {...props} />;
  },
  h2: (props: any) => {
    const text = getHeadingText(props.children);
    const id = text ? createSlug(text) : undefined;
    return <h2 id={id} className="text-3xl font-extrabold mt-12 mb-6 text-gray-900 scroll-mt-40" {...props} />;
  },
  h3: (props: any) => {
    const text = getHeadingText(props.children);
    const id = text ? createSlug(text) : undefined;
    return <h3 id={id} className="text-2xl font-bold mt-8 mb-4 text-gray-800 scroll-mt-40" {...props} />;
  },
  h4: (props: any) => {
    const text = getHeadingText(props.children);
    const id = text ? createSlug(text) : undefined;
    return <h4 id={id} className="text-xl font-bold mt-6 mb-3 text-gray-800 scroll-mt-40" {...props} />;
  },
  p: (props: any) => <p className="text-gray-700 leading-relaxed mb-6" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
  strong: (props: any) => <strong className="text-gray-900 font-extrabold" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
  ul: (props: any) => <ul className="my-6 list-disc pl-6" {...props} />,
  ol: (props: any) => <ol className="my-6 list-decimal pl-6" {...props} />,
  li: (props: any) => <li className="text-gray-700 mb-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800 font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-white p-6 rounded-lg my-6 overflow-x-auto" {...props} />
  ),
  img: (props: any) => <img className="rounded-lg shadow-lg my-6" {...props} />,
  u: (props: any) => <u {...props} />, // Добавляем поддержку подчеркивания
  table: (props: any) => (
    <div className="overflow-x-auto -mx-4 md:mx-0 my-6">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden md:rounded-lg">
          <table className="min-w-full border-collapse" {...props} />
        </div>
      </div>
    </div>
  ),
  thead: (props: any) => <thead className="bg-slate-50" {...props} />,
  tbody: (props: any) => <tbody className="divide-y divide-slate-200" {...props} />,
  th: (props: any) => (
    <th className="border border-slate-200 px-3 py-2 md:px-4 md:py-3 text-left font-semibold text-slate-700 text-sm md:text-base whitespace-nowrap" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-slate-200 px-3 py-2 md:px-4 md:py-3 text-slate-700 align-top text-sm md:text-base" {...props} />
  ),
  tr: (props: any) => <tr className="odd:bg-white even:bg-slate-50" {...props} />,
  
  // Кастомные компоненты для красивого оформления
  ChecklistBlock: ({ children }: any) => (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-xl my-8 shadow-xl">
      {children}
    </div>
  ),
  
  InfoBox: ({ children, title }: any) => (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
      {title && <h4 className="text-blue-900 font-bold mb-2">{title}</h4>}
      <div className="text-blue-800">{children}</div>
    </div>
  ),
  
  WarningBox: ({ children, title }: any) => (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-6">
      {title && <h4 className="text-yellow-900 font-bold mb-2">⚠️ {title}</h4>}
      <div className="text-yellow-800">{children}</div>
    </div>
  ),
  
  SuccessBox: ({ children, title }: any) => (
    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-6">
      {title && <h4 className="text-green-900 font-bold mb-2">✓ {title}</h4>}
      <div className="text-green-800">{children}</div>
    </div>
  ),
  
  TipBox: ({ children }: any) => (
    <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg my-6 relative">
      <div className="absolute -top-3 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        💡 Совет
      </div>
      <div className="text-purple-900 mt-2">{children}</div>
    </div>
  ),

  ImageRow: ({ images = [], columns = "2" }: any) => {
    if (!Array.isArray(images) || images.length === 0) {
      return null;
    }

    const columnClass = columns === "3" ? "md:grid-cols-3" : "md:grid-cols-2";

    return (
      <div className={`not-prose grid gap-4 ${columnClass}`}>
        {images.map((image: any, index: number) => (
          <figure key={index} className="flex flex-col gap-2">
            {image?.src && (
              <img
                src={image.src}
                alt={image?.alt || ""}
                className="w-full rounded-lg shadow-md object-cover"
                loading="lazy"
              />
            )}
            {image?.caption && (
              <figcaption className="text-sm text-slate-500">{image.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  },
  
  QuoteBox: ({ children, author }: any) => (
    <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg my-6 italic">
      <div className="text-gray-700 text-lg">{children}</div>
      {author && <div className="text-gray-500 text-sm mt-3">— {author}</div>}
    </div>
  ),
  
  HighlightText: ({ children }: any) => (
    <span className="bg-yellow-200 px-2 py-1 rounded">{children}</span>
  ),
  
  ButtonLink: ({ href, children }: any) => (
    <a 
      href={href} 
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors my-4 shadow-md"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} →
    </a>
  ),
};

export default function ArticleClient({ 
  article, 
  mdxContent 
}: { 
  article: any; 
  mdxContent?: React.ReactNode;
}) {
  // Проверяем, является ли контент объектом (TinaCMS rich-text)
  const isTinaContent = typeof article.content === 'object' && article.content !== null;

  return (
    <>
      <div className="article-content prose prose-lg">
        {isTinaContent ? (
          <TinaMarkdown components={tinaComponents} content={article.content} />
        ) : (
          mdxContent
        )}
      </div>
      <CtaBlock />
    </>
  );
}
