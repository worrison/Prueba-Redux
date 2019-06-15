import store from '../store'
let index=0;
function addTodo(text) {

    let myAction = {
        type: 'ADD_TODO',
        text:"Javier",
        id: index++
    };
    
    store.dispatch(myAction)
    
}

export default addTodo
