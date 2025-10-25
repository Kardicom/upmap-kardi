'use client';

export default function TermsOfServicePage() {
  return (
    <div className="pt-20">
      <section className="py-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Условия использования</h1>
            <p className="text-xl text-blue-100">
              Пользовательское соглашение для работы с сайтом UPMAP
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4" style={{ maxWidth: '1440px' }}>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                <strong>Дата последней редакции:</strong> 25.08.2025
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Общие положения</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Настоящие Условия использования (далее — «Условия») регулируют отношения между <b>ИП Карамов Дамир Ильдарович</b> (далее — Администрация) и любым лицом, использующим сайт <b>https://upmap.ru</b>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Используя Сайт или заказывая услуги по локальному продвижению бизнеса, вы (далее — Пользователь) соглашаетесь с настоящими Условиями. Если вы не согласны с какими-либо положениями, просим не использовать наш Сайт.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Описание услуг</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Сайт предоставляет пользователям возможность отправлять заявки для получения консультаций, обратной связи или интеграции продуктов партнёров по вопросам локального продвижения бизнеса (Яндекс.Карты, 2ГИС, отзывы, SEO и др.). Сайт не предоставляет услуги по регистрации, личному кабинету или хранению пользовательских данных.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Права и обязанности пользователя</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4">
                <li>Пользователь обязуется предоставлять достоверную информацию при заполнении форм.</li>
                <li>Пользователь не вправе использовать Сайт для рассылки спама, размещения недостоверной информации, нарушающей законодательство РФ.</li>
                <li>Пользователь соглашается с обработкой персональных данных согласно <a href="/privacy-policy" className="text-blue-600 underline">Политике конфиденциальности</a>.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Права и обязанности Администрации</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4">
                <li>Администрация вправе изменять содержание Сайта, приостанавливать или прекращать его работу без предварительного уведомления.</li>
                <li>Администрация не несёт ответственности за возможные перебои в работе Сайта, утрату данных или иной ущерб, возникший у пользователя при использовании Сайта.</li>
                <li>Администрация не проверяет достоверность предоставляемых пользователями данных.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Интеллектуальная собственность</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4">
                <li>Все права на тексты, изображения, дизайн, программный код и иные объекты, размещённые на Сайте, принадлежат Администрации либо используются на законных основаниях.</li>
                <li>Копирование, распространение и иное использование материалов Сайта допускается только с разрешения Администрации.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Ограничение ответственности</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4">
                <li>Сайт предоставляется «как есть», без гарантий работоспособности, точности, полноты информации.</li>
                <li>Администрация не несёт ответственности за действия третьих лиц, а также за содержание сайтов, на которые могут вести ссылки с Сайта.</li>
                <li>Администрация не несёт ответственности за изменения алгоритмов картографических сервисов, технические сбои на стороне третьих лиц, действия конкурентов пользователя, упущенную выгоду пользователя.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Максимальная ответственность Администрации ограничивается суммой, уплаченной пользователем за конкретную услугу (если применимо). Результаты продвижения зависят от множества факторов и не могут быть гарантированы на 100%.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Порядок разрешения споров</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4">
                <li>Все споры и разногласия, возникающие в связи с использованием Сайта, подлежат разрешению в соответствии с законодательством Российской Федерации по месту нахождения Администрации.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Изменение условий</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4">
                <li>Администрация вправе в любое время изменять настоящие Условия. Новая редакция вступает в силу с момента публикации на Сайте.</li>
                <li>Пользователь обязан самостоятельно следить за изменениями Условий. Продолжение использования Сайта означает согласие с новой редакцией.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Контактная информация</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4">
                <li>По всем вопросам, связанным с использованием Сайта, обращайтесь по email: <a href="mailto:upmaps@mail.ru">upmaps@mail.ru</a>.</li>
              </ul>
              <div className="mt-8 text-gray-500 text-sm">https://upmap.ru, 25.08.2025</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
