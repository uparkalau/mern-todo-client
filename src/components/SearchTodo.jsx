import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchTodo = ({ searchTodo, setSearchTodo, handleSearchTodo }) => {
  return (
    <div className="search-todo-container">
        <form className="form-submit-todo" onSubmit={handleSearchTodo}>
            <input
                type="text"
                placeholder="Search Todo"
                value={searchTodo}
                onChange={(e) => setSearchTodo(e.target.value)}
            />
            <button type="submit" onSubmit={handleSearchTodo}>
                <FaSearch />
            </button>
        </form>
    </div>
  );
}

export default SearchTodo;
