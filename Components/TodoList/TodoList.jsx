import React, { useEffect } from 'react'
import { useState } from 'react'
import ButtonComp from '../UI/ButtonComp'

function TodoList(props) {

    const [taskList,setTaskList] = useState([])

    console.log("todolist props",props.addedTask)

    const updateCompletedTask = (data,id)=>{
      // e.preventDefault()
      console.log("id>",id)
      props.onDeletedTask(id)
    }

    useEffect(()=>{
        let updatedTask = props.addedTask.map((task,index)=>(
            //  <ul key={task._id}> {task.task}  {<ButtonComp title="Completed" id={task._id} onButtonClick={updateCompletedTask} />}</ul>
            <ul key={task._id} style={{ listStyle: 'none', margin: '10px 0', padding: '0' }}>
  <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #ddd', padding: '10px' }}>
    <span>{task.task}</span>
    <ButtonComp title="Completed" id={task._id} onButtonClick={updateCompletedTask} />
  </li>
</ul>
            )
            )
            setTaskList(updatedTask)},
    [props.addedTask])



  return (
    <>
   { taskList}
    </>
  )
}

export default TodoList
