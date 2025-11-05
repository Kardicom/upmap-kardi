export const richTextTemplates: any = [
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
  {
    name: "ImageRow",
    label: "🖼️ Галерея в ряд",
    fields: [
      {
        name: "columns",
        label: "Кол-во колонок (desktop)",
        type: "string",
        options: [
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ],
      },
      {
        name: "images",
        label: "Изображения",
        type: "object",
        list: true,
        required: true,
        fields: [
          {
            name: "src",
            label: "Файл",
            type: "image",
            required: true,
          },
          {
            name: "alt",
            label: "Alt-текст",
            type: "string",
            required: true,
          },
          {
            name: "caption",
            label: "Подпись (опционально)",
            type: "string",
          },
        ],
      },
    ],
  },
];
