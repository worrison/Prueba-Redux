import React from 'react';
import addTodo from '../actions/todo';

function AddTodo() {
    return <div>
        <button onClick={addTodo}>
            Yea
        </button>
    </div>
}

export default AddTodo