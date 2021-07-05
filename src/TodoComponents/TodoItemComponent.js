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
            <label style={props.task.completed ? Style : null}>{props.task.taskname}</label>
        </div>
    )
}

export default TodoItemComponent;