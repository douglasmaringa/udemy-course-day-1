TODO APP

To know before the first lesson 

Here's the content formatted in Markdown for your README file:

```markdown
# Next.js, Daisy UI, and Framer Motion Guide

## 1. Installing Next.js

### Step 1: Create a New Next.js App
Open your terminal or command prompt and run the following command to create a new Next.js project:

```bash
npx create-next-app@latest my-app
```

Replace `my-app` with the name of your project.

### Step 2: Navigate to Your Project Directory
Change into your project directory:

```bash
cd my-app
```

### Step 3: Start the Development Server
Start your development server to see your Next.js app in action:

```bash
npm run dev
```

Open your browser and go to `http://localhost:3000` to view your app.

---

## 2. Installing Tailwind CSS and Daisy UI

### Step 1: Install Tailwind CSS
Install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 2: Configure Tailwind CSS
Open the `tailwind.config.js` file and configure it to look like this:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
```

### Step 3: Add Tailwind Directives
In your `./styles/globals.css` file, add the following Tailwind CSS directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4: Install Daisy UI
Install Daisy UI, a Tailwind CSS component library:

```bash
npm install daisyui
```

---

## 3. Using Next.js App Router

### Step 1: Understanding Pages in Next.js
In Next.js, each file inside the `pages` directory corresponds to a route.

- For example, `pages/index.js` is the homepage (`/`).
- `pages/about.js` would be accessible at `/about`.

### Step 2: Creating a New Page
To create a new page, simply add a new file in the `pages` directory:

```bash
touch pages/about.js
```

Inside `about.js`, add your React component:

```jsx
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```

This page can now be accessed at `http://localhost:3000/about`.

### Step 3: Using the App Router (Next.js 13+)
In Next.js 13+, you can use the app directory structure (`app/`) to manage routes.

- Each folder inside `app/` is treated as a route.
- For example, `app/about/page.js` would correspond to the `/about` route.

Here's an example of a basic page inside the app directory:

```jsx
// app/about/page.js
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```

### Step 4: Linking Between Pages
Use Next.js’s `Link` component to navigate between pages:

```jsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Site</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```

---

## 4. Using Framer Motion Basics

### Step 1: Installing Framer Motion
Install Framer Motion by running:

```bash
npm install framer-motion
```

### Step 2: Importing and Using `motion` Components
Framer Motion’s `motion` components allow you to animate elements with ease:

```jsx
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Fade In Example</h1>
    </motion.div>
  );
}
```

### Step 3: Basic Properties

- **`initial`**: Defines the starting state of your component before the animation starts.
  - Example: `initial={{ opacity: 0 }}`
- **`animate`**: Defines the state the component should animate to.
  - Example: `animate={{ opacity: 1 }}`
- **`exit`**: Defines how the component should exit when it’s removed from the DOM.
  - Example: `exit={{ opacity: 0 }}`
- **`transition`**: Controls the timing and easing of the animation.
  - Example: `transition={{ duration: 1, ease: 'easeInOut' }}`

### Step 4: Animating with Variants
Variants allow you to define multiple states for an animation and switch between them:

```jsx
const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export default function Example() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1.5 }}
    >
      <h1>Slide In from Left</h1>
    </motion.div>
  );
}
```

### Step 5: Using `AnimatePresence` for Conditional Animations
`AnimatePresence` is used to animate components when they enter and exit the DOM:

```jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Example() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1>Fading Component</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

### Summary

- **Next.js** is a powerful React framework that simplifies routing and server-side rendering.
- **Tailwind CSS** with **Daisy UI** allows for rapid, utility-first styling with pre-built components.
- **Framer Motion** provides easy and flexible animation capabilities, ideal for making your UI more dynamic and engaging.

These notes should help you guide your students through setting up their projects and understanding the basics of these tools.
```

You can copy and paste this Markdown content into your `README.md` file.
