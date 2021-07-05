import React, {useState} from "react"


function ListComponent(){

    const [todoData, setTodoData] = useState([
        {id:"1",
        taskname:"Drink Water"
    },
        {id:"2",
        taskname:"Reading"
    },
        {id:"3",
        taskname:"Learn React"}]);
       
    
    const onClick = (e) => {
        console.log(e.target.innerText);
        const _todoData = [...todoData]
        console.log(_todoData);
        const index = _todoData.findIndex((x) => x.taskname === e.target.innerText);
        _todoData.splice(index,1,{
            ..._todoData[index],
            taskname: `${_todoData[index].taskname} is clicked`
        })
        setTodoData(_todoData)
    }
    const renderList = 
        todoData.map(({taskname}) => (<div><input type="checkbox"/><label onClick = {onClick}>{taskname}</label></div>));
    

    return (
        <div>
        
           {renderList}
        
        </div>

    )

}

export default ListComponent;