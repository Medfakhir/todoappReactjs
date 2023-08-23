import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8 mt-10">
        <TodoList />
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
