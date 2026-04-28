## Оценка и рекомендованный план

### 1) Hero image: лучше убрать или заменить

Текущее изображение в hero работает как generic cybersecurity stock: оно не мешает, но и не усиливает позиционирование SimpITy. На фоне сильного текста про undocumented Windows layer, reverse engineering, EDR/ITDR/AD/DLP/PAM оно выглядит слишком общо.

**Рекомендация:** не просто удалить, а заменить на более "engineering-native" визуал.

Лучшие варианты:

1. **Временно убрать изображение и усилить layout текстом + technical proof block**
   - Hero станет более строгим, B2B/security-engineering.
   - Справа можно поставить не картинку, а карточку с короткими bullets:
     - Kernel callbacks
     - LSASS / authentication flow
     - AD / OAuth / NHI boundaries
     - Runtime enforcement
     - Patch Tuesday resilience
   - Это быстрее и лучше соответствует бренду, чем stock image.

2. **Позже заменить на custom technical visual**
   - Не “hacker monitors”, не AI neon.
   - Лучше: dark architectural diagram / attack path / control boundary map.
   - Например: `User identity → Agent/OAuth token → Enterprise apps → SIEM sees user → data exfil path`.

**Что я бы сделал сейчас:** убрать текущую картинку из hero и заменить правую колонку на “technical capability card”. Это сохранит 50/50 композицию, но уберёт stock feeling.

---

### 2) Где размещать Modern Attack Hub / AI Agent Attack Hub

Идея хорошая: это не просто секция и не замена AI Workflow page. Это отдельный content moat / editorial platform, который будет собирать LinkedIn, PDFs, technical writeups, incidents и будущие partnerships.

**Рекомендация по архитектуре:**

```text
Главный сайт simpity.eu
├─ Home
├─ Capabilities
├─ AI Workflow Security        коммерческая service page
├─ Blog                        технические статьи
└─ AI Agent Attack Hub         content moat / threat intelligence style hub
```

То есть:

- **AI Workflow Security** оставить как service page: что продаём, кому, какой результат, CTA.
- **AI Agent Attack Hub** сделать отдельной страницей или subdomain-style entry point: контентная платформа, которая объясняет проблему и генерирует доверие.

Для MVP внутри текущего сайта я бы сделал route:

```text
/ai-agent-attack-hub
```

А позже можно повесить subdomain:

```text
attack.simpity.eu
hub.simpity.eu
aiagents.simpity.eu
```

Если нужен самый быстрый внешний MVP на Notion/Cargo — это ок как временная landing/content hub. Но если уже есть текущий сайт, я бы не уводил SEO и доверие на Notion. Лучше сделать минимальный hub прямо в React: один день работы, единый дизайн, нормальная навигация, проще потом расширять.

---

## MVP: AI Agent Attack Hub на текущем сайте

### Новая страница

**Route:** `/ai-agent-attack-hub`

**Навигация:** добавить в header рядом с AI Workflow Security. Возможный label:

```text
AI Agent Attack Hub
```

или короче:

```text
Attack Hub
```

### Структура страницы

1. **Hero**
   - Headline: `AI Agent Attack Hub`
   - Subheadline: problem-first, без маркетинга:
     `AI agents do not just answer prompts. They inherit user identity, call tools, move data, and create activity your SIEM may attribute to a legitimate employee.`
   - CTA: `Assess Your Agent Exposure` → `/contact`
   - Secondary CTA: `Explore Attack Anatomy` → anchor ниже

2. **Anatomy of an AI Agent Attack**
   Timeline формат:
   ```text
   Prompt injection
   → Agent follows external instruction
   → OAuth token / connected app is used
   → Enterprise system sees legitimate user activity
   → Data is collected or modified
   → SIEM alert lacks agent context
   ```

3. **Attack Techniques**
   6–7 категорий:
   - Prompt injection against connected agents
   - OAuth scope abuse
   - Tool / connector over-permissioning
   - Agentic data exfiltration
   - Shadow AI and unmanaged workspaces
   - Computer-use loop abuse
   - Non-human identity / service account confusion

