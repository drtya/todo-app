import React from 'react';

const Header = ({todos}) => {
    const activeTodos = () =>{
        return todos.filter((el)=> el.isActive).length
    };
    const doneTodos = () =>{
        return todos.filter((el)=> el.isDone).length
    };
    return (
            <div className="todo-header d-flex justify-content-between align-items-center">
                <h1 className="todo-title">Todo list</h1>
                {activeTodos()} more to do, {doneTodos()} done
            </div>
    );
};

export default Header;