import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "../redux/actions";
import { deleteTodo } from '../redux/actions/index';
import AddTodo from "./AddTodo";
import SearchTodo from "./SearchTodo";
import DeleteButton from "./DeleteButton";
import { SEARCH_TODO } from "../redux/actions/type";
const TodoForm = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    // const [todoItems, setTodoItems] = useState([]);
    // const [doneItems, setDoneItems] = useState([]);

    const [newTodo, setNewTodo] = useState('');
    const [searchTodo, setSearchTodo] = useState('');

    const handleSearchTodo = (e) => {
        e.preventDefault();
        if (searchTodo.trim() !== '') {
            dispatch({ type: SEARCH_TODO , payload: searchTodo });
            console.log(searchTodo);
            // setSearchTodo(e.target.value);
            console.log(123, 'search');
        }
        // todos.filter((todo) => {
        //     let title = todo.data;
        //     title.toLowerCase().includes(searchTodo.toLowerCase())
        // });
    };
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== '') {
            dispatch(addNewTodo(newTodo));
            setNewTodo('');
        }
    };

    const deleteAllTodos = () => {
        todos.map(todo => dispatch(deleteTodo(todo._id)));
    }

    return (
        <>
            <DeleteButton onClick={deleteAllTodos} />
            <div className="header-item">
                <AddTodo
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    handleAddTodo={handleAddTodo}
                />
                <SearchTodo searchTodo={searchTodo} setSearchTodo={setSearchTodo} handleSearchTodo={handleSearchTodo} />
            </div>


        </>
    )
}

export default TodoForm;