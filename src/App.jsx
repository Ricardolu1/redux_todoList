import React ,{
  useCallback,
  useEffect,
  useMemo
}from 'react';
import './App.css';
import Todos from './Todos'
import Control from './Control'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  addTodo,
  setTodo,
  removeTodo,
  toggleTodo,
} from './actions'

const LS_KEY = '_$-todos_'



function App(props) {
  const{
    todos,
    dispatch
  }=props


  const controlCbs = useMemo(()=>{
    return bindActionCreators({
      addTodo
    },dispatch)
  },[])

  const todosCbs = useMemo(()=>{
    return bindActionCreators({
      removeTodo,
      toggleTodo
    },dispatch)
  },[])
  
  //只需在程序启动时执行一次
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem(LS_KEY) || "[]")
    dispatch(setTodo(todos))
  },[])
  
  useEffect(()=>{
    localStorage.setItem(LS_KEY,JSON.stringify(todos))
  },[todos])
  
  return (
    <div className="todo-list">
      <Control 
        {...controlCbs}
      />
      <Todos 
        {...todosCbs}
        todos={todos}
      />
    </div>
  );
}


export default connect(
  function mapStateToProps(state) { //这里的state就是当前的store里面的state
    return state
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch } //对象的键是dispat，只是传进来的参数，相当于{dispatch:dispatch}
  }
)(App)
