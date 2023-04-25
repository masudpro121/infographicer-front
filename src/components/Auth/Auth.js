import React, { useContext, useState } from 'react'
import withNavbar from '../../hocs/withNavbar'
import "./auth.css"
import Logo from '../../assets/img/logo.png'
import Google from '../../assets/img/google.png'
import Facebook from '../../assets/img/facebook.png'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../../App'
import { signin, signup } from '../../apis/server'
import { setCookie } from '../../utils/cookie'
import { ToastContainer, toast } from 'react-toastify'

export const Signup =()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [residence, setResidence] = useState('saudi')
    const navigate = useNavigate();
    const handleSignup = () => {
        signup({email, password, residence})
        .then((res)=>res.json())
        .then(res=>{
            console.log(res);
            if(res.status=='ok'){
                navigate('/signin')
            }
        })
    }
    return (
      <div className='auth-cont'>
        <div className='auth signup'>
        <div className="card-bg"></div>
        <div className="card-content">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="card-title mb-3">
                <h5>Create an account</h5>
                <small>Already have an account? 
                    <span>
                        <Link to="/signin"> Log in</Link>
                    </span>
                </small> 
            </div>
            <div className="myform">
                <div>
                    <label htmlFor="email">Email address</label> <br/>
                    <input onChange={(e)=>setEmail(e.target.value)} id="email" type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br/>
                    <input onChange={(e)=>setPassword(e.target.value)} id="password" type="password" />
                </div>
                <div>
                    <label htmlFor="residence">Country of residence</label> <br/>
                    <select onChange={(e)=>setResidence(e.target.value)} name="Residence" id="residence">
                        <option value="saudi">Saudi Arab</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="pakistan">Pakistan</option>
                    </select>
                </div>
            </div>
            <div className="mybtn">
                <button onClick={handleSignup}>Create an account</button>
            </div>
            <div className="f-auth mt-3">
                <div >
                    <small>Or, continue with</small>
                </div>
                <div className='mx-1'>
                    <img className='google' src={Google} alt="Google" /> <small>Or</small>
                </div>
                <div>
                    <img className='facebook' src={Facebook} alt="Facebook" />
                </div>
            </div>
        </div>
      </div>
      </div>
    )
}
  
export const Signin =()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleLogin = () => {
        signin({email, password})
        .then((res)=>res.json())
        .then(res=>{
            if(res.status=='ok'){
                navigate('/')
                setCookie('user', res.data, 5)
            }else{
                toast.error('Something wrong')
            }
        })
        
    }
    return (
      <div className="auth-cont">
        <div className='auth signin'>
        <div className="card-bg"></div>
        <div className="card-content">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="card-title mb-3">
                <h5>Sign in</h5>
                <small>
                    Don't have an account?
                    <span>
                        <Link to="/signup"> Sign up</Link>
                    </span>
                </small> 
            </div>
            <div className="myform">
                <div>
                    <label htmlFor="email">Email address</label> <br/>
                    <input id="email" type="email" onChange={e=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br/>
                    <input id="password" type="password" onChange={e=>setPassword(e.target.value)} />
                </div>
            </div>
            <div className="mybtn" onClick={handleLogin}>
                <button >Sign in</button>
            </div>
            <div className="f-auth mt-3">
                <div >
                    <small>Or, continue with</small>
                </div>
                <div className='mx-1'>
                    <img className='google' src={Google} alt="Google" /> <small>Or</small>
                </div>
                <div>
                    <img className='facebook' src={Facebook} alt="Facebook" />
                </div>
            </div>
        </div>
      </div>
      <ToastContainer autoClose={200000000000} theme='dark' />
      </div>
    )
}
  





  