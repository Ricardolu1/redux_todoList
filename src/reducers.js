   
export default function reducer(state={todos:[]},action){
                  const {type,payload}=action
                  const {todos} = state
                  switch (type) {
                    case 'set':
                      return {
                        todos:payload
                      }

                    case 'add':
                      return {
                        todos:[...todos,payload]
                      }

                    case 'remove':
                      return {
                        todos: todos.filter(todo=>{
                          return todo.id!==payload
                        })
                      }

                    case 'toggle':
                      return {
                        todos: todos.map(todo=>{
                          return todo.id===payload
                                ?{
                                    ...todo,
                                    complete:!todo.complete
                                }
                                :todo
                        })
                      }
                    default:
                  }
                  return state
                }
