import React, { useState } from 'react';
import axios from 'axios';
import {useHistory, useLocation} from 'react-router-dom';

export const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let url = props.baseUrl + '/auth/login';
  let location = useLocation();
  let history = useHistory();
  let {from} = location.state || { from: { pathname: "/" } };

// Create a cookie with the JWT
  function handleSubmit(event){
    event.preventDefault();
    axios.post(url, {email, password})
      .then((res) => {
        // localStorage.setItem("my_cookie", res.data);
        document.cookie = 'my-token='+res.data.token+'; max-age=60;';
        history.push(from);
        console.log('History', history);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleOnChange(event){
    if (event.target.name === 'email'){
      setEmail(event.target.value);
    };
    if (event.target.name === 'password'){
      setPassword(event.target.value);
    };
  };

    return(
      <form onSubmit={handleSubmit}>
        <h1>Login to your account:</h1>
        <label>Email: </label>
        <input onChange={handleOnChange} name="email" placeholder="freddie.mercury@gmail.com" size="35" value={email}/>
        <br/>
        <label>Password: </label>
        <input onChange={handleOnChange} name="password" placeholder="queen_rox" size="35" value={password}/>
        <br/>
        <input type='submit' value='Submit'/>
      </form>
    );
};
