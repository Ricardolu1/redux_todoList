import React ,{
  memo
}from 'react';
import './Todos.css';
import classnames from 'classnames'


const TodoItem = memo(function TodoItem(props) {
  const {
    todo:{
      id,
      text,
      complete
    },
    toggleTodo,
    removeTodo,
  }=props

  const onChange=()=>{
    toggleTodo(id)
  }

  const onRemove=()=>{
    removeTodo(id)
  }

  return (
    <li className="todo-item">
      <input 
        type="checkbox" 
        onChange={onChange} 
        checked={complete}
      />
      <label className={classnames({complete})}>{text}</label>
      <button onClick={onRemove}>&#xd7;</button>
    </li>
  )
})


//列表区用来展示所有的待办
const Todos = memo(function Todos(props) {
  const {todos,toggleTodo,removeTodo} = props
  return (
    <ul >
      {
        todos.map(todo=>{
          return <TodoItem 
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                />
        })
      }
    </ul>
  );
})

export default Todos;