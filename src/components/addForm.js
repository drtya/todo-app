import React from 'react';

const AddForm = ({todos,setTodos,setInputText, inputText}) => {
    const addHandler= (e)=> {
        e.preventDefault();
        setTodos([...todos,{todoName:inputText,id: Math.round(Math.random()*1000),isActive:true, isDone:false, isImportant:false, editing:false}])
        setInputText('')
    };
    const inputHandler =(e) =>{
        setInputText(e.target.value)
    };
    return (
            <form action="" className="add-todo d-flex justify-content-between align-items-space-between" onSubmit={addHandler}>
                <input type="text" placeholder='What need to do' className='add-todo__input p-1' onChange={inputHandler} value={inputText} required/>
                <button type='submit' className="btn btn-outline-success" >Add Todo</button>
            </form>
    );
};

export default AddForm;