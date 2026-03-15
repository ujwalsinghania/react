# apps/

This folder contains the two React applications in this monorepo. Each app is independently runnable and deployable, but they share components and utilities from `packages/common`.

---

## `hotel-exploration`

An Airbnb-style hotel browsing app. Users can search listings, paginate results, and view a full detail page with a booking widget.

**Key pages:**
- `/` — Grid of hotel cards with a search bar and pagination
- `/hotel/:id` — Detail view with hero image, description, and sticky booking panel

**Runs on:** `http://localhost:4200` (default)

```sh
npx nx serve hotel-exploration
```

---

## `admin-dashboard`

An owner portal for creating and managing property listings. Demonstrates form handling with shared input components.

**Key pages:**
- Login page — email/password form
- Dashboard — create a new property listing (name, location, price, availability)

**Runs on:** `http://localhost:4201` (default)

```sh
npx nx serve admin-dashboard
```

---

Both apps are built with **Vite** and use **React Router** (hotel-exploration) for client-side navigation. See the [root README](../README.md) for how the full build pipeline works.
