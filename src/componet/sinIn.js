import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';
import { useState } from "react";
import { useHistory } from 'react-router';
import {useForm} from "react-hook-form";


const SinIn = () =>{
const [name , setName] = useState('');
const [password ,setPassword] = useState('');
const { register, handleSubmit } = useForm();

function changeName(evt) {
    setName(evt.target.value);
}
function changePassword(evt) {
    setPassword(evt.target.value);
}

const Register = () =>{
    if(name === "Mariam" && password=== "Gevorgyan") {
        console.log("name : " + name + '\n' + "password : " + password);
    }
    else {
        console.log("Wrong Nmae or Password");
    }
}
    const history = useHistory();
    const changePage = () =>{
       history.push('/signupForm');
    }

    return (
        <div className="form-block">
            <form  onSubmit={handleSubmit((data) => console.log(data))}>
           <div className="form-button">
               <TextField id="outlined-basic"
                          value={name}
                          onChange={(evt)=>changeName(evt)}
                          label="Name"
                          variant="outlined"

               />
           </div>
           <div className="form-button">
               <TextField id="outlined-basic"
                          value={password}
                          required
                          onChange={(evt)=>changePassword(evt)}
                          label="Password"
                          variant="outlined"
               />
           </div>

            <div className="form-button">
                <Button variant="contained"
                        color="primary"
                        onClick={Register}
                >
                        Sin In
                </Button>
                <Button variant="contained"
                        color="secondary"
                        type="button"
                        onClick={changePage}>
                       Sin Up
                </Button>
            </div>
            </form>
        </div>
    )
};

export  default  SinIn;




