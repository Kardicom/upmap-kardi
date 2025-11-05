'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <p className="text-sm font-semibold text-red-600 uppercase tracking-wide">Произошла ошибка</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
          Что-то пошло не так
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Попробуйте обновить страницу или вернитесь на главную.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-600 text-white font-semibold shadow-sm hover:bg-slate-700 transition"
          >
            Попробовать снова
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition"
          >
            На главную
          </Link>
        </div>
      </div>
    </section>
  )
}
