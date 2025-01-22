# 🚀 TodoList Application with React and Context API

A feature-rich **TodoList Application** built with **React** and **Context API**. This app is designed for effective task management, allowing you to add, edit, delete, and mark tasks as complete. Powered by **Vite**, it ensures fast development and optimal performance.

---

## 🌟 Features

- **Add Tasks**: Quickly add new tasks.
- **Edit Tasks**: Modify existing tasks effortlessly.
- **Delete Tasks**: Remove tasks when they're no longer needed.
- **Mark as Finished**: Keep track of completed tasks.
- **Responsive Design**: Works seamlessly on all devices.

---

## 📂 Project Structure

```plaintext
src/
├── App.jsx                # Main application component
├── App.css                # Global styles
├── context/               # Context API for state management
│   ├── TodoContext.js     # Provides todos state
│   ├── TodoDispatchContext.js # Provides dispatch for state updates
├── Reducer/               # Reducer for managing state transitions
│   └── todoReducer.js     # Logic for adding, editing, deleting, and completing todos
├── Component/             # All UI components
│   ├── AddTodo/           # Add new tasks
│   │   ├── AddTodo.jsx    # AddTodo component logic
│   │   └── AddTodo.css    # AddTodo component styles
│   ├── TodoList/          # Display list of todos
│   │   └── TodoList.jsx   # TodoList component logic
│   ├── Todo/              # Individual todo item component
│       ├── Todo.jsx       # Todo component logic
│       └── Todo.css       # Todo component styles
```
## ⚡ Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/todolist.git
   cd todolist
   ```
2. **Install Dependencies**
```
npm install
```
3. **Run the Development Server**
```
npm run dev
```
4. **Open the Application Visit ```http://localhost:5173``` in your browser to use the app.**
## 🚀Scripts
  ```npm run dev:``` : Start the development server..
  
  ```npm run build```: Build the application for production.
  
  ```npm run lint```: Check the code for quality issues using ESLint.
  
  ```npm run preview```: Preview the production build locally.
  
  ---
## 🔧 How It Works

1. **Context API**:  
   Manages the application's global state for todos and dispatch functions. It eliminates the need for prop drilling by providing state and dispatch functions directly to components.

2. **Reducer Function**:  
   A pure function that handles state transitions for various actions:
   - **Adding new tasks**: Appends a new task to the todo list.
   - **Editing tasks**: Updates the content of an existing task.
   - **Deleting tasks**: Removes tasks from the list.
   - **Marking tasks as complete**: Toggles a task's status between incomplete and finished.

3. **Dynamic Rendering**:  
   React dynamically updates the UI based on user actions. Changes to the state trigger automatic re-rendering of the components, ensuring a seamless user experience.

---
## 🛠️Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React DOM**: Provides DOM-specific methods required for React.
- **Vite**: A fast and modern build tool for front-end projects.
- **ESLint**: A tool that helps maintain code quality and consistency by identifying potential issues.
- **React Hooks**: Enables state and lifecycle features in functional components, making code more concise and reusable.
- **React Refresh**: Provides fast refresh capabilities during development for a better development experience.
---
## ☀️Acknowledgments

We'd like to express our gratitude to the following tools and libraries:

- **React**: For providing a flexible and robust library for building user interfaces.
- **Vite**: For offering blazing-fast development speeds and optimizing the build process.
- **ESLint**: For helping to keep the code clean, consistent, and error-free.
