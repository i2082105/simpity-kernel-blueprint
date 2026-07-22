## Флоу регистрации

```text
Landing (/webinar/soc-already-lost)
   │  своя форма (email, name, company, role) — валидация + honeypot
   │
   ▼
Успешный сабмит → сразу редирект (window.location.href)
   │
   ▼
Google Form (ICP-квалификация)
   │  в Confirmation message формы даём ссылку на Popup
   │
   ▼
Popup event page
   https://popup.fm/3v89JYZiWPSsX639qd56/events/nQ4BqioE8wHxJpLoCvqN?formOpen=register
   → подтверждение места, join-ссылка
```

CTA-тексты
- Кнопка формы: `RESERVE MY SEAT →` (было `SECURE MY SEAT →`)
- Sticky-таймер CTA: `RESERVE MY SEAT`
- Hero и остальные кнопки: `RESERVE YOUR SEAT`
- Секция формы, заголовок над формой: **Webinar Registration: Your Security Boundary Is Not Where You Think It Is**
- Подзаголовок: `Two-step: quick ICP form, then confirm your seat on Popup. Takes ~60 seconds.`

## Что меняем

### 1. `src/components/webinar/RegistrationForm.tsx`
- Убираем `supabase.functions.invoke`, всю логику rate-limit/уже-зарегистрирован, состояния `alreadyRegistered`, `submitError`.
- После успешной валидации формы прокидываем поля в prefill Google Form через query-параметры (`entry.XXX=`) и делаем `window.location.href = <googleFormPrefilledURL>`.
- Пока нет entry-ID (нужны от пользователя), делаем базовый редирект на голый Google Form URL и оставляем в коде TODO с местом для entry-мэппинга — форма всё равно квалифицирует лида.
- Заголовок секции меняем на новый (см. выше), кнопка `RESERVE MY SEAT →`.
- Убираем импорт `supabase` и zod-схему оставляем как есть.

### 2. `src/components/webinar/HeroSection.tsx`, `StickyAttackTimer.tsx`, `BreachabilityQuiz.tsx`, `DemoHook.tsx`, `WebinarDetails.tsx`
- Меняем тексты CTA-кнопок на `RESERVE YOUR SEAT` / `RESERVE MY SEAT` (там где ведут к форме — оставляем скролл к `#register`).

### 3. Удаляем Supabase-часть регистрации
- Файл `src/pages/webinar/Registrations.tsx` — удалить.
- Роут `/webinar/registrations` из `src/App.tsx` — удалить + импорт.
- Edge-функции `supabase/functions/webinar-register/` и `supabase/functions/webinar-registrations-list/` — удалить папки.
- Миграция дропает таблицу `public.webinar_registrations`.
- Секреты `WEBINAR_ADMIN_TOKEN` и `WEBINAR_IP_SALT` — удалить.

### 4. Требуется от пользователя
- **Точный URL Google Form** (ссылка вида `https://docs.google.com/forms/d/e/…/viewform`). Без него редирект захардкодить не получится — вставлю плейсхолдер-константу `GOOGLE_FORM_URL` наверху `RegistrationForm.tsx`, попрошу заменить, либо пришлёте URL — вставлю сразу.
- В самой Google Form на шаге "Confirmation message" (Settings → Presentation) добавить текст со ссылкой на Popup: `https://popup.fm/3v89JYZiWPSsX639qd56/events/nQ4BqioE8wHxJpLoCvqN?formOpen=register` — это делается вручную в Google Forms UI, из кода не автоматизируется.

## Файлы

Изменить
- `src/components/webinar/RegistrationForm.tsx`
- `src/components/webinar/HeroSection.tsx`
- `src/components/webinar/StickyAttackTimer.tsx`
- `src/components/webinar/BreachabilityQuiz.tsx`
- `src/components/webinar/DemoHook.tsx`
- `src/components/webinar/WebinarDetails.tsx`
- `src/App.tsx`

Удалить
- `src/pages/webinar/Registrations.tsx`
- `supabase/functions/webinar-register/`
- `supabase/functions/webinar-registrations-list/`

Миграция + секреты
- `DROP TABLE public.webinar_registrations`
- delete secrets `WEBINAR_ADMIN_TOKEN`, `WEBINAR_IP_SALT`

Подтвердите план и пришлите URL Google Form — раскатываю в одном проходе.