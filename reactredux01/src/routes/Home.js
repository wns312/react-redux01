import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';

const Home = ({state, addTodo}) => {
    
    const [text, setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("")
    }
    return (
        <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}/>
            <button>Add</button>
        </form>
        {text}
       {JSON.stringify(state)}
        </>
    );
};
//store로부터 state를 가져다 줄 함수
//원래는 mapStateToProps라고 부른다
function mapStateToProps(state) {
    console.log("mapStateToProps call");
    return {state}
}

function mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps call");
    return {
        addTodo : (text)=>{dispatch(actionCreator.addTodo(text))},
        removeTodo : (id)=> {dispatch(actionCreator.removeTodo(id))}
    } 
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);