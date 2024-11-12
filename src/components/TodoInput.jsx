// TodoInput.js
import React, { useState } from 'react';
import '../App.css'
function TodoInput({ onAddTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onAddTodo(input);
      setInput('');
    }
  };

  return (
    <div className="input-container">
      <input
        className="input-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new Todo..."
      />
      <button onClick={handleSubmit} className="btn">Add</button>
    </div>
  );
}

export default TodoInput;
