import React, { useState } from 'react'
import {auth} from '../Firebase'
import{signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom'

function Login () {
  const navigate= useNavigate()
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")

const signIn =()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then(auth=>{navigate('/home')})
  .catch(error=>console.log(error))

}

const register=()=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then(auth=>{navigate('/home')})
  .catch(error=>console.log(error))

}

  return (
    <div className='main'>
    <h1 className='h1'>Sign in</h1>
    <label className='label'>E-mail</label>
    <input onChange={(e)=>setEmail(e.target.value)} autoComplete='off' className='input' type='email' name='email' />    
    <label className='label'>Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} autoComplete='off' className='password' type='password' name='password' />   
    <button onClick={signIn} className='button'>Login</button>
    <p>By creating your account you agree to conditions of use and privacy notice</p>
    <button onClick={register} className='Button'>Create your Account</button>


    
    </div>
  )
}

export default Login