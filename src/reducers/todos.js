let initialState={
    todos:[]
}
function reducer (state=initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            return {
                // ...state,
                todos:[...state.todos, {text: action.text, id: action.id}],
            };

        default: return state;
    }
}
export default reducer