import React from 'react';

function TodoList({ todoItems, handleToggleDone }) {
  return (
    <div className="column">
      <h2>Todo</h2>
      <ul className="todo-list">
        {todoItems.map((item) => (
          <li key={item}>
            <input
              type="checkbox"
              id={`todo_${item}`}
              onChange={() => handleToggleDone(item)}
            />
            <label htmlFor={`todo_${item}`}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
