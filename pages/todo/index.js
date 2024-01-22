
import React, { useRef, useState,useEffect } from 'react'
//import ReactQuill from 'react-quill';
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import styles from './Todo.module.css'
import TodoList from '@/Components/TodoList/TodoList';

function Todo() {
  
    const task = useRef(null)
    
    const [showAlert, setShowAlert] = useState(false)
    const [addTask,setAddTask] = useState([])
    const [deleted,setDeleted] = useState()

    useEffect(()=>{

        async function getTodo (){
            const response = await fetch('http://localhost:3000/api/getTodo', {
                method: 'GET',
                
                headers: {
                    'Content-Type': 'application/json',
                   
                }
            })

            console.log(response)

            if (response.status === 201) {
                const data = await response.json()
                console.log("GET DATA>>",data.result)
                setAddTask(data.result)              
            }
        }
        getTodo()

    },[deleted])

    const sendTodoHandler = async (e) => {

        e.preventDefault()
        try {
            const inputTask = task.current?.value
            console.log(inputTask) 

            const response = await fetch('http://localhost:3000/api/newTodo', {
                method: 'POST',
                body: JSON.stringify({ 
                    task: inputTask,
                    
                }),
                headers: {
                    'Content-Type': 'application/json',
                   
                }
            })

            console.log("response",response)
            if (response.status === 201) {
                const data = await response.json()
                console.log(data)
                console.log(addTask)
                setShowAlert(true)
                setTimeout(()=>{
                    setShowAlert(false)
                },3000)  
                setAddTask((prevTask)=>[...prevTask,data.data])            
            }
        }
        catch (err) {

            setShowAlert(true)
           
            console.log("error",err)
        }
    }
    function taskDeleted(id){
        console.log('hii',id)
        setDeleted(id)
    }

    return (
        <>
            {showAlert && <Alert key='success' variant='success'>
                Task Added Sccessfully ....
            </Alert>}
            <Container className={styles.container}>
                <div>
                    <h1>List of Today's Tasks</h1>
                </div>
            </Container>
            <Container className={styles.container}>
            <h1>Add Tak</h1>
            <Form onSubmit={sendTodoHandler}>
                <Form.Group className="mb-3" controlId="Task" >
                    <Form.Label>Add Task</Form.Label>
                    <Form.Control type="string" placeholder="Enter Task" ref={task} />
                </Form.Group>
                
            
               
                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            </Container>
            <Container className={styles.container}>
                <TodoList addedTask={addTask} onDeletedTask={taskDeleted}></TodoList>
            </Container>

        </>
    )
  
}

export default Todo
