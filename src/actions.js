export function addTodo(newTodo) {
  return (dispatch,getState)=>{
    const {todos} = getState()
    if (!todos.find(todo=>todo.text===newTodo.text)) {
      dispatch ({
        type:'add',
        payload:newTodo
      })
    }
  }
}



export function setTodo(init) {
  return{
    type:'set',
    payload:init
  }
}

export function removeTodo(id) {
  return{
    type:'remove',
    payload:id
  }
}

export function toggleTodo(id) {
  return{
    type:'toggle',
    payload:id
  }
}