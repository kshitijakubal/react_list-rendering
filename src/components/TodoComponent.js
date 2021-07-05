import React, {useState} from "react"
import TodoItemComponent from "./TodoItemComponent";

function ListComponent(){

    const [todoData, setTodoData] = useState([
        {id:"1",
        taskname:"Drink Water",
        completed: false
    },
        {id:"2",
        taskname:"Reading",
        completed: false

    },
        {id:"3",
        taskname:"Learn React",
        completed: false

    }]);
       
    
    const handleChange = (id) => {
        // console.log(e.target.innerText);
        const _todoData = [...todoData]
        // console.log(_todoData);
        const index = _todoData.findIndex((x) => x.id === id);
        _todoData.splice(index,1,{
            ..._todoData[index],
            completed: !todoData.completed
        })
        setTodoData(_todoData)
    }
    const renderList = 
        todoData.map(task=> (<TodoItemComponent key={task.id} task={task} handleChange={handleChange}/>));
    

    return (
        <div>
        
           {renderList}
        
        </div>

    )

}

export default ListComponent;