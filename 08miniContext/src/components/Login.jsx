import React, { useContext, useState } from 'react'
import Usercontext from '../context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(Usercontext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  }
  return (
    <>
    <h2>Login</h2>
    <input 
      type='text'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='Username'
    />
    {" "}
    <input 
      type='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password'
    />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login