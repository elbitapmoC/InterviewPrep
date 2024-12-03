# Comprehensive React & JavaScript Interview Preparation

---

## Key Areas of Focus: Detailed Requirements

### **Reusable Components & State Management**

#### Assignments: Build a UI Component Library

- **Button Component**:

  - [x] Accepts `variant` prop with predefined values:
    - `variant="primary"` for main actions (blue background, white text).
    - `variant="secondary"` for secondary actions (gray background, black text).
    - `variant="danger"` for destructive actions (red background, white text).
  - [x] Accepts `size` prop with values:
    - `size="sm"` for compact buttons (padding: 8px, font-size: 14px).
    - `size="md"` for regular buttons (padding: 12px, font-size: 16px).
    - `size="lg"` for larger buttons (padding: 16px, font-size: 18px).
  - [x] Accepts `onClick` handler to handle click events.
  - [x] Includes an optional `isLoading` prop to show a spinner when `isLoading={true}`.

- **Card Component**:

  - [x] Accepts `title` (string) to display as the card header.
  - [x] Accepts `content` (string) for main card content.
  - [x] Accepts `imageUrl` (string) for an optional image at the top of the card.

- **Modal Component**:

  - [x] Accepts `isOpen` (boolean) to control modal visibility.
  - [x] Accepts `onClose` function to handle the modal close action.
  - [x] Includes a close button with `onClose` action by default.

#### State Management

- **Modal Component v2 (Context API)**:

  - [x] Make modal component available throughout the app by using Context API.

- **To-Do List (Redux)**:
  - [ ] Use Redux to manage a global list of to-do items, with each item containing `id`, `text`, and `completed` (boolean) fields.
  - [ ] Implement `add`, `remove`, and `toggleComplete` actions to manage items.
  - [ ] Use React Router to add routes:
    - **Home**: Displays a welcome message.
    - **To-Do List**: Displays the list of to-do items with add/remove/toggle functionality.

---

### **Responsive Layouts**

#### Assignment: Recipe Product Grid

- **Requirements**:
  - [x] Build a responsive recipe grid using CSS Grid.
  - [x] Implement a sidebar with filter options:
    - Category filter by Tags.
    - Rating filter (5 Stars, 4+, 3+, 2+, 1+).
      - Recipes with no ratings will only show by default.
  - [x] Update Card to display:
    - `image` (string)
    - `name` (string)
    - `prepTimeMinutes`
    - `rating` (e.g., 4.5/5)
  - [x] Use media queries to adjust layout:
    - **Mobile** (1 column)
    - **Tablet** (2 columns)
    - **Desktop** (4 columns)
  - [x] When user clicks on "Read More" button, a modal opens with:
    - `name`
    - `ingredients` (list)
    - `instructions` (list)
    - `tags` (displayed at the bottom left)
    - `rating` (displayed at the bottom right)

---
