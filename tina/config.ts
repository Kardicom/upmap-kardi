import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",  // Картинки в public/ (пустая строка = корень)
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "article",
        label: "Статьи блога",
        path: "src/content/articles",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Заголовок",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Описание",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Дата публикации",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Автор",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Категория",
            required: true,
            options: ["Отзывы", "SEO", "Продвижение", "Аналитика", "Новости", "Кейсы"],
          },
          {
            type: "string",
            name: "keywords",
            label: "Ключевые слова (через запятую)",
            required: true,
            list: true,
          },
          {
            type: "image",
            name: "coverImage",
            label: "Обложка статьи",
            required: false,
          },
          {
            type: "string",
            name: "faqSchema",
            label: "FAQ схема (JSON-LD)",
            description: "Вставьте JSON-LD без или с тегом <script>. Будет автоматически добавлен в <head>.",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Содержимое статьи",
            isBody: true,
            templates: [
              {
                name: "ChecklistBlock",
                label: "🔲 Чёрный блок с галочками",
                fields: [
                  {
                    name: "children",
                    label: "Содержимое",
                    type: "rich-text",
                  },
                ],
              },
              {
                name: "InfoBox",
                label: "ℹ️ Информация (синий)",
                fields: [
                  {
                    name: "title",
                    label: "Заголовок (опционально)",
                    type: "string",
                  },
                  {
                    name: "children",
                    label: "Текст",
                    type: "rich-text",
                  },
                ],
              },
              {
                name: "WarningBox",
                label: "⚠️ Предупреждение (жёлтый)",
                fields: [
                  {
                    name: "title",
                    label: "Заголовок (опционально)",
                    type: "string",
                  },
                  {
                    name: "children",
                    label: "Текст",
                    type: "rich-text",
                  },
                ],
              },
              {
                name: "SuccessBox",
                label: "✓ Успех (зелёный)",
                fields: [
                  {
                    name: "title",
                    label: "Заголовок (опционально)",
                    type: "string",
                  },
                  {
                    name: "children",
                    label: "Текст",
                    type: "rich-text",
                  },
                ],
              },
              {
                name: "TipBox",
                label: "💡 Совет (фиолетовый)",
                fields: [
                  {
                    name: "children",
                    label: "Текст совета",
                    type: "rich-text",
                  },
                ],
              },
              {
                name: "QuoteBox",
                label: "💬 Цитата с автором",
                fields: [
                  {
                    name: "children",
                    label: "Текст цитаты",
                    type: "rich-text",
                  },
                  {
                    name: "author",
                    label: "Автор (опционально)",
                    type: "string",
                  },
                ],
              },
              {
                name: "HighlightText",
                label: "✨ Выделить текст (жёлтый маркер)",
                inline: true,
                fields: [
                  {
                    name: "children",
                    label: "Текст",
                    type: "rich-text",
                  },
                ],
              },
              {
                name: "ButtonLink",
                label: "🔗 Кнопка-ссылка",
                fields: [
                  {
                    name: "href",
                    label: "URL",
                    type: "string",
                    required: true,
                  },
                  {
                    name: "children",
                    label: "Текст кнопки",
                    type: "string",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
        ui: {
          router: ({ document }: { document: any }) => `/blog-prodvizhenie-karty-seo/${document._sys.filename}`,
        },
      },
    ],
  },
});
