
import React, { useContext, useRef, useState } from 'react';
import { userContext } from '../../App';

function UpdateUser() {

  const fnameInput = useRef();
  const lnameInput = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const balanceInput = useRef();
  const url = "http://localhost:8080/Pi2a1000Places"
  const [user, setUser] = useContext(userContext);
  
  console.log(user)

  async function update() {
    // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
    // error due to the refInput.current = undefined, meaning there is no .value available
    const customer = {
        fname: fnameInput.current.value,
        lname: lnameInput.current.value,
        username: usernameInput.current.value,
        password: passwordInput.current.value,
        balance: balanceInput.current.value,
    };
    const requestOptions = {
      method: 'POST',
      
      body: JSON.stringify({ 
        username: customer.username,
        password: customer.password,
        fname: customer.fname,
        lname: customer.lname,
        balance: customer.balance
     })
    }

    const authOption = {
      method: 'POST',

      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    }

    try {
      console.log(user.username, user.password)
      console.log(authOption)
      const response =await fetch(`${url}/auth`, authOption ).then(await fetch(`${url}/customers`,requestOptions).then((result) => {if(!result.ok){throw new Error(result.status)}else{console.log("All Good")}}))
      .then((response) => {if(!response.ok){throw new Error(response.status)}else{console.log("All Good")}})
      
      

        alert("You've Successfully Updated Your Account ");
    } catch (error) {
        console.log("ERROR")
        if(error === {Error: 409}){
          alert("That username has already been taken")
        }
        console.log(error);
    }
}

  return (
    <>
            <h4>Hello, new customer please register below.</h4>
            <input placeholder="Update First Name" ref={fnameInput}></input>
            <input placeholder="Update Last Name" ref={lnameInput}></input>
            <input placeholder="Update Your Balance" ref={balanceInput}></input>
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Update Your Username" ref={usernameInput}></input>
            <input type="password" placeholder="Update Your Password" ref={passwordInput}></input>
            <br></br>
            <button onClick={update}>Sign Up</button>
        </>
  )
}

export default UpdateUser