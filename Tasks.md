# Comprehensive React & JavaScript Interview Preparation

---

## Key Areas of Focus: Assignments

### 1. **Reusable Components & State Management**

- [ ] **Assignment**: Build a small UI component library. Create reusable components such as Button, Card, Modal, and Navbar.
- [ ] **Goal**: Make each component customizable with props for different states (e.g., primary/secondary buttons, card with/without image).
- [ ] **State Management**:
  - [ ] Add a global dark mode toggle with Context API.
  - [ ] Create a simple to-do list using Redux for global state.
  - [ ] Integrate React Router to navigate between "Home" and "To-Do" pages.
- [ ] **Outcome**: Develop strong reusable component design and state management skills.

### 2. **Responsive Layouts**

- [ ] **Assignment**: Design a responsive e-commerce product grid using CSS Flexbox/Grid. Implement a sidebar with filters and a main area for product cards.
- [ ] **Goal**: Practice media queries to adapt the layout for mobile, tablet, and desktop.
- [ ] **Outcome**: Gain hands-on experience making layouts adaptable for various screen sizes.

### 3. **JavaScript (ES6+) Essentials**

- [ ] **Assignment**: Write small functions that utilize:
  - [ ] Destructuring and the spread/rest operators.
  - [ ] Async/await with a mock API call.
  - [ ] Higher-order functions like `.map()`, `.filter()`, and `.reduce()`.
- [ ] **Goal**: Get comfortable with modern JavaScript features that simplify code and are essential in React.
- [ ] **Outcome**: Solidify your grasp of ES6+ features in practical use cases.

### 4. **Performance Optimization**

- [ ] **Assignment**: Create a basic shopping cart app and optimize it.
  - [ ] Use `React.memo` on the cart item component to prevent unnecessary re-renders.
  - [ ] Memoize functions passed to components using `useCallback`.
  - [ ] Use `useMemo` for expensive calculations.
- [ ] **Goal**: Practice performance techniques to manage re-renders and improve efficiency.
- [ ] **Outcome**: Master using memoization tools to optimize React app performance.

### 5. **Next.js Familiarity**

- [ ] **Assignment**: Create a blog with Next.js using both SSR and SSG:
  - [ ] Use `getStaticProps` to fetch and render blog post lists.
  - [ ] Use `getServerSideProps` to fetch comments dynamically when each post loads.
  - [ ] Integrate basic TypeScript types for props and state.
- [ ] **Goal**: Understand how and when to use SSR and SSG in Next.js.
- [ ] **Outcome**: Develop hands-on experience with server-side capabilities and TypeScript in Next.js.

---

# Core JavaScript Fundamentals

1. **What is hoisting?**

   - [ ] **Answer**: Variables and function declarations are moved to the top of their scope upon code execution, allowing access to these declarations before they’re defined in the code.

2. **What is an interface?**

   - [ ] **Answer**: In TypeScript, an interface defines the shape of an object, enforcing certain properties or types but without implementation. It’s used to define contracts in the code.

3. **What are closures?**

   - [ ] **Answer**: Closures allow a function to access variables from an enclosing function even after the outer function has finished executing.
   - [ ] **Use in React**:
     - [ ] Handling events
     - [ ] Managing state in callbacks within components

4. **Types of promises**

   - [ ] **Answer**: Common states include:
     - [ ] **Pending**: Initial state, neither fulfilled nor rejected.
     - [ ] **Fulfilled**: Operation completed successfully.
     - [ ] **Rejected**: Operation failed.

5. **What is interpretation?**

   - [ ] **Answer**: Code is run directly by an interpreter without a separate compilation step.
   - [ ] **Examples**: Python, JavaScript, Ruby are interpreted languages.

6. **Callback**

   - [ ] **Answer**: A function passed into another function as an argument and executed later within that function.

7. **Event-driven models**
   - [ ] **Answer**: Event-driven models rely on events (like clicks, input changes) to trigger code execution, making applications interactive.

---

## JavaScript Security and Syntax in React

8. **JavaScript Security**

   - [ ] **Answer**: Involves understanding security issues such as the same-origin policy and cross-site scripting (XSS).
   - [ ] **Examples**: Avoiding direct HTML injection, using `Content Security Policy`.

9. **Arrow Functions**

   - [ ] **Answer**: Arrow functions (`=>`) offer a shorter syntax and don’t bind `this`, inheriting it lexically from the parent scope.

10. **Classes**

    - [ ] **Answer**: Classes are blueprints for creating objects. They include constructor methods, inheritance, and are syntactic sugar over prototypes in JavaScript.

11. **JavaScript Features Used with React**
    - [ ] **Answer**:
      - [ ] **Destructuring**: Extract properties from objects or arrays.
      - [ ] **Rest/Spread Operators**: Combine or expand arrays/objects.
      - [ ] **Template Literals**: Simplify string interpolation and multi-line strings.

