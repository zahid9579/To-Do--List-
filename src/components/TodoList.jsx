// TodoList.js
import React from 'react';
import '../App.css'

function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, id) => (
        <li key={id} className="todo-item">
            <input type='checkbox' />
          
            {todo}
         
          <button onClick={() => onDeleteTodo(id)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
