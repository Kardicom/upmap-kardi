import { defineConfig } from "tinacms";
import { richTextTemplates } from "./richTextConfig";

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
            templates: richTextTemplates,
          },
        ],
        ui: {
          router: ({ document }: { document: any }) => `/blog-prodvizhenie-karty-seo/${document._sys.filename}`,
        },
      },
    ],
  },
});
