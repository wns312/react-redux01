import {createStore} from "redux"

const ADD = "add"
const REMOVE = "remove"

//인수 받아오는 부분
function addTodo(text) {
    return {type: ADD, text}
}
function removeTodo(id) {
    return {type: REMOVE, id}
}

export const actionCreator = {
    addTodo,
    removeTodo
}

const reducer =(state=[], action) => {
    console.log("reducer call");
    switch (action.type) {
        case ADD:
            //id 생성하는 부분
            return [{text : action.text, id : Date.now()}, ...state];
        case REMOVE:
            return state.filter((element)=>{
                return element.id !== action.id
            });
        default:
            return state;
    }
}
const store = createStore(reducer);

export default store;

