import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./Signin.css"

function Signup() {
    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8080/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form  class="inputs"action="POST">
                <input class="email" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input class="pass" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input class="btn"type="submit" onClick={submit} />

            </form>
            <br />

            <Link  to="/">
                <h1>Login</h1>
            </Link>

        </div>
    )
}

export default Signup