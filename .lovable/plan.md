План реализации частями

Часть 1 — Homepage: AI-блок и buyer-entry pillars
- Переделать вторую секцию `AISecurityBanner` так, чтобы она не дублировала Attack Hub как отдельный «новый хаб», а использовала его как proof/content layer внутри AI Workflow Security.
- Заменить текущие generic карточки `EU AI Act Compliant / Audit-Ready / Insurable` на три входа для разных покупателей:
  - Detection Modernization — CISO/SOC: UEBA baselines for agent behavior, computer-use loop detection, agentic anomaly patterns.
  - Regulatory Resilience — Compliance/Legal: EU AI Act Article 26, NIS2 Article 21, DORA ICT risk, audit evidence.
  - Identity Posture — IAM Lead: OAuth scope governance, NHI inventory, over-permissioned agents.
- Исправить `Claw` на `Claude`.
- CTA сделать более productized: primary `Start AI Workflow Security Review`, secondary `Explore Attack Hub`.

Часть 2 — Header navigation cleanup
- Уменьшить перегрузку верхнего меню.
- Сгруппировать AI-направления в один dropdown `AI Security`:
  - AI Workflow Security
  - AI Agent Attack Hub
- Оставить верхний уровень более чистым: `AI Security`, `Capabilities`, `Methodology`, `Case Studies`, `Technology`, `Engagement`, `About`, `Blog`.
- Проверить mobile accordion, чтобы новый dropdown работал так же, как Capabilities/About.

Часть 3 — AI Workflow Security page: productize the offer
- Усилить страницу вокруг конкретного engagement, а не общего описания.
- Добавить/переписать блок `What you get` с deliverables:
  - AI workflow risk map
  - Sensitive data path review
  - OAuth / NHI exposure map
  - Control gap list and remediation backlog
  - Computer-use loop abuse scenarios
  - Audit-ready evidence pack
- Добавить EU-regulatory framing: AI Act Article 26, NIS2 Article 21, DORA ICT third-party / operational resilience, GDPR data exposure.
- Добавить cross-link на Attack Hub как content proof: “Use the Attack Hub to understand the threat model; use the Review to harden one real workflow.”

Часть 4 — Hero and first impression refinement
- Сохранить текущий technical proof card вместо stock/abstract hero image, потому что он лучше поддерживает credibility для CISO/technical buyer.
- Немного усилить правую карточку под текущую AI + Windows positioning:
  - Windows instrumentation
  - identity/OAuth/NHI boundaries
  - behavior detection baselines
  - audit-ready control points
- Не менять визуальную основу: dark theme, cyan/teal, clean technical style.

Часть 5 — Footer alignment
- Footer уже получил AI links, но можно сделать его структурно чище:
  - оставить `AI Workflow Security` и `AI Agent Attack Hub` в Navigation;
  - при необходимости переименовать CTA footer с generic `Discuss Your Security Engineering Challenge` на более конкретный вариант: `Discuss a Security Engineering or AI Workflow Challenge`.

Технические детали
- Основные файлы для изменения:
  - `src/components/home/AISecurityBanner.tsx`
  - `src/components/layout/Header.tsx`
  - `src/pages/AIWorkflowSecurity.tsx`
  - `src/components/home/HeroSection.tsx`
  - опционально `src/components/layout/Footer.tsx`
- Бэкенд и база данных не требуются.
- Изменения будут только в React/Tailwind компонентах и текстах.
- Реализовать лучше в указанном порядке: сначала homepage + nav, затем AI Workflow page, затем hero/footer polish.