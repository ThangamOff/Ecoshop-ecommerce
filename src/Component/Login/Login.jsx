import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [mail, setmail] = useState({lmail:"",pass:""})
    const [error, seterror] = useState({lmail:false,pass:false})
    const [success, setsuccess] = useState("")

    const navigate = useNavigate();

    function loginHome(params) {

        if (mail.lmail==="") {
            seterror({...error,lmail:true})
        }
        else if (mail.pass==="") {
            seterror({...error,pass:true})
        }
        else{
            setsuccess("login success")
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
    }

    function logdata(login) {
        const logmail = login.target.name
        const logvalue = login.target.value
        console.log(logmail, logvalue)
        setmail({...mail,[logmail]:logvalue})
        seterror({...error,[logmail]:false})
    }
console.log(mail)
  return (
    <>
    <div className='log-body'>
        <div className="login-container">
            <h2>Login</h2>
            <h3>{success}</h3>
            <input type="email" placeholder="Email" name="lmail" onChange={logdata} />
                {error.lmail && 
                    <p>Add mail</p>
                }           
            <input type="password" placeholder="Password"name="pass" onChange={logdata} />
                {error.pass && 
                    <p>Add pass</p>
                }  
            <button onClick={loginHome}>Login</button>
        </div>
    </div>
    </>
  )
}

export default Login
