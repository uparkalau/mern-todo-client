import { useEffect, useState } from 'react';

import { getTodosList } from '../redux/actions/index';
// import { toggleTodo, updateTodo } from "../redux/actions";
// import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../redux/actions/type';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
// import TodoList from './TodoList';
// import Tabs from './Tabs';


export const TodosList = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    // const currentTab = useSelector(state => state.currentTab);
    // const [todoItems, setTodoItems] = useState([]);
    // const [doneItems, setDoneItems] = useState([]);

    useEffect(() => {
        dispatch(getTodosList());
    }, [dispatch])

    // const getTodos = () => {
    //     if (currentTab === ALL_TODOS) {
    //         return todos;
    //     } else if (currentTab === ACTIVE_TODOS) {
    //         return todos.filter(todo => !todo.done)
    //     } else if (currentTab === DONE_TODOS) {
    //         return todos.filter(todo => todo.done)
    //     }
    // }
    // const handleToggleDone = (item) => {
    //     if (doneItems.includes(item)) {
    //       setDoneItems(doneItems.filter((doneItem) => doneItem !== item));
    //       setTodoItems([...todoItems, item]);
    //     } else {
    //       setTodoItems(todoItems.filter((todoItem) => todoItem !== item));
    //       setDoneItems([...doneItems, item]);
    //     }
    // };


    return (
        // <>
        //     <TodoList todoItems={filteredTodoItems} handleToggleDone={handleToggleDone} />
        // </>
        

        <article>
            <ul>
                {
                    todos.map(todo => (
                        <Todo 
                            key={todo._id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default TodosList;