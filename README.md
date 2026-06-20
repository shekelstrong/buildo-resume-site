# Buildo Резюме — Сайт

> **ATS-оптимизированное резюме на русском с AI за 5 минут**

Часть экосистемы **Buildo** (https://buildo.ru). MIT licensed. Open source.

![Buildo](https://img.shields.io/badge/Buildo-ecosystem-5B8DEF?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

---

## Что это

Маркетинговый сайт продукта Резюме. Лендинг + SEO блог + кейсы. Buildo.ru зонтик.

**Сценарий использования (Сайт):** Лендинг с шаблонами, отзывы, SEO-статьи о карьере

---

## Архитектура

```
Buildo Резюме экосистема
├── shekelstrong/buildo-resume-tg          ← этот репо (Telegram-бот)
├── shekelstrong/buildo-resume-miniapp    ← Mini App
└── shekelstrong/buildo-resume-site        ← Маркетинговый сайт
```

---

## Стек

| Слой | Технология |
|---|---|
| Bot | aiogram 3.x + Redis FSM + Docker |
| Frontend | Vite + React 19 + Tailwind + react-pdf |
| Backend | FastAPI + SQLAlchemy Async + MiniMax M3 + ЮKassa |
| AI (image) | не используется |
| AI (text) | MiniMax M3 (генерация + ATS-анализ) |
| Deploy | Layero / Vercel (manual deploy by user) |

---

## Монетизация

490 ₽ за резюме / 990 ₽ за пакет (резюме + сопровод + LinkedIn)

**Целевая аудитория:** Соискатели, фрилансеры, выпускники
**Конкуренты (РФ):** hh.ru, SuperJob, Canva (шаблоны), TealHQ (не в РФ)

---

## Деплой

```bash
cp .env.example .env
# заполни: TELEGRAM_BOT_TOKEN, OPENROUTER_API_KEY, YOOKASSA_*
docker compose up --build
```

Продакшен:
```bash
git push origin main  # GitHub Actions → SSH → VPS → docker compose up -d --build
```

---

## Связанные репо

- [buildo-resume-tg](https://github.com/shekelstrong/buildo-resume-tg) — этот репо
- [buildo-resume-miniapp](https://github.com/shekelstrong/buildo-resume-miniapp)
- [buildo-resume-site](https://github.com/shekelstrong/buildo-resume-site)
- [nemo-team-docs/projects/buildo/resume/](https://github.com/shekelstrong/nemo-team-docs/tree/main/projects/buildo/resume) — спецификация

---

## License

MIT (c) 2026 Buildo Ecosystem. Inspired by [awesome-generative-ai-apps](https://github.com/Anil-matcha/awesome-generative-ai-apps).