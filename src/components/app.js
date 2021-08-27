import React,{useState, useEffect} from 'react';
import Header from "./header";
import Search from "./search";
import TodoList from "./todolist";
import AddForm from "./addForm";


const App = () => {
    const [todos,setTodos] = useState([])
    const [inputText, setInputText] = useState([])
    const [status,setStatus] = useState('active')
    const [filterTodos, setFilterTodos] = useState([])
    const [searchText, setSearchText] =useState('')
    useEffect(() => {
        if (status === 'active'){
            setFilterTodos(todos.filter((el)=> el.isActive))
        }
        else{
            setFilterTodos(todos.filter((el)=> el.isDone))
        }
    },[status,todos])

    return (
        <div className='background'>
            <div className="todo-container ">
                <div className="dicoration d1"> </div>
                <div className="dicoration d2"> </div>
                <div className="dicoration d3"> </div>
                <Header todos={todos}/>
                <Search setStatus={setStatus} status={status} setSearchText={setSearchText} />
                <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} setFilterTodos={setFilterTodos} searchText={searchText}/>
                <AddForm todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
            </div>
        </div>
    );
};

export default App;