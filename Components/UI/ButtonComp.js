import React from 'react'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function ButtonComp(props) {

  console.log("button props",props)
  const dispatch = useDispatch()
  const history = useHistory()

  const loadDataHandler = async () => {
    if (props.title === 'Completed') {
      try {
        console.log("clicked")
        const response = await fetch(`http://localhost:3000/api/deleteTodo/${props.id}`)

        if (response.status === 201) {
          const data = await response.json()
          console.log(data.data)

          props.onButtonClick(data.data, props.id)

        }
      }
      catch (err) {
        console.log(err)
      }

    }
   
  }
  return (
    <td>
      <div>
        <Button variant="primary" type="submit" onClick={loadDataHandler} id={props.id}>{props.title}</Button>
      </div>
    </td>
  )
}

export default ButtonComp
