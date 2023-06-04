import React from 'react';
import './Vertication.css';
import hLogo from "../Assets/image 13.png";
import profile from "../Assets/Vector (25).png";
import password from "../Assets/Vector (25).png";


const SignIn = () => {

  const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Student', label: 'Student' }
  ]

  return (
    <div className='sign'>
          <div className="sign-c">
              <div className="sign-img">
                  <img src={hLogo} alt="" />
              </div>
              <div className="form-c">
                  <form action='Forgot' method='get'>
                  <h2>Change Password</h2>
                  
                  <h2>Kindly enter a new password</h2>

                  <div className="inputs">
                      <div className="input-f">
                          <input type="text" placeholder='New password' className='input'/>
                          <img src={profile} alt="" />
                      </div>

                      <div className="input-f">
                          <input type="password" placeholder='Repeat password' className='input' />
                          <img src={password} alt="" />
                        </div>
                          


                 
                        
                           
                  </div>
              </form>
                
              </div>
              
          </div>  
          
    </div>
  )
}

export default SignIn