import React from "react"

function TodoItemComponent(props){
    const Style = {
        textDecoration:"line-through"
    }
    return (
        <div>
            <input type="checkbox"
            checked={props.task.completed}
            onChange = {() => props.handleChange(props.task.id)}
            />
            <p style={props.task.completed ? Style : null}>{props.task.taskname}</p>
        </div>
    )
}

export default TodoItemComponent;