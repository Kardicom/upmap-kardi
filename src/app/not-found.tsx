import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Страница не найдена | UPMAP',
  description: 'Страница не найдена. Проверьте адрес или вернитесь на главную страницу UPMAP.',
}

export default function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Ошибка 404</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
          Страница не найдена
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Мы не нашли страницу, которую вы ищете. Возможно, она была перемещена или удалена.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </section>
  )
}
