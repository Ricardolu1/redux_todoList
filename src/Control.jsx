import React ,{
  useRef,
  memo
}from 'react';
import './Control.css';

let isSeq = Date.now()

//输入区，用来提交和输入最新的待办
const Control = memo(function Control(props) {
  const {addTodo}=props
  const inputRef = useRef()

  const onSubmit = (e)=>{
    e.preventDefault()
    let newText = inputRef.current.value.trim()
    if(newText.length===0){
      return
    }
    addTodo({
      id:++isSeq,
      text:newText,
      complete:false
    })
    inputRef.current.value=''
  }
  
  return (
    <div className="control">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" className="new-todo" 
               placeholder="What need to be done?"
               ref={inputRef}
        />
      </form>
    </div>
  );
})

export default Control;