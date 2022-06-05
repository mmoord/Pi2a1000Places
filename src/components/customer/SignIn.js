import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";


export default function CustomerSignin(){

  const usernameInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();
 
  

  async function login(){
    const customer = {
      username: usernameInput.current.value,
      password: passwordInput.current.value,
    };

    const requestOptions = {
      method: 'POST',
      
      body: JSON.stringify({ 
        username: customer.username,
        password: customer.password
     })
    }
 

    try{
      const response = await fetch("http://localhost:8080/Pi2a1000Places/auth",requestOptions)
      .then((response) => {
        if(response.ok){console.log("All Good")}else{throw new Error(response.status)}
      }
      )
      navigate("/home")
    }catch (error) {
      console.log("ERROR")
      if(error == "Error: 404" ) {
        alert("This user does not exist")
        console.error(error);
      }
  }

  }
  

  return(
          <>
            <h4>Welcome back, please log in below.</h4>
            <input placeholder="Enter Username" ref={usernameInput}></input>
            <input type="password" placeholder="Enter password" ref={passwordInput}></input>
            <button onClick={login}>Login</button>
        </>


  );


}