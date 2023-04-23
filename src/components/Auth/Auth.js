import React from 'react'
import withNavbar from '../../hocs/withNavbar'
import "./auth.css"
import Logo from '../../assets/img/logo.png'
import Google from '../../assets/img/google.png'
import Facebook from '../../assets/img/facebook.png'

function signup() {
    return (
      <div className='auth'>
        <div className="card-bg"></div>
        <div className="card-content">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="card-title mb-3">
                <h5>Create an account</h5>
                <small>Already have an account? <span>Log in</span></small> 
            </div>
            <div className="myform">
                <div>
                    <label htmlFor="email">Email address</label> <br/>
                    <input id="email" type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br/>
                    <input id="password" type="password" />
                </div>
                <div>
                    <label htmlFor="residence">Country of residence</label> <br/>
                    <select name="Residence" id="residence">
                        <option value="saudi">Saudi Arab</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="pakistan">Pakistan</option>
                    </select>
                </div>
            </div>
            <div className="mt-3">
                <button>Create an account</button>
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
    )
}
  
function signin() {
    return (
      <div className='auth'>
        <div className="card-bg"></div>
        <div className="card-content">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="card-title mb-3">
                <h5>Create an account</h5>
                <small>Already have an account? <span>Log in</span></small> 
            </div>
            <div className="myform">
                <div>
                    <label htmlFor="email">Email address</label> <br/>
                    <input id="email" type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br/>
                    <input id="password" type="password" />
                </div>
                <div>
                    <label htmlFor="residence">Country of residence</label> <br/>
                    <select name="Residence" id="residence">
                        <option value="saudi">Saudi Arab</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="pakistan">Pakistan</option>
                    </select>
                </div>
            </div>
            <div className="mt-3">
                <button>Create an account</button>
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
    )
}
  


export const Signup = withNavbar(signup)
export const Signin = withNavbar(signin)

  