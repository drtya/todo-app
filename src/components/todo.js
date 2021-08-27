import React from 'react';

const Todo = ({name,setTodos,todos,todoObj}) => {
    const doneHandler = ()=>{
        setTodos(todos.map((todo)=>todo.id=== todoObj.id ? {...todo, isDone:!todo.isDone , isActive: !todo.isActive}: todo))
    };
    const importantHandler = ()=>{
        setTodos(todos.map((todo)=>todo.id=== todoObj.id ? {...todo, isImportant:!todo.isImportant}: todo))
    };
    const delHandler = () =>{
        setTodos(todos.filter((todo)=>todo.id !== todoObj.id))
    };
    const editHandler = (e) =>{
        e.preventDefault();
    };
    const editInputHandler = (e) => {
        setTodos(todos.map(el => el.id === todoObj.id ? {...el, todoName : e.target.value}:el))
    };
    const editBtnHandler = () =>{
        setTodos(todos.map((todo) =>todo.id === todoObj.id ? {...todo, editing:!todo.editing} :todo))
    };
    return (
        <li className="todo-item list-group-item d-flex justify-content-between align-items-center">
            <span className={`todo-item__name ${todoObj.isDone ? 'done': ''} ${todoObj.isImportant ? 'important': ''} ${todoObj.editing ? 'd-none': ''} `}>{name}</span>
            <form className={`edit-form ${todoObj.editing ? 'editing': ''}`} onSubmit={editHandler}>
                <input type="text" className='edit-form__input' value={todoObj.todoName} onChange={editInputHandler}/>
            </form>
            <div>
                <button className={`btn btn-outline-secondary ${todoObj.editing ? 'active' : ''}`} onClick={editBtnHandler}>{todoObj.editing ===true ? 'Save': 'Edit'}</button>
                <button className={`btn btn-outline-success ${todoObj.isDone ? 'active' : ''}`} onClick={doneHandler}>Done</button>
                <button className={`btn btn-outline-warning ${todoObj.isImportant ? 'active' : ''}`} onClick={importantHandler}>Important</button>
                <button className={`btn btn-outline-danger `} onClick={delHandler}>Delete</button>
            </div>
        </li>
    );
};

export default Todo;