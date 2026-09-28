# 🚀 Dev Stack

**Dev Stack** is a simple web app where developers can explore different technologies (frontend, backend, database, language, styling, and DevOps tools) and put together their own ideal development stack. Users can browse technology cards, see details like rating and difficulty, and build a personal "stack" from the options available.

## 🛠️ Built With

- **React 19** – for building the user interface with components
- **TypeScript** – for type safety and fewer bugs
- **Vite** – for fast development and bundling
- **Tailwind CSS 4** – for utility-first styling
- **daisyUI** – for pre-built Tailwind components (cards, badges, buttons)

## ✨ Features

1. **Technology Explorer** – Browse a grid of technology cards (React, Vue.js, Node.js, PostgreSQL, and more), each showing its category, difficulty level, and rating.
2. **Responsive Design** – The layout adjusts smoothly across mobile, tablet, and desktop, including a mobile-friendly navigation bar with a hamburger menu.
3. **Your Stack Panel** – A dedicated panel that displays the technologies a user has picked, so they can review their chosen stack at a glance.

---

## 📘 React Questions

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It lets us write HTML-like code directly inside JavaScript/TypeScript files. It's used in React because it makes it much easier to describe what the UI should look like, instead of writing a lot of `document.createElement()` calls. Under the hood, JSX gets converted into regular JavaScript function calls.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only — the child cannot change them. **State** is data that lives inside a component itself and can change over time (for example, when a user clicks a button). When state changes, React re-renders that component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a component remember a value between renders and update it. When the value changes, React automatically re-renders the component with the new value. In this project, `useState` is used to manage interactive UI state, such as keeping track of the technologies a user selects for "Your Stack," and toggling the mobile navigation menu open or closed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets a component run code after it renders — for example, fetching data, setting a timer, or subscribing to something. It's normally used for loading data because fetching happens outside of React's normal rendering flow (it's a "side effect").

In this project, instead of `useEffect`, the technology data from `data.json` is fetched using a plain `fetch()` call that returns a `Promise`, which is then read using React's `use()` hook inside a `<Suspense>` boundary. This shows the fallback loading message automatically while the data is being fetched, without needing to manually track a loading state with `useEffect` and `useState`.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` prop helps React tell items in a list apart from each other. When the list changes (an item is added, removed, or reordered), React uses the `key` to figure out exactly which items changed, instead of re-rendering the whole list. Without a proper unique key, React can get confused and cause bugs or slow performance.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on a condition, instead of always showing the same thing. In React, this is often done with `&&` or a ternary (`? :`).

Example from this project, inside the "Your Stack" panel:

```tsx
{stack.length === 0 && (
  <p className="mt-6 text-xs text-slate-400">
    Nothing added yet. Click "Add to Stack" on a card.
  </p>
)}
```

This message only renders when `stack.length` is `0`. Once the user adds a technology, the condition becomes `false` and the message disappears.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Parent to child:** the parent passes data as **props**. For example, `Technologies` passes `tech={tech}` down to `TechCard`, and `TechCard` reads it through its `Props` interface.

**Child to parent:** since props are read-only, the child can't directly change the parent's data. Instead, the parent passes a **function** down as a prop (for example, `onAdd`). When something happens in the child (like a button click), it calls that function. The function actually runs in the parent, so the parent updates its own state — and because state changes cause a re-render, the new data flows back down through props again.