4. **Recent Incidents / Signals**
   MVP можно сделать как curated list с cautious wording:
   - Lovable Apr 2026
   - Vercel Apr 2026
   - Cursor CVEs Q1 2026
   - NomShub Apr 2026

   Важно: перед публикацией стоит либо добавить ссылки-источники, либо формулировать как `Signals we track`, чтобы не выглядеть как непроверенная claim page.

5. **Self-Assessment**
   10 вопросов, например:
   - Do you know which agents can act through user OAuth?
   - Can your SIEM distinguish user activity from agent-mediated activity?
   - Do you inventory AI tools installed by employees?
   - Do you detect excessive OAuth scopes?
   - Do you review connected knowledge bases and file stores?
   - Do you monitor agent tool calls?
   - Do you separate human and non-human identities?
   - Can DLP see prompt and file upload paths?
   - Do you have rollback / kill-switch for unsafe agent workflows?
   - Can you prove controls for AI Act / insurer review?

   CTA at the end:
   ```text
   If you answered “no” to more than three questions, start with a Trust Audit.
   ```

6. **Pillar architecture for services**
   Add three buyer-entry pillars:

   - **Detection Modernization**
     Extending UEBA / detection baselines for agent-mediated behavior.
     Buyer: CISO / SOC / Detection Engineering.

   - **Regulatory Resilience**
     AI Act Article 26 deployer obligations, NIS2 Article 21 supply chain, DORA ICT risk controls.
     Buyer: Compliance / Risk / Legal / CISO.

   - **Identity Posture**
     OAuth scope governance, NHI inventory, computer-use loop detection.
     Buyer: IAM / Identity Security / Platform Security.

7. **Final CTA**
   `Book an AI Agent Trust Audit` or `Review One Agent Workflow`.

---

## Как связать с текущей AI Workflow Security страницей

Не переделывать её полностью в Hub.

Лучше разделить роли:

```text
AI Agent Attack Hub = education / threat model / content moat
AI Workflow Security = service / commercial offer / trust audit CTA
Homepage banner = short problem-first bridge into service
Blog = long-form technical articles
```

На `AIWorkflowSecurity.tsx` можно добавить небольшой блок:

```text
New: AI Agent Attack Hub
Explore attack anatomy, agent techniques, incidents, and a self-assessment for your stack.
```

Он будет вести на `/ai-agent-attack-hub`.

---

## План реализации после approval

### Изменения в коде

1. **HeroSection**
   - Убрать текущую stock-like image card.
   - Заменить правую колонку на technical proof / control boundary card.
   - Сохранить текущий responsive layout.

2. **Создать новую страницу** `src/pages/AIAgentAttackHub.tsx`
   - Реализовать sections: hero, anatomy timeline, techniques, incidents/signals, self-assessment, pillars, CTA.
   - Использовать существующий визуальный язык: `bg-card`, `border-border`, `text-primary`, `bg-grid`.

3. **Добавить route** в `src/App.tsx`
   - `/ai-agent-attack-hub`.

4. **Добавить navigation item** в `src/components/layout/Header.tsx`
   - Лучше рядом с `AI Workflow Security`.
   - На desktop возможно назвать коротко `Attack Hub`, чтобы header не стал перегруженным.

5. **Связать страницы**
   - На `AIWorkflowSecurity.tsx` добавить блок-ссылку на Hub.
   - В Hub CTA вести на `/contact` или `/ai-workflow-security` в зависимости от места.

6. **Опционально обновить homepage AI banner**
   - Добавить secondary text/link: `Explore AI Agent Attack Hub`.
   - Не превращать banner в hub; он должен остаться коммерческим мостиком.

### Технические детали

- Backend не нужен.
- Новых таблиц/аутентификации не требуется.
- Всё делается как static React content.
- Subdomain сейчас не настраиваем в коде. Если позже нужен `attack.simpity.eu`, это делается через настройки домена/публикации, а сама страница уже будет готова как destination.

---

## Итоговая рекомендация

**Да, hero image лучше заменить.** Сейчас он ослабляет deep engineering positioning.

**AI Agent Attack Hub лучше делать отдельной страницей, не как секцию и не вместо AI Workflow Security.** Это должен быть отдельный контентный asset, который питает LinkedIn, PDFs, technical writeups и будущие partnerships, а service page остаётся местом конверсии в Trust Audit / workflow review.