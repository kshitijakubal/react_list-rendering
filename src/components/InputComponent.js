const React = require("react");

const InputComponent = (prop) => {
    return (
        <input type = {prop.type} placeholder={prop.placeholder} value={prop.value}/>
    )
          
}

export default InputComponent
