import React from 'react';
import Todo from "./todo";

const TodoList = ({todos,setTodos,filterTodos,searchText}) => {
    const searchTodos = filterTodos.filter((todo)=> todo.todoName.includes(searchText));
    return (
        <div>
            <ul className="todo-list list-group">
                {filterTodos.length === 0 ?<li className="list-group-item"> Todos should be here</li> : searchTodos.length ===0 ? <li className="list-group-item"> No matches</li> : searchTodos.map((todoObj,idx)=>(
                    <Todo key={idx} name={todoObj.todoName} todoObj={todoObj} todos={todos} setTodos={setTodos}/>))}
            </ul>
        </div>
    );
};

export default TodoList;