---

## Core React and JavaScript in Context

12. **React.js: Events, Refs, and Router**

    - [ ] **Answer**: Refs allow access to DOM elements directly, and React Router manages in-app navigation.
    - [ ] **Why are promises necessary in React?**: Promises handle asynchronous operations (like API calls) without blocking rendering.

13. **React.js: Components**

    - [ ] **Answer**: Components are the building blocks of React apps.
    - [ ] **Higher-Order Components (HOC)**:
      - [ ] A design pattern that takes a component as input and returns an enhanced component.
      - [ ] **Examples**: Conditional rendering, data fetching, adding additional props.

14. **React.js: Configuration and Setup**

    - [ ] **Answer**: Setting up a React environment involves configuring tools like Webpack, Babel, and linters to optimize performance.

15. **React.js: Hooks and Context**

    - [ ] **Answer**: Hooks (like `useState`, `useEffect`) let you manage state and lifecycle events in functional components. Context enables passing data across the component tree without prop drilling.

16. **ReactJSX**
    - [ ] **Answer**: JSX is a syntax extension for JavaScript that allows HTML-like syntax in React. It compiles to `React.createElement` calls.

---

## React Lifecycle, Props, and State

17. **Lifecycle Methods**

    - [ ] **Answer**: Lifecycle methods control the mounting, updating, and unmounting phases of components (e.g., `componentDidMount`, `componentDidUpdate`).

18. **Props**

    - [ ] **Answer**: Props are read-only inputs to components that allow passing data from parent to child components.

19. **State**

    - [ ] **Answer**: State is a mutable object managed within components to track data that may change over time.

20. **Controlled vs. Uncontrolled Components**

    - [ ] **Answer**:
      - [ ] **Controlled**: React manages the input state (e.g., `value` and `onChange`).
      - [ ] **Uncontrolled**: The DOM handles the state, typically accessed via `ref`.

21. **How do you prevent re-renders in React?**
    - [ ] **Answer**: Use `React.memo` for component memoization, `useMemo` for expensive calculations, and `useCallback` to memoize functions.

---

## Advanced React and Related Topics

22. **If you want to change a class component to a functional component, where would you start?**

    - [ ] **Answer**: Replace lifecycle methods with hooks (`useState`, `useEffect`), and replace `this` references with local variables.

23. **Virtual DOM**

    - [ ] **Answer**: The Virtual DOM is a lightweight copy of the actual DOM, allowing efficient updates by re-rendering only what has changed.

24. **CSS Position Property**

    - [ ] **Answer**: The `position` property specifies positioning methods for elements (e.g., `static`, `relative`, `absolute`, `fixed`, `sticky`).

25. **RESTful Web Services**

    - [ ] **Answer**: RESTful services use HTTP methods (GET, POST, PUT, DELETE) for CRUD operations on resources.

26. **React Hooks with Redux**

    - [ ] **Answer**: Hooks manage local state in functional components, while Redux provides a central store for global state management.

27. **Can React Hooks replace Redux?**

    - [ ] **Answer**: Hooks are great for local state, but Redux is often needed for complex state in large apps.

28. **Higher-Order Components (Extended)**
    - [ ] **Answer**: HOCs enable reusing component logic by wrapping components with added behavior (e.g., logging, conditionally rendering).

---

## Additional Questions

29. **What is hoisting?**

    - [ ] **Answer**: Variables and function declarations move to the top of their scope, allowing access before definition.

30. **What is an interface?**

    - [ ] **Answer**: Defines object structure in TypeScript, enforcing specific properties/types.

31. **What are closures?**

    - [ ] **Answer**: Functions retain access to variables from their defining scope.

32. **Types of promises**

    - [ ] **Answer**: Pending, fulfilled, rejected.

33. **What is interpretation?**

    - [ ] **Answer**: Code runs directly without compilation.

34. **Higher Order Components in React?**

    - [ ] **Answer**: Functions that take components as input and return modified components.

35. **Why are promises necessary in React?**

    - [ ] **Answer**: JavaScript is single-threaded, meaning it executes code line by line. Promises enable asynchronous programming, allowing other tasks to continue running.

36. **Callback**

    - [ ] **Answer**: A function passed into another function as an argument.

37. **RESTful Web Services**

    - [ ] **Answer**: A design pattern for creating stateless APIs using HTTP methods.

38. **Uncontrolled vs Controlled Components**

    - [ ] **Answer**:
      - **Controlled**: React manages form data.
      - **Uncontrolled**: The DOM manages its own state.

39. **How do you prevent re-renders in React?**
    - [ ] **Answer**: Use `React.memo`, `useMemo`, `useCallback`, and `useRef` for DOM elements without re-renders.
