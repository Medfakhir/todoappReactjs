import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === '') return;
    const newTodo = {
      id: new Date().getTime(),
      task: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask('');
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border rounded p-2 mr-2 flex-grow"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-6">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              className={`${
                todo.completed ? 'line-through text-gray-500' : ''
              } flex-grow`}
            >
              {todo.task}
            </span>
            <button
              className="text-red-500"
              onClick={() => removeTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
