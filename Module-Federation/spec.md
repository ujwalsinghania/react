# NX Module Federation — Ecommerce Platform Spec

## Overview

An NX monorepo using Module Federation to build a federated ecommerce platform.
Three independently deployable apps share auth, UI components, and utilities via a shared packages layer.
A top-level **host** app (built with Rspack) serves as the entry point — it renders a landing page and provides navigation links to the Admin and Insights dashboards, which run as separate remotes.

---

## Workspace Structure

```
root/
├── apps/
│   ├── host/           # Rspack host shell: landing page + navigation to remotes
│   ├── admin/          # Remote: product management dashboard
│   └── insights/       # Remote: cross-feature analytics dashboard
├── packages/
│   ├── ui/             # Shared Tailwind-based component library
│   └── utils/          # Shared utility helpers
└── version.config.ts   # Central app version registry
```

---

## Tech Stack

- **NX** workspace with `@nx/react` and `@nx/rspack` plugins
- **Module Federation** via `@nx/react/module-federation`
- **Rspack** for all apps (`host`, `admin`, `insights`) — faster builds, MF 2.0 compatible
- **React 18+**, TypeScript
- **Tailwind CSS** (shared config via `packages/ui/tailwind.config.ts`)
- **React Router v6** for in-app routing
- **React Hook Form** + **Yup** for form state and validation (admin features)

---

## Apps

### 1. `apps/host`

The top-level Rspack shell. Owns auth and the landing page. Its responsibilities are:
- Implement auth (login page, `AuthProvider`, token management, route guards)
- Render a landing page (hero, platform description, CTA cards) — accessible only after login
- Expose `AuthProvider` as a federated module so remotes can consume a single auth instance
- Bootstrap shared singletons (`react`, `react-router-dom`) so remotes don't ship duplicates

```
apps/host/
├── src/
│   ├── main.tsx              # Rspack entry
│   ├── App.tsx               # Router root — wraps everything in <AuthProvider>
│   ├── features/
│   │   └── auth/
│   │       ├── screens/
│   │       │   └── LoginScreen.tsx
│   │       ├── components/
│   │       │   └── RequireAuth.tsx     # Route guard
│   │       ├── hooks/
│   │       │   └── useAuth.ts          # Hook consumed by host and remotes
│   │       ├── types/
│   │       │   └── auth.types.ts
│   │       ├── api/
│   │       │   └── auth.api.ts         # login/logout/refresh calls
│   │       └── AuthProvider.tsx        # Context + token management (exposed via MF)
│   ├── pages/
│   │   └── LandingPage.tsx        # Hero + nav cards to Admin & Insights (protected)
│   └── components/
│       └── NavCard.tsx            # Reusable card linking to a remote dashboard
├── module-federation.config.ts    # Exposes AuthProvider; declares admin & insights as remotes
└── rspack.config.ts
```

**Routing:**

| Path | Behaviour |
|------|-----------|
| `/login` | `LoginPage` — public |
| `/` | `LandingPage` — protected via `<RequireAuth>` |
| `/admin/*` | Lazy-loads `admin` remote shell — protected |
| `/insights/*` | Lazy-loads `insights` remote shell — protected |

Unauthenticated requests to any protected route redirect to `/login`.

---

### 2. `apps/admin`

Remote app (Rspack) consumed by `host`. Also acts as an internal host for its own feature modules (products).

**Features (each independently bundled):**

Each feature follows a consistent internal folder structure:

```
src/features/<name>/
├── screens/       # Route-level screen components
├── components/    # Feature-local UI components
├── hooks/         # Feature-specific custom hooks
├── types/         # Feature-specific TypeScript types & interfaces
└── api/           # Feature-specific API calls & data fetching
```

Common definitions and helpers shared across features live at the app's top level:

```
apps/admin/src/
├── utils/         # App-wide helpers (e.g. apiClient, errorHandler)
├── types/         # App-wide types (e.g. ApiResponse, PaginatedResult)
├── constants/     # App-wide constants (e.g. API_BASE_URL, PAGE_SIZE)
├── styles/        # App-wide styles / Tailwind base overrides
└── features/
    └── products/
```

---

#### `products` feature

Pages:
- **`ProductList`** — paginated table of all products with status badges and action buttons (edit, delete)
- **`ProductCreate`** — form to create a new product; validated with Yup + React Hook Form

```
apps/admin/src/features/products/
├── screens/
│   ├── ProductList.tsx
│   └── ProductCreate.tsx
├── components/
│   ├── ProductTable.tsx       # columns: name, SKU, price, category, status
│   ├── ProductForm.tsx        # RHF form wired to Yup schema
│   └── ProductStatusBadge.tsx
├── hooks/
│   └── useProducts.ts         # data fetching, form submission, etc.
├── types/
│   └── product.types.ts       # Product, ProductForm, ProductStatus, etc.
└── api/
    └── products.api.ts        # CRUD calls, Yup schema, payload builders
```

**Product form fields:** name, SKU, price, category (select), stock quantity, description, status (draft/published)

---

### 3. `apps/insights`

Remote app (Rspack) consumed by `host`. Standalone analytics dashboard with per-domain widget groups.

The same top-level / feature-level split applies to `insights`:

```
apps/insights/src/
├── utils/         # App-wide helpers (e.g. chartHelpers, apiClient)
├── types/         # App-wide types (e.g. DateRange, ApiResponse)
├── constants/     # App-wide constants (e.g. DATE_RANGE_OPTIONS, CHART_COLORS)
├── styles/        # App-wide styles / Tailwind base overrides
└── features/
    └── productMetrics/
```

