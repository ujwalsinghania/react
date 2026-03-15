# packages/

This folder contains shared libraries used across the apps in this monorepo. Any code that more than one app needs — components, utilities, types — lives here instead of being duplicated.

---

## `common` (`@local/common`)

The main shared library. Both apps import from it using the `@local/common` path alias.

### Components

| Component | What it does |
|-----------|-------------|
| `TextInput` | Labelled text field with optional error message and accessible markup |
| `Checkbox` | Checkbox with label, accessible via `htmlFor` |
| `Card` | Container with optional `onClick` and hover styling |
| `Pagination` | Page navigation — takes `currentPage`, `totalPages`, and `onPageChange` |
| `Popover` | Floating panel that closes on outside click — used for dropdown menus |

Import:
```ts
import { TextInput, Card, Pagination } from '@local/common/components'
```

### Utilities

| Utility | What it does |
|---------|-------------|
| `cn` | Merges Tailwind class names, resolves conflicts (clsx + tailwind-merge) |
| `titleCase` | `"hello world"` → `"Hello World"` |
| `slugify` | `"Hello World"` → `"hello-world"` |
| `formatDate` | Formats a `Date` object to a readable string |
| `unique` | Removes duplicates from an array |
| `chunk` | Splits an array into fixed-size chunks |

Import:
```ts
import { cn, slugify, titleCase } from '@local/common/utils'
```

### Build output

When built, `common` compiles to `packages/common/dist/`. The apps import from this compiled output. Nx ensures `common` is always built before any app that depends on it — you never need to trigger this manually.

```sh
# Build common on its own
npx nx build common
```
