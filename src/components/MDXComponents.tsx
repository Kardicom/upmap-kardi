// Кастомные компоненты для MDX файлов
export const ChecklistBlock = ({ children }: any) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-xl my-8 shadow-xl">
    {children}
  </div>
);

export const InfoBox = ({ children, title }: any) => (
  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
    {title && <h4 className="text-blue-900 font-bold mb-2">{title}</h4>}
    <div className="text-blue-800">{children}</div>
  </div>
);

export const WarningBox = ({ children, title }: any) => (
  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-6">
    {title && <h4 className="text-yellow-900 font-bold mb-2">⚠️ {title}</h4>}
    <div className="text-yellow-800">{children}</div>
  </div>
);

export const SuccessBox = ({ children, title }: any) => (
  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-6">
    {title && <h4 className="text-green-900 font-bold mb-2">✓ {title}</h4>}
    <div className="text-green-800">{children}</div>
  </div>
);

export const TipBox = ({ children }: any) => (
  <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg my-6 relative">
    <div className="absolute -top-3 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
      💡 Совет
    </div>
    <div className="text-purple-900 mt-2">{children}</div>
  </div>
);

export const QuoteBox = ({ children, author }: any) => (
  <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg my-6 italic">
    <div className="text-gray-700 text-lg">{children}</div>
    {author && <div className="text-gray-500 text-sm mt-3">— {author}</div>}
  </div>
);

export const HighlightText = ({ children }: any) => (
  <span className="bg-yellow-200 px-2 py-1 rounded">{children}</span>
);

export const ButtonLink = ({ href, children }: any) => (
  <a 
    href={href} 
    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors my-4 shadow-md"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children} →
  </a>
);