Each insights feature follows the same structure:

```
src/features/<name>/
├── screens/
├── components/
├── hooks/
├── types/
└── api/
```

**Features:**

#### `productMetrics` feature

Widgets on `ProductMetricsDashboard`:

| Widget | Description |
|--------|-------------|
| **Product Views** | Line chart — daily views per product over a rolling 30-day window |
| **Cart Adds** | Bar chart — how often each product was added to cart |
| **Cart Click-throughs** | Metric card — cart icon clicks → cart page conversions |
| **Top Products** | Ranked list — top 5 products by views or revenue |

```
apps/insights/src/features/productMetrics/
├── screens/
│   └── ProductMetricsDashboard.tsx
├── components/
│   ├── ProductViewsChart.tsx
│   ├── CartAddsChart.tsx
│   ├── CartClickThroughCard.tsx
│   └── TopProductsList.tsx
├── hooks/
│   └── useProductMetrics.ts      # data fetching, date range state, etc.
├── types/
│   └── productMetrics.types.ts   # ProductMetric, ChartDataPoint, etc.
└── api/
    └── productMetrics.api.ts     # metrics endpoint calls
```

---

## Packages

### `packages/ui`
Shared Tailwind component library consumed by both apps.

```
packages/ui/src/
├── components/     # Button, Card, Input, Table, Badge, etc.
├── index.ts
└── tailwind.config.ts   # base config — apps extend this
```

### `packages/utils`
Pure utility functions and shared logic.

```
packages/utils/src/
├── formatters.ts
├── validators.ts
└── index.ts
```

### `packages/mocks`
All mock data used across apps during development. Never imported in production code paths.

```
packages/mocks/src/
├── auth.mocks.ts      # MOCK_USERS
├── products.mocks.ts  # MOCK_PRODUCTS
└── index.ts
```

---

## Shared Auth

Auth lives entirely in `host` and is exposed as a federated module consumed by both remotes. There is a single `AuthProvider` instance running in the host — remotes never instantiate their own.

```
apps/host/src/features/auth/
├── screens/
│   └── LoginScreen.tsx
├── components/
│   └── RequireAuth.tsx         # Route guard used in host router
├── hooks/
│   └── useAuth.ts              # Hook consumed by host and remotes via MF
├── types/
│   └── auth.types.ts
├── api/
│   └── auth.api.ts             # login / logout / token refresh calls
└── AuthProvider.tsx             # Context + token management (the single source of truth)
```

- The host router wraps all protected routes in `<RequireAuth>`
- Remotes import `useAuth` from `host/AuthProvider` to read auth state — they never render their own login UI
- Token storage (e.g. `localStorage` / `sessionStorage`) is managed exclusively by `AuthProvider` in host

---

## Import Grouping Convention

Within every file, imports are ordered and grouped with section comments:

```ts
// react
import React from 'react'

// third-party
import { useForm } from 'react-hook-form'

// packages
import { Button } from '@repo/ui'
import { formatDate } from '@repo/utils'

// feature — api / hooks / types (same feature)
import { fetchProducts } from './api/products.api'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product.types'

// components (local)
import { ProductForm } from './components/ProductForm'
```

This grouping is enforced via ESLint `import/order` with custom path groups.

---

## Versioning

Each app's deployed version is controlled from a single config file.

```ts
// version.config.ts  (workspace root)
export const versions = {
  host: '1.0.0',
  admin: '1.0.0',
  insights: '1.0.0',
} as const
```

- Version is injected at build time via `DefinePlugin` / `vite.define`
- Exposed in each app as `__APP_VERSION__` global
- Optionally rendered in the UI footer or `<meta>` tag
- Bump versions here before each deployment; no app code changes required

---

## Module Federation Wiring

`host` (Rspack) exposes:
- `./AuthProvider` — single auth context consumed by all remotes

`host` (Rspack) consumes:
- `admin/AdminShell` — renders the full admin app under `/admin/*`
- `insights/InsightsShell` — renders the full insights app under `/insights/*`

`admin` (Rspack) exposes:
- `./AdminShell` — top-level routed shell for the admin dashboard
- `./products/ProductList`
- `./products/ProductCreate`

`admin` also consumes:
- `host/AuthProvider`

`insights` (Rspack) exposes:
- `./InsightsShell` — top-level routed shell for the insights dashboard
- `./productMetrics/ProductMetricsDashboard`

`insights` also consumes:
- `host/AuthProvider`

Shared singletons (declared in `shared` config of each MF config):
- `react`, `react-dom`, `react-router-dom`

---

## NX Project Tags (for boundary enforcement)

```
host:      tag: scope:host
admin:     tag: scope:admin
insights:  tag: scope:insights
packages/ui:    tag: scope:shared, type:ui
packages/utils: tag: scope:shared, type:utils
```

`.eslintrc` enforces that `scope:shared` libs cannot import `scope:admin` or `scope:insights`.

---

## Verification

After implementation:
1. `nx serve host`, `nx serve admin`, and `nx serve insights` all start on separate ports
2. Navigating to `host` (`localhost:4200`) shows the landing page with cards linking to Admin and Insights
3. Clicking a card lazy-loads the corresponding remote shell within the host router
4. Auth flow works across all apps (login on admin, insights respects the session)
5. Product List renders with table; Product Create form validates via Yup (required fields, length limits) and submits correctly
6. Insights Product Metrics dashboard renders all 4 widgets (views chart, cart adds, click-through card, top products)
7. `version.config.ts` bump reflects in all three apps at runtime without touching app source
8. ESLint `import/order` passes cleanly across all features
