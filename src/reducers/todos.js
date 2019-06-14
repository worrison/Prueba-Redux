let initialState={
    todos:[]
}
function reducer (state=initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos:[{
                    text:action.text,
                    id:1
                }],
            };

        default: return state;
    }
}
export default reducer