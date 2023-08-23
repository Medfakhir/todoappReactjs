import React, { useState } from 'react';
import { FaTrash, FaEdit, FaSave, FaStop } from 'react-icons/fa';
import AlertMessage from './AlertMessage';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [todoListTitle, setTodoListTitle] = useState('Todo List');
  const [alertMessage, setAlertMessage] = useState(null);

  const showAlert = (message, type) => {
    setAlertMessage({ message, type });
    setTimeout(() => {
      setAlertMessage(null);
    }, 3000);
  };

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { text: inputText, completed: false }]);
      setInputText('');
      showAlert('Task added successfully', 'success');
    } else {
      showAlert('Please enter text', 'error');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setInputText(todos[index].text);
  };

  // ... (other functions)

  const deleteAllTasks = () => {
    setTodos([]);
    showAlert('All tasks deleted', 'success');
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (editIndex !== -1) {
        handleSaveEdit(editIndex);
      } else {
        addTodo();
      }
    }
  };

  const handleEditTitle = () => {
    const newTitle = window.prompt('Enter the new title:');
    if (newTitle !== null && newTitle.trim() !== '') {
      setTodoListTitle(newTitle);
    }
  };

  const handleSaveEdit = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: inputText } : todo
    );
    setTodos(updatedTodos);
    setEditIndex(-1);
    setInputText('');
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setInputText('');
  };

  return (
    <div>
      <div className='flex justify-center w-full mt-[50px]'>
      {alertMessage && (
        <AlertMessage
          message={alertMessage.message}
          type={alertMessage.type}
          onClose={() => setAlertMessage(null)}
        />
      )}
      </div>
    <div className="max-w-md mx-auto  p-4 border rounded shadow">
      
      <h1 className="text-2xl font-bold mb-4 cursor-pointer" onClick={handleEditTitle}>
        {editIndex === -1 ? (
          todoListTitle
        ) : (
          <input
            className="p-2 border rounded"
            type="text"
            value={todoListTitle}
            onChange={(e) => setTodoListTitle(e.target.value)}
          />
        )}
      </h1>
      <div className="flex mb-4">
        <input
          className="flex-grow p-2 border rounded"
          onKeyDown={handleInputKeyDown}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addTodo}
        >
          Add Task
        </button>
      </div>
      <div>
       
        <ul className='mt-[50px] text-2xl font-bold'>
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center mb-2">
              {editIndex === index ? (
                <>
                  <input
                    className="flex-grow p-2 border rounded"
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handleSaveEdit(index);
                      }
                    }}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <button
                    className="px-2 py-1 ml-2 rounded text-white"
                    onClick={() => handleSaveEdit(index)}
                  >
                    <FaSave className="text-green-500 hover:text-red-700" size={18} />
                  </button>
                  <button
                    className="px-2 py-1 ml-2 rounded"
                    onClick={handleCancelEdit}
                  >
                    <FaStop className="text-red-500" size={18} />
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={`flex-grow cursor-pointer ${
                      todo.completed ? 'line-through text-gray-500' : ''
                    }`}
                    onClick={() => toggleTodo(index)}
                  >
                    {todo.text}
                  </span>
                  <button
                    className="px-2 py-1 ml-2 rounded hover:bg-yellow-100"
                    onClick={() => handleEditClick(index)}
                  >
                    <FaEdit className="text-green-500" size={18} />
                  </button>
                  <button
                    className="px-2 py-1 ml-2 rounded hover:bg-red-100"
                    onClick={() => removeTodo(index)}
                  >
                    <FaTrash className="text-red-500" size={18} />
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
        <button
          className="px-4 py-2 mt-[50px] bg-red-500 text-white rounded hover:bg-red-600"
          onClick={deleteAllTasks}
        >
          Delete All Tasks
        </button>
      </div>
    </div>
    </div>
  );
};

export default TodoList;
