import React from 'react';

const Search = ({status, setStatus, setSearchText}) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    const searchHandler = (e) => {
        setSearchText(e.target.value)
    }
    return (
            <div className="todo-search d-flex justify-content-between align-items-center">
                <input type="text" className="search-input p-1" placeholder='search' onChange={searchHandler}/>
                <div>
                    <button type='button' className={`btn btn-outline-primary ${status === 'active' ? 'active' : ''}`} value='active' onClick={statusHandler}>Active</button>
                    <button type='button' className={`btn btn-outline-primary ${status === 'done' ? 'active' : ''}`} value='done' onClick={statusHandler}>Done</button>
                </div>
            </div>
    );
};

export default Search;