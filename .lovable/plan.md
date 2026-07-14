## План: рабочая регистрация на вебинар

Форма уже есть, но POST-ит в несуществующий `/api/webinar-register`. Заменим на реальное сохранение в Lovable Cloud.

### 1. Таблица `webinar_registrations`

Миграция создаёт таблицу с полями: `email`, `name`, `company`, `role`, `webinar_slug` (по умолчанию `soc-already-lost`), `user_agent`, `referrer`, `ip_hash` (для rate-limit без хранения IP в открытом виде), стандартные `id`/`created_at`.

- Уникальный индекс на `(email, webinar_slug)` — один email не регистрируется дважды на один вебинар.
- RLS включён.
- Политики:
  - `INSERT` разрешён `anon` и `authenticated` (форма публичная).
  - `SELECT/UPDATE/DELETE` — только `service_role` (данные не видны из браузера; их читаем через edge-функцию с сервис-ключом).
- GRANT: `INSERT` для `anon` и `authenticated`, `ALL` для `service_role`.

### 2. Edge-функция `webinar-register`

`supabase/functions/webinar-register/index.ts`, `verify_jwt = false`, CORS включён.

Логика:
1. Валидация Zod: email, name (1-100), company/role (≤100), honeypot `website` пустой, `webinar_slug`.
2. Rate-limit: SHA-256 от IP (из `x-forwarded-for`) + соль. Отклоняем, если с этого хэша >5 регистраций за час.
3. Вставка через service-role client. При конфликте по unique-индексу возвращаем 200 с `already_registered: true` (не палим существование email, но и не создаём дубли).
4. Ответ `{ ok: true }`; при ошибке валидации — 400 с полями.

Писем не шлём (по вашему выбору). Позже легко подключить — оставлю TODO-хук.

### 3. Обновление `RegistrationForm.tsx`

- Заменить `fetch("/api/webinar-register", …)` на `supabase.functions.invoke("webinar-register", { body })`.
- Обработать ошибки сети/валидации — показывать инлайн ошибку в том же брутальном стиле.
- Confirmation-state оставить как есть.

### 4. Мини-админка `/webinar/registrations`

Приватная страница, скрытая от навигации. Читает список регистраций через отдельную edge-функцию `webinar-registrations-list` (service-role), защищённую простым секретом `WEBINAR_ADMIN_TOKEN` — токен вводится один раз, хранится в `localStorage`. Показывает таблицу: время, email, имя, компания, роль. Кнопка «Export CSV».

Причина такого решения: у вас на сайте пока нет системы ролей/логина, поднимать полноценный auth ради одной страницы — избыточно. Токен-защита достаточна для скрытого URL со списком лидов. Если позже добавите auth — заменим на проверку роли.

Секрет `WEBINAR_ADMIN_TOKEN` сгенерирую автоматически, покажу вам значение один раз при подтверждении.

### 5. Уведомления вам на i.lapsha@simpity.eu

Пока писем не шлём — договорились. Но в edge-функции добавлю `// TODO: notify i.lapsha@simpity.eu` в правильном месте, чтобы позже одной командой включить (нужен будет email-домен через Lovable Cloud → займёт отдельный шаг с DNS).

### Файлы

**Миграция:** создание таблицы + GRANT + RLS + политики.

**Новые:**
- `supabase/functions/webinar-register/index.ts`
- `supabase/functions/webinar-registrations-list/index.ts`
- `src/pages/webinar/Registrations.tsx` (админ-таблица)

**Изменения:**
- `src/components/webinar/RegistrationForm.tsx` — вызов edge-функции.
- `src/App.tsx` — маршрут `/webinar/registrations`.

### Вне scope
- Email-подтверждения регистранту — по вашему выбору отложено.
- Настройка email-домена simpity.eu — отдельная задача (нужен доступ к DNS).
- Интеграция с Instantly/CRM — не требовалась.

### Порядок исполнения
1. Миграция (потребует вашего подтверждения).
2. После apply — edge-функции + фронт + админка одним заходом.
