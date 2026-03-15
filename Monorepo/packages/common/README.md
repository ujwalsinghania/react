# @local/common

Shared component and utility library used across all apps in this monorepo. Built with React, TypeScript, and Tailwind CSS.

---

## Installation

Already available in this workspace via the path alias — no install needed:

```ts
import { TextInput, Card } from '@local/common/components'
import { cn, slugify } from '@local/common/utils'
```

---

## Components

### `TextInput`

A labelled text input with optional error state. Forwards refs and accepts all standard `<input>` attributes.

```tsx
import { TextInput } from '@local/common/components'

<TextInput
  label="Email"
  placeholder="you@example.com"
  error="Invalid email address"
  required
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Label shown above the input |
| `error` | `string` | Error message shown below; turns the border red |
| `containerClassName` | `string` | Class applied to the outer wrapper div |
| `...rest` | `InputHTMLAttributes` | All standard input props (`type`, `value`, `onChange`, etc.) |

---

### `Checkbox`

A checkbox with an accessible label. Forwards refs and accepts all standard checkbox attributes except `type` (always `checkbox`).

```tsx
import { Checkbox } from '@local/common/components'

<Checkbox
  label="Available immediately"
  checked={available}
  onChange={(e) => setAvailable(e.target.checked)}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Required. Text shown next to the checkbox |
| `...rest` | `InputHTMLAttributes` | `checked`, `onChange`, `disabled`, etc. |

---

### `Card`

A container with a white background, rounded corners, and subtle shadow. Adding an `onClick` enables hover effects automatically.

```tsx
import { Card } from '@local/common/components'

<Card onClick={() => navigate('/detail')}>
  <p>Content goes here</p>
</Card>
```

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Required. Content rendered inside the card |
| `onClick` | `() => void` | Makes the card interactive — adds hover shadow and pointer cursor |
| `className` | `string` | Extra classes merged onto the card |

---

### `Pagination`

Page navigation with prev/next buttons and numbered page buttons. Disables boundary buttons automatically.

```tsx
import { Pagination } from '@local/common/components'

<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={(page) => setCurrentPage(page)}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `currentPage` | `number` | The active page (1-indexed) |
| `totalPages` | `number` | Total number of pages |
| `onPageChange` | `(page: number) => void` | Called when a page button is clicked |
| `className` | `string` | Extra classes on the wrapper div |

---

### `Popover`

A floating panel that opens on click and closes when clicking outside. Used for dropdown menus.

```tsx
import { Popover } from '@local/common/components'

<Popover
  trigger={<button>Open menu</button>}
  content={<div>Menu items here</div>}
  align="right"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `ReactNode` | — | The element that toggles the popover |
| `content` | `ReactNode` | — | Content rendered inside the floating panel |
| `align` | `'left' \| 'right'` | `'right'` | Which edge the panel aligns to |

---

## Utilities

### `cn(...classes)`

Merges Tailwind class names and resolves conflicts. Uses `clsx` for conditionals and `tailwind-merge` to handle overrides (e.g. two `text-*` classes — last one wins).

```ts
import { cn } from '@local/common/utils'

cn('px-4 py-2', isActive && 'bg-blue-500', 'bg-red-500')
// → 'px-4 py-2 bg-red-500'  (bg-blue-500 overridden)
```

---

### `titleCase(str)`

Capitalises the first letter of each word.

```ts
titleCase('new york, usa')  // → 'New York, Usa'
```

---

### `slugify(str)`

Converts a string to a URL-safe slug.

```ts
slugify('Sunset Villa!')  // → 'sunset-villa'
slugify('New York, USA')  // → 'new-york-usa'
```

---

### `formatDate(date)`

Formats a `Date`, timestamp, or date string to a short readable format using `en-US` locale.

```ts
formatDate(new Date('2026-03-15'))  // → 'Mar 15, 2026'
formatDate('2026-11-02')            // → 'Nov 2, 2026'
```

---

### `unique(arr)`

Removes duplicate values from an array.

```ts
unique([1, 2, 2, 3])       // → [1, 2, 3]
unique(['a', 'b', 'a'])    // → ['a', 'b']
```

---

### `chunk(arr, size)`

Splits an array into chunks of a given size.

```ts
chunk([1, 2, 3, 4, 5], 2)  // → [[1, 2], [3, 4], [5]]
```

---

## File Structure

```
packages/common/
├── src/
│   ├── index.ts                  # Re-exports everything
│   └── lib/
│       ├── components/
│       │   ├── TextInput.tsx
│       │   ├── Checkbox.tsx
│       │   ├── Card.tsx
│       │   ├── Pagination.tsx
│       │   ├── Popover.tsx
│       │   └── index.ts
│       └── utils/
│           ├── cn.ts
│           ├── string.ts
│           ├── date.ts
│           ├── array.ts
│           └── index.ts
└── package.json
```
