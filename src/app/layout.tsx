import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import CallWidget from '@/components/CallWidget'
import OrderModal from '@/components/OrderModal'
import { OrderModalProvider } from '@/contexts/OrderModalContext'

export const metadata: Metadata = {
  title: 'Продвижение в Яндекс Картах и 2ГИС | SEO для карт - UPMAP',
  description: 'Продвижение бизнеса в Яндекс Картах, 2ГИС и Google Maps. Реклама на картах, управление отзывами, рост позиций в локальном поиске. Бесплатный аудит. Результат от 7 дней.',
  keywords: 'продвижение в яндекс картах, продвижение в 2гис, реклама в яндекс картах, seo для карт, продвижение на картах',
  authors: [{ name: 'UPMAP' }],
  verification: {
    yandex: '2f5eed8d0194be21',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://upmap.ru/" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body className="min-h-screen bg-white flex flex-col">
        <OrderModalProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CallWidget />
          <CookieConsent />
          <OrderModal />
        </OrderModalProvider>
      </body>
    </html>
  )
}
