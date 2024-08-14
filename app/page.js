'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Page() {
  // Load todos from local storage on component mount
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(savedTodos);
  const [task, setTask] = useState('');
  const [alert, setAlert] = useState(null);

  // Add a new todo
  const addTodo = () => {
    if (task.trim() !== '') {
      const updatedTodos = [...todos, { text: task, done: false }];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setTask('');
      triggerAlert('Item added');
    }
  };

  // Remove a todo
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    triggerAlert('Item removed');
  };

  // Toggle todo completion
  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // Trigger an alert message
  const triggerAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-base-100">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="input input-bordered flex-grow mr-2"
            placeholder="Add a new task"
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Add
          </button>
        </div>
        <ul className="list-none">
          <AnimatePresence>
            {todos.map((todo, index) => (
              <motion.li
                key={index}
                className="flex justify-between items-center mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary mr-2"
                    checked={todo.done}
                    onChange={() => toggleTodo(index)}
                  />
                  <span
                    className={`${
                      todo.done ? 'line-through text-gray-500' : ''
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  className="btn btn-error btn-sm text-white bg-red-800"
                  onClick={() => removeTodo(index)}
                >
                  Remove
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <AnimatePresence>
          {alert && (
            <motion.div
              className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {alert}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Page;
