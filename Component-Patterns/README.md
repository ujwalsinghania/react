# React Component Patterns

This project serves as a showcase and learning resource for several advanced React Component Patterns. By utilizing these patterns, you can create highly reusable, scalable, and decoupled UI components.

Below is an overview of the patterns implemented in this repository.

---

## 1. Headless Component Pattern

**Location**: `src/Components/HeadlessUI.js`

**What it is:**
The Headless UI pattern involves separating the complex behavior and state management (the "logic") from the visual rendering (the "UI"). Instead of returning markup, a headless component or custom hook returns the _state_ and the _methods_ to manipulate that state.

**Why use it:**

- **Maximum Reusability**: You can build completely different visual interfaces (e.g., an Accordion and a Tab system) that share the exact same underlying logic.
- **Separation of Concerns**: It creates a strong boundary between "how it works" and "how it looks."

---

## 2. Render Props Pattern

**Location**: `src/Components/RenderProps.js`

**What it is:**
The Render Props pattern is a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

**Why use it:**

- **Inversion of Control**: The child component manages the state (e.g., tracking click counts, fetching data) and hands that state back to the parent to decide exactly _what_ to render.
- **Dynamic Composition**: It allows injecting entirely different UI payloads into the same wrapper logic on the fly.

---

## 3. Compound Components Pattern

**Location**: `src/Components/Compound/index.js` & `src/Components/Compound/Widgets.js`

**What it is:**
The Compound Components pattern allows multiple components to work together to accomplish a shared task. They share an implicit state (often managed via React Context or `React.cloneElement`), meaning the developer doesn't need to pass state props down to every single child manually.

**Why use it:**

- **Clean API**: It creates highly declarative components (e.g., `<Card><Card.Header /><Card.Body /></Card>`).
- **Flexibility**: Consumers of the component can omit or rearrange child components easily without breaking the parent's functionality or cluttering the parent with a massive list of configuration props.

---

## 4. Container / Presentational Pattern

**Location**: `src/Components/ContainerPresentational.js`

**What it is:**
This pattern divides components into two distinct categories:

- **Containers**: These care about _how things work_. They fetch data, manage state, and contain application logic. They rarely have their own DOM markup.
- **Presentational**: These care about _how things look_. They receive data via props and render it. They are generally stateless and unaware of the application's broader context.

**Why use it:**

- **Predictability**: It's easy to know exactly where data is fetched (the Container) and where styling is applied (the Presentational).
- **Testability**: Purely presentational components are extremely easy to test and mocked data can be passed as props.

---
