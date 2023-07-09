import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddTodo = ({ newTodo, setNewTodo, handleAddTodo }) => {
  return (
    <div className="add-todo-container">
        <form className="form-submit-todo" onSubmit={handleAddTodo}>
            <input
                type="text"
                placeholder="Add New Todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onSubmit={handleAddTodo}>
                <FaPlus />
            </button>
        </form>
    </div>
  );
}

export default AddTodo;
