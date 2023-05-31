import React, {  useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./Signin.css"
function Signin() {
    
    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/",{
                email,password
            })
            .then(res=>{
                if(res.data === "exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data ==="notexist"){
                    alert("User account does not exists")
                }
            })
            .catch(e=>{
                alert("Something went wrong , please try again with valid user ID and password")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form class ="inputs"action="POST">
                <input class ="email"type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input  class="pass"type="password" onChange={(e) => { 
                    
                    setPassword(e.target.value) 
                    }} placeholder="Password"  />
                <input class="btn"type="submit" onClick={submit} />
            </form>
            <br />
            <Link to="/signup">
           <h1>Signup</h1> 
            </Link>

        </div>
    )
}

export default Signin