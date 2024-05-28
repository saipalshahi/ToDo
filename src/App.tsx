import React, { useState } from 'react';
import './App.css';

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([
    {
      id: 1,
      title: "hello",
      completed: true,
    }
  ]);

  const [newTitle, setNewTitle] = useState<string>("");

  function addTodo(title: string) {
    const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
    const newTodo = { id: maxId + 1, title: title, completed: false };
    setTodos([...todos, newTodo]);
    setNewTitle("");
  }

  function deleteTodo(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>ToDo</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (newTitle.trim()) {
            addTodo(newTitle);
          }
        }}
      >
        <input
          className='xyz'
          placeholder='Enter anything'
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li className='TodoItem' key={todo.id}>
            <span className='TodoTitle'>{todo.title}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
