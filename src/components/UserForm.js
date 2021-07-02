import React,{useState} from "react"
import LabelComponent from "./LabelComponent";
import LoginComponent from "./LoginComponent";


function UserForm(){

    const inputStyle = {
         
            width: '100%',
            height: '10px',
            padding: '12px 20px',
            margin: '8px 0',
            display:'inline-block',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
        
    }

    const [userRegistration, setUserRegistration] = useState({
        name:"",
        mobno:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name,value);

        setUserRegistration({...userRegistration, [name]:value})
    }
    // const handleNumberChange = (e) => {
    //     const name = e.target.name
    //     let value = ''
    //     if(Number.isInteger(e.target.value)){
    //         value = e.target.value
    //     }
    //     else{
    //         value = ""
    //     }
    //     console.log(name,value);
    //     setUserRegistration({...userRegistration,[name]:value})
    // }
    const [records, setRecords] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()

        const newRecord = {...userRegistration, id: new Date().getTime().toString()}
        console.log(records)
        setRecords([...records, newRecord])

        setUserRegistration({name:"",mobno:"", email:"", password:""})
        
    }

    const handleClick = (e) => {

    }
    return (
    <div>
        <form action="" onSubmit={handleSubmit} className="form">
            <div>
                <LabelComponent name="Your name"/><br/>
                <input type="text" value= {userRegistration.name}
                    name="name" id="name" className="form-control"
                    style = {inputStyle}
                    onChange = {handleChange} />
            </div>
            <div>
                <LabelComponent name="Mobile number"/><br/>
                <input type="number" value= {userRegistration.mobno}
                    name="mobno" id="mobno" 
                    onChange = {handleChange}
                    style = {inputStyle}
                    placeholder="Mobile number" />
            </div>
            <div>
                <LabelComponent name="Email(optional)"/><br/>
                <input type="email" value={userRegistration.email}
                    name="email" id="email"
                    onChange = {handleChange}
                    style = {inputStyle} />
            </div>
            <div>
                <LabelComponent name="Password"/><br/>
                <input type="password" value={userRegistration.password}
                    name="password" id="password" 
                    onChange = {handleChange}
                    style = {inputStyle}
                    placeholder="Atleast 6 characters"
                    />
                <i class="fas fa-info-circle"></i>
            </div>
            <div>
                <p style={{fontSize:"15px",fontFamily:"serif",fontWeight:"normal"}}>We will send you a text to verify your phone.
Message and Data rates may apply.</p>
            </div>
            <div className="center">
                <center><button className="btn" style={{backgroundColor:"#e1b74b",
                                                margin:"auto",
                                                borderStyle:"solid",
                                                borderWidth:"1px",
                                                padding: "7px",
                                                width:"100%",
                                                alignSelf:"center"}} type="submit">Continue</button></center>
            </div>
            
        </form>
        <div>
                {
                    records.map((element) => {
                        return(
                            <div className="showDataStyle">
                                <p>{element.name}</p>
                                <p>{element.mobno}</p>
                                <p>{element.email}</p>
                                <p>{element.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default UserForm;