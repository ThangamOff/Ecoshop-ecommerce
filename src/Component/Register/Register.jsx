import React from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Register = () => {
  const [name, setName] = useState({fullname:"",email:"",password:"",confirm:""});
  const [error, seterror] = useState({fullname:false,email:false,password:false,confirm:false});
  const [success, setsuccess] = useState("");

  const navigate = useNavigate();

  function login(params) {

    if(name.fullname===""){
      seterror({...error,fullname:true})
      
    }
   else if(name.email===""){
      seterror({...error,email:true})
      
    }
    else if(name.password===""){
      seterror({...error,password:true})
      
    }
    else if(name.confirm===""){
      seterror({...error,confirm:true})
      
    }
    else{
      setsuccess("Acc Created")
      setTimeout(() => {
        navigate('/login');
        
      }, 2000);
    }

  }

  function getData(event) {
    const names = event.target.name
    const values = event.target.value
    console.log(names,values);
    setName({...name,[names]:values})
    seterror({...error,[names]:false})
  }

console.log(name)
  return (
    <div className='form-body'>
      <div className="form-container">
          <h2>Register</h2>
        <div>
          <h1>{success}</h1>
          <input type="text" placeholder="Full Name" name="fullname" onChange={getData} />
              {error.fullname && 
                <p>Add Name</p>
              }
          <input type="email" placeholder="Email"  name="email" onChange={getData} />
              {error.email && 
                <p>Add email</p>
              }
          <input type="password" placeholder="Password"name="password" onChange={getData} />
              {error.password && 
                <p>Add password</p>
              }
          <input type="password" placeholder="Confirm Password" name="confirm" onChange={getData} />
              {error.confirm && 
                <p>Add confirm pass</p>
              }

          <button type="submit" onClick={()=>login()}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Register